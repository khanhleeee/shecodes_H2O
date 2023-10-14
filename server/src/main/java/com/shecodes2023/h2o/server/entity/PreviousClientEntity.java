package com.shecodes2023.h2o.server.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "PreviousClient", schema = "dbo", catalog = "SheCodes2023H2O")
public class PreviousClientEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "Id", nullable = false)
    private int id;
    @Basic
    @Column(name = "CompanyId", nullable = false)
    private int companyId;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CompanyId", referencedColumnName = "AccountId", insertable = false, updatable = false)
    private CompanyInfoEntity companyInfoByCompanyId;

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PreviousClientEntity that = (PreviousClientEntity) o;
        return id == that.id && companyId == that.companyId;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, companyId);
    }

    public CompanyInfoEntity getCompanyInfoByCompanyId() {
        return companyInfoByCompanyId;
    }

    public void setCompanyInfoByCompanyId(CompanyInfoEntity companyInfoByCompanyId) {
        this.companyInfoByCompanyId = companyInfoByCompanyId;
    }
}
