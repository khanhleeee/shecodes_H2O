package com.shecodes2023.h2o.server.service.serviceImpl;

import com.shecodes2023.h2o.server.basemodels.BasePaginationRequest;
import com.shecodes2023.h2o.server.constant.DefaultSortPropertyConstant;
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

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CompanyServiceImpl implements CompanyService {

    @Autowired
    private CompanyRepository companyRepository;

    @Autowired
    private CompanyMapper companyMapper;

    @Override
    public List<CompanyResponse> getAllCompanies(
            BasePaginationRequest basePaginationRequest
    ) {

        // Prepare pagination & sort
        Sort.Order defaultSortOrder = new Sort.Order(Sort.Direction.ASC, DefaultSortPropertyConstant.ACCOUNT_ID);
        Pageable pageable = PaginationUtil.getPageable(basePaginationRequest, defaultSortOrder);

        List<CompanyInfoEntity> companyInfoEntities = companyRepository.findAllCompanies(pageable);

        return companyInfoEntities.stream()
                .map(entity -> companyMapper.convertCompanyEntityToCompanyResponse(entity))
                .collect(Collectors.toList());
    }
}
