package com.shecodes2023.h2o.server.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "CompanyCategory", schema = "dbo", catalog = "SheCodes2023H2O")
public class CompanyCategoryEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "Id", nullable = false)
    private int id;
    @Basic
    @Column(name = "CompanyId", nullable = false)
    private int companyId;
    @Basic
    @Column(name = "CategoryId", nullable = false)
    private int categoryId;
    @Basic
    @Column(name = "ServiceId", nullable = true)
    private Integer serviceId;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CompanyId", referencedColumnName = "AccountId", insertable = false, updatable = false)
    private CompanyInfoEntity companyInfoByCompanyId;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "CategoryId", referencedColumnName = "Id", insertable = false, updatable = false)
    private CategoryEntity categoryByCategoryId;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ServiceId", referencedColumnName = "Id", insertable = false, updatable = false)
    private ServiceEntity serviceByServiceId;

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

    public int getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(int categoryId) {
        this.categoryId = categoryId;
    }

    public Integer getServiceId() {
        return serviceId;
    }

    public void setServiceId(Integer serviceId) {
        this.serviceId = serviceId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CompanyCategoryEntity that = (CompanyCategoryEntity) o;
        return id == that.id && companyId == that.companyId && categoryId == that.categoryId && Objects.equals(serviceId, that.serviceId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, companyId, categoryId, serviceId);
    }

    public CompanyInfoEntity getCompanyInfoByCompanyId() {
        return companyInfoByCompanyId;
    }

    public void setCompanyInfoByCompanyId(CompanyInfoEntity companyInfoByCompanyId) {
        this.companyInfoByCompanyId = companyInfoByCompanyId;
    }

    public CategoryEntity getCategoryByCategoryId() {
        return categoryByCategoryId;
    }

    public void setCategoryByCategoryId(CategoryEntity categoryByCategoryId) {
        this.categoryByCategoryId = categoryByCategoryId;
    }

    public ServiceEntity getServiceByServiceId() {
        return serviceByServiceId;
    }

    public void setServiceByServiceId(ServiceEntity serviceByServiceId) {
        this.serviceByServiceId = serviceByServiceId;
    }
}
