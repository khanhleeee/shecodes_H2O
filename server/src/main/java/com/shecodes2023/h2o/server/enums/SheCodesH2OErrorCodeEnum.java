package com.shecodes2023.h2o.server.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Getter
public enum SheCodesH2OErrorCodeEnum {

    // 400 - BAD REQUEST

    // 401 - UNAUTHENTICATED
    UNAUTHENTICATED(HttpStatus.UNAUTHORIZED, 401000, "Chưa xác thực người dùng"),

    // 403 - UNAUTHORIZED
    UNAUTHORIZED(HttpStatus.FORBIDDEN, 403000, "Không có quyền truy cập"),

    // 404 - NOT FOUND

    ;

    private final HttpStatus httpStatus;
    private final int code;
    private final String message;
}
