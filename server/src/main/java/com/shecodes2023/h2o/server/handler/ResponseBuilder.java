package com.shecodes2023.h2o.server.handler;

import com.shecodes2023.h2o.server.basemodels.BaseErrorResponse;
import com.shecodes2023.h2o.server.basemodels.BaseResponse;
import com.shecodes2023.h2o.server.utils.DateTimeUtil;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

public class ResponseBuilder {

    public static <T> ResponseEntity<BaseResponse<T>> generateResponse(String message, HttpStatus httpStatus, T responseObj) {
        BaseResponse response = new BaseResponse(message, httpStatus.value(), responseObj);

        return new ResponseEntity<>(response, httpStatus);
    }

    public static ResponseEntity<BaseErrorResponse> generateErrorResponse(String message, HttpStatus httpStatus, int errorCode, List<String> errors) {
        BaseErrorResponse errorResponse = new BaseErrorResponse(
                DateTimeUtil.getZoneDateTimeNow(),
                httpStatus.value(),
                message,
                errorCode,
                errors
        );
        return new ResponseEntity<>(errorResponse, httpStatus);
    }
}
