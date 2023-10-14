package com.shecodes2023.h2o.server.entity;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "Industry", schema = "dbo", catalog = "SheCodes2023H2O")
public class IndustryEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "Id", nullable = false)
    private int id;
    @Basic
    @Column(name = "Name", nullable = false, length = 50)
    private String name;
    @OneToMany(mappedBy = "industryByIndustryId")
    private Collection<CompanyIndustryEntity> companyIndustriesById;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        IndustryEntity that = (IndustryEntity) o;
        return id == that.id && Objects.equals(name, that.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name);
    }

    public Collection<CompanyIndustryEntity> getCompanyIndustriesById() {
        return companyIndustriesById;
    }

    public void setCompanyIndustriesById(Collection<CompanyIndustryEntity> companyIndustriesById) {
        this.companyIndustriesById = companyIndustriesById;
    }
}
