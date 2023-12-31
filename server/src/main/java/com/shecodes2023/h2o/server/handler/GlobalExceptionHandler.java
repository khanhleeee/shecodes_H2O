package com.shecodes2023.h2o.server.handler;

import com.shecodes2023.h2o.server.basemodels.BaseErrorResponse;
import com.shecodes2023.h2o.server.enums.SheCodesH2OErrorCodeEnum;
import com.shecodes2023.h2o.server.exception.BadRequestException;
import com.shecodes2023.h2o.server.exception.ForbiddenException;
import com.shecodes2023.h2o.server.exception.NotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(Exception.class)
    public ResponseEntity<BaseErrorResponse> handleInternalServerException(Exception ex) {
        LOGGER.error("An exception occurred: ", ex);
        return ResponseBuilder.generateErrorResponse(
                "Internal Server Error!",
                HttpStatus.INTERNAL_SERVER_ERROR,
                500,
                Collections.singletonList(String.valueOf(ex)));
    }

    @ExceptionHandler(value = AccessDeniedException.class)
    public ResponseEntity<BaseErrorResponse> handleAccessDeniedException(AccessDeniedException ex) {
        List<String> details = new ArrayList<>();
        details.add(ex.getMessage());
        LOGGER.warn("Access Denied: " + details);
        return ResponseBuilder.generateErrorResponse(
                "Access Denied!",
                HttpStatus.FORBIDDEN,
                SheCodesH2OErrorCodeEnum.UNAUTHORIZED.getCode(),
                details);
    }

    @ExceptionHandler(value = NotFoundException.class)
    public ResponseEntity<BaseErrorResponse> handleResourceNotFoundException(NotFoundException ex) {
        List<String> details = new ArrayList<>();
        details.add(ex.getMessage());
        LOGGER.warn("Resource not found: " + details);
        return ResponseBuilder.generateErrorResponse(
                "Resource Not Found!",
                HttpStatus.NOT_FOUND,
                ex.getSheCodesH2OErrorCodeEnum().getCode(),
                details);
    }

    @ExceptionHandler(value = BadRequestException.class)
    public ResponseEntity<BaseErrorResponse> handleBadRequestException(BadRequestException ex) {
        List<String> details = new ArrayList<>();
        details.add(ex.getMessage());
        LOGGER.warn("An invalid request was rejected: " + details);
        return ResponseBuilder.generateErrorResponse(
                "Bad Request!",
                HttpStatus.BAD_REQUEST,
                ex.getSheCodesH2OErrorCodeEnum().getCode(),
                details);
    }

    @ExceptionHandler(value = ForbiddenException.class)
    public ResponseEntity<BaseErrorResponse> handleForbiddenException(ForbiddenException ex) {
        List<String> details = new ArrayList<>();
        details.add(ex.getMessage());
        LOGGER.warn("Forbidden: " + details);
        return ResponseBuilder.generateErrorResponse(
                "Forbidden!",
                HttpStatus.FORBIDDEN,
                ex.getSheCodesH2OErrorCodeEnum().getCode(),
                details);
    }
}
