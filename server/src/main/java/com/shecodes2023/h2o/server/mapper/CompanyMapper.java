package com.shecodes2023.h2o.server.mapper;

import com.shecodes2023.h2o.server.entity.CompanyInfoEntity;
import com.shecodes2023.h2o.server.response.CompanyResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Component
public class CompanyMapper {

    @Autowired
    private ModelMapper modelMapper;

    public CompanyResponse convertCompanyEntityToCompanyResponse(CompanyInfoEntity companyInfoEntity) {
        return Objects.isNull(companyInfoEntity)
                ? null
                : modelMapper.map(companyInfoEntity, CompanyResponse.class);
    }
}
