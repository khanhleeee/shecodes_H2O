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
import org.springframework.web.bind.annotation.*;

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
            @RequestParam(name = "province", required = false) String province,
            @RequestParam(name = "categories", required = false) List<String> categories,
            @RequestParam(name = "services", required = false) List<String> services,
            @RequestParam(name = "min-budget", required = false) Integer minBudget,
            @RequestParam(name = "max-budget", required = false) Integer maxBudget,
            @ModelAttribute BasePaginationRequest paginationRequest
    ) {

        List<CompanyResponse> responses = companyService.getAllCompanies(
                province,
                categories,
                services,
                minBudget,
                maxBudget,
                paginationRequest
        );

        return ResponseBuilder.generateResponse(
                "Successfully!",
                HttpStatus.OK,
                responses
        );
    }

    @SecurityRequirements
    @GetMapping(value = "/count")
    public ResponseEntity<BaseResponse<Integer>> count(@RequestParam(name = "province", required = false) String province,
                                                       @RequestParam(name = "categories", required = false) List<String> categories,
                                                       @RequestParam(name = "services", required = false) List<String> services,
                                                       @RequestParam(name = "min-budget", required = false) Integer minBudget,
                                                       @RequestParam(name = "max-budget", required = false) Integer maxBudget) {

        int response = companyService.count(province,
                categories,
                services,
                minBudget,
                maxBudget);

        return ResponseBuilder.generateResponse(
                "Count list of company successfully!",
                HttpStatus.OK,
                response
        );
    }

    @SecurityRequirements
    @GetMapping(value = "/{companyId}")
    public ResponseEntity<BaseResponse<CompanyResponse>> getCompanyByCompanyId(@PathVariable("companyId") int companyId) {

        CompanyResponse response = companyService.getCompanyByCompanyId(companyId);

        return ResponseBuilder.generateResponse(
                "Get company by company ID successfully!",
                HttpStatus.OK,
                response
        );
    }
}
