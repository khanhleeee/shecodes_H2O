package com.shecodes2023.h2o.server.service;

import com.shecodes2023.h2o.server.basemodels.BasePaginationRequest;
import com.shecodes2023.h2o.server.response.CompanyResponse;

import java.util.List;

public interface CompanyService {

    List<CompanyResponse> getAllCompanies(
            BasePaginationRequest paginationRequest
    );
}
