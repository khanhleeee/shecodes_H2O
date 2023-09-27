package com.shecodes2023.h2o.server.controller;

import com.shecodes2023.h2o.server.basemodels.BaseResponse;
import com.shecodes2023.h2o.server.handler.ResponseBuilder;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.security.SecurityRequirements;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "Home", description = "Home API")
@RestController
@RequestMapping(value = "/api")
public class HomeController {

    @Operation(summary = "Home API", description = "[Unauthenticated] Test API")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully!", content = @Content(schema = @Schema(hidden = true))),
            @ApiResponse(responseCode = "404", description = "Resource Not Found!", content = @Content(schema = @Schema(hidden = true))),
            @ApiResponse(responseCode = "500", description = "Internal Server Error!", content = @Content(schema = @Schema(hidden = true)))
    })
    @SecurityRequirements
    @GetMapping(value = "/home")
    public ResponseEntity<BaseResponse<String>> home() {

        return ResponseBuilder.generateResponse(
                "Successfully!",
                HttpStatus.OK,
                "She Codes 2023 - H2O - tienhuynh-tn"
        );
    }
}
