package com.shecodes2023.h2o.server.service;

import com.shecodes2023.h2o.server.basemodels.BasePaginationRequest;
import com.shecodes2023.h2o.server.response.CompanyResponse;

import java.util.List;

public interface CompanyService {

    List<CompanyResponse> getAllCompanies(
            String province,
            List<String> categories,
            List<String> services,
            Integer minBudget,
            Integer maxBudget,
            BasePaginationRequest paginationRequest
    );

    int count(String province,
              List<String> categories,
              List<String> services,
              Integer minBudget,
              Integer maxBudget);

    CompanyResponse getCompanyByCompanyId(int companyId);
}
