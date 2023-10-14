package com.shecodes2023.h2o.server.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "CompanyIndustry", schema = "dbo", catalog = "SheCodes2023H2O")
public class CompanyIndustryEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "Id", nullable = false)
    private int id;
    @Basic
    @Column(name = "CompanyId", nullable = false)
    private int companyId;
    @Basic
    @Column(name = "IndustryId", nullable = false)
    private int industryId;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CompanyId", referencedColumnName = "AccountId", insertable = false, updatable = false)
    private CompanyInfoEntity companyInfoByCompanyId;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "IndustryId", referencedColumnName = "Id", insertable = false, updatable = false)
    private IndustryEntity industryByIndustryId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCompanyId() {
        return companyId;
    }

    public void setCompanyId(int companyId) {
        this.companyId = companyId;
    }

    public int getIndustryId() {
        return industryId;
    }

    public void setIndustryId(int industryId) {
        this.industryId = industryId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CompanyIndustryEntity that = (CompanyIndustryEntity) o;
        return id == that.id && companyId == that.companyId && industryId == that.industryId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, companyId, industryId);
    }

    public CompanyInfoEntity getCompanyInfoByCompanyId() {
        return companyInfoByCompanyId;
    }

    public void setCompanyInfoByCompanyId(CompanyInfoEntity companyInfoByCompanyId) {
        this.companyInfoByCompanyId = companyInfoByCompanyId;
    }

    public IndustryEntity getIndustryByIndustryId() {
        return industryByIndustryId;
    }

    public void setIndustryByIndustryId(IndustryEntity industryByIndustryId) {
        this.industryByIndustryId = industryByIndustryId;
    }
}
