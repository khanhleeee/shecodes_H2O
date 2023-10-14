package com.shecodes2023.h2o.server.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CompanyResponse {
    private int accountId;
    private String name;
    private String logo;
    private String address;
    private String ward;
    private String district;
    private String province;
    private String phone;
    private String size;
    private Integer budget;
    private String status;
    private String description;
    private Integer establishedYear;
    private Date createdDate;
    private Date modifiedDate;
}
