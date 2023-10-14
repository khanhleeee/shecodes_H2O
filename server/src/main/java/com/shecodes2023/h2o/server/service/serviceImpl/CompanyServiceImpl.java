package com.shecodes2023.h2o.server.service.serviceImpl;

import com.shecodes2023.h2o.server.basemodels.BasePaginationRequest;
import com.shecodes2023.h2o.server.constant.DefaultSortPropertyConstant;
import com.shecodes2023.h2o.server.dto.CustomCompanyDTO;
import com.shecodes2023.h2o.server.entity.CompanyInfoEntity;
import com.shecodes2023.h2o.server.mapper.CompanyMapper;
import com.shecodes2023.h2o.server.repository.CompanyRepository;
import com.shecodes2023.h2o.server.response.CompanyResponse;
import com.shecodes2023.h2o.server.service.CompanyService;
import com.shecodes2023.h2o.server.utils.PaginationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private CompanyMapper companyMapper;

    private LinkedHashMap<Integer, List<CustomCompanyDTO>> getMapIdListCustomCompanyDTO(
            List<CustomCompanyDTO> customCompanyDTOS
    ) {
        return customCompanyDTOS.stream()
                .collect(Collectors.groupingBy(
                        CustomCompanyDTO::getAccountId,
                        LinkedHashMap::new,
                        Collectors.toCollection(ArrayList::new)
                ));
    }

    private CompanyResponse getCompanyResponseFromListCustomCompanyDTO(
            List<CustomCompanyDTO> customCompanyDTOS
    ) {

        List<String> categories = customCompanyDTOS.stream()
                .map(CustomCompanyDTO::getCategoryName)
                .distinct()
                .collect(Collectors.toList());

        List<String> services = customCompanyDTOS.stream()
                .map(CustomCompanyDTO::getServiceName)
                .distinct()
                .collect(Collectors.toList());

        return new CompanyResponse(
                customCompanyDTOS.get(0).getAccountId(),
                customCompanyDTOS.get(0).getName(),
                customCompanyDTOS.get(0).getLogo(),
                customCompanyDTOS.get(0).getProvince(),
                customCompanyDTOS.get(0).getBudget(),
                customCompanyDTOS.get(0).getDescription(),
                customCompanyDTOS.get(0).getEstablishedYear(),
                customCompanyDTOS.get(0).getCreatedDate(),
                categories,
                services
        );
    }

    private List<CompanyResponse> getListCompanyResponseFromListCustomCompanyDTO(
            List<CustomCompanyDTO> customCompanyDTOS
    ) {
        LinkedHashMap<Integer, List<CustomCompanyDTO>> mapIdListCustomCompanyDTO
                = getMapIdListCustomCompanyDTO(customCompanyDTOS);

        return mapIdListCustomCompanyDTO.values()
                .stream().map(this::getCompanyResponseFromListCustomCompanyDTO)
                .collect(Collectors.toList());
    }

    @Override
    public List<CompanyResponse> getAllCompanies(
            String province,
            List<String> categories,
            List<String> services,
            Integer minBudget,
            Integer maxBudget,
            BasePaginationRequest basePaginationRequest
    ) {

        // Prepare pagination & sort
        Sort.Order defaultSortOrder = new Sort.Order(Sort.Direction.ASC, DefaultSortPropertyConstant.ACCOUNT_ID);
        Pageable pageable = PaginationUtil.getPageable(basePaginationRequest, defaultSortOrder);

        String strListCategories = null;
        String strListServices = null;
        if (categories != null)
            strListCategories = String.join(",", categories);
        if (services != null)
            strListServices = String.join(",", services);
        List<CustomCompanyDTO> customCompanyDTOS = new ArrayList<>();
        if (basePaginationRequest.getPageIndex() != null && basePaginationRequest.getPageSize() != null)
            customCompanyDTOS = companyRepository.findAllCompanies(province, strListCategories, strListServices, basePaginationRequest.getPageSize(), basePaginationRequest.getPageIndex());
        else customCompanyDTOS = companyRepository.findAllCompanies(province, strListCategories, strListServices, 10, 1);

        return getListCompanyResponseFromListCustomCompanyDTO(customCompanyDTOS);
    }
}
