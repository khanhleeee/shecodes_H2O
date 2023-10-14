package com.shecodes2023.h2o.server.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.sql.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CompanyResponse {
    private int accountId;
    private String name;
    private String logo;
    private String province;
    private Integer budget;
    private String description;
    private String content;
    private String size;
    private Integer establishedYear;
    private Date createdDate;
    private List<String> categories;
    private List<String> services;
    private List<String> awards;
}
