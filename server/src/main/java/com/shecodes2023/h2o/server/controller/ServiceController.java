package com.shecodes2023.h2o.server.controller;

import com.shecodes2023.h2o.server.basemodels.BaseResponse;
import com.shecodes2023.h2o.server.handler.ResponseBuilder;
import com.shecodes2023.h2o.server.response.ServiceResponse;
import com.shecodes2023.h2o.server.service.ServiceService;
import io.swagger.v3.oas.annotations.security.SecurityRequirements;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "Service", description = "Service API")
@RestController
@RequestMapping(value = "/api/services")
public class ServiceController {

    @Autowired
    private ServiceService serviceService;

    @SecurityRequirements
    @GetMapping
    public ResponseEntity<BaseResponse<List<ServiceResponse>>> getAllServices() {

        List<ServiceResponse> responses = serviceService.getAllService();

        return ResponseBuilder.generateResponse(
                "Get list of all services successfully!",
                HttpStatus.OK,
                responses
        );
    }
}
