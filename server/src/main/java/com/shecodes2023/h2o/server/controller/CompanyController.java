package com.shecodes2023.h2o.server.controller;

import com.shecodes2023.h2o.server.basemodels.BasePaginationRequest;
import com.shecodes2023.h2o.server.basemodels.BaseResponse;
import com.shecodes2023.h2o.server.handler.ResponseBuilder;
import com.shecodes2023.h2o.server.response.CompanyResponse;
import com.shecodes2023.h2o.server.service.CompanyService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirements;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Company", description = "Company API")
@RestController
@RequestMapping(value = "/api/companies")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @SecurityRequirements
    @GetMapping
    public ResponseEntity<BaseResponse<List<CompanyResponse>>> getAllCompanies(
            @ModelAttribute BasePaginationRequest paginationRequest
    ) {

        List<CompanyResponse> responses = companyService.getAllCompanies(
                paginationRequest
        );

        return ResponseBuilder.generateResponse(
                "Successfully!",
                HttpStatus.OK,
                responses
        );
    }
}
