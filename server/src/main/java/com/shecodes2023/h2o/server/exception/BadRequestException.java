package com.shecodes2023.h2o.server.exception;

import com.shecodes2023.h2o.server.enums.SheCodesH2OErrorCodeEnum;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@Getter
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class BadRequestException extends RuntimeException {

    private SheCodesH2OErrorCodeEnum sheCodesH2OErrorCodeEnum;

    public BadRequestException(String message) {
        super(message);
    }

    public BadRequestException(SheCodesH2OErrorCodeEnum sheCodesH2OErrorCodeEnum, String errorMessage) {
        super(errorMessage);
        this.sheCodesH2OErrorCodeEnum = sheCodesH2OErrorCodeEnum;
    }
}