package com.shecodes2023.h2o.server.dto;

import java.sql.Date;

public interface CustomCompanyDTO {
    int getAccountId();
    String getName();
    String getLogo();
    String getProvince();
    Integer getBudget();
    String getDescription();
    Integer getEstablishedYear();
    Date getCreatedDate();
    String getCategoryName();
    String getServiceName();
}
