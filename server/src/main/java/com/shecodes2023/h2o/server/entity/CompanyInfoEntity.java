package com.shecodes2023.h2o.server.entity;

import javax.persistence.*;
import java.sql.Date;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "CompanyInfo", schema = "dbo", catalog = "SheCodes2023H2O")
public class CompanyInfoEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "AccountId", nullable = false)
    private int accountId;
    @Basic
    @Column(name = "Name", nullable = false, length = 50)
    private String name;
    @Basic
    @Column(name = "Logo", nullable = true, length = -1)
    private String logo;
    @Basic
    @Column(name = "Address", nullable = true, length = 100)
    private String address;
    @Basic
    @Column(name = "Ward", nullable = true, length = 50)
    private String ward;
    @Basic
    @Column(name = "District", nullable = true, length = 50)
    private String district;
    @Basic
    @Column(name = "Province", nullable = false, length = 50)
    private String province;
    @Basic
    @Column(name = "Phone", nullable = true, length = 20)
    private String phone;
    @Basic
    @Column(name = "Size", nullable = true, length = 20)
    private String size;
    @Basic
    @Column(name = "Budget", nullable = true)
    private Integer budget;
    @Basic
    @Column(name = "Status", nullable = true, length = 20)
    private String status;
    @Basic
    @Column(name = "Description", nullable = true, length = -1)
    private String description;
    @Basic
    @Column(name = "EstablishedYear", nullable = true)
    private Integer establishedYear;
    @Basic
    @Column(name = "CreatedDate", nullable = true)
    private Date createdDate;
    @Basic
    @Column(name = "ModifiedDate", nullable = true)
    private Date modifiedDate;
    @OneToMany(mappedBy = "companyInfoByCompanyId")
    private Collection<AwardEntity> awardsByAccountId;
    @OneToMany(mappedBy = "companyInfoByCompanyId")
    private Collection<CompanyCategoryEntity> companyCategoriesByAccountId;
    @OneToMany(mappedBy = "companyInfoByCompanyId")
    private Collection<CompanyIndustryEntity> companyIndustriesByAccountId;
    @OneToOne
    @JoinColumn(name = "AccountId", referencedColumnName = "Id", nullable = false)
    private AccountEntity accountByAccountId;
    @OneToMany(mappedBy = "companyInfoByCompanyId")
    private Collection<ConnectionEntity> connectionsByAccountId;
    @OneToMany(mappedBy = "companyInfoByCompanyId")
    private Collection<PreviousClientEntity> previousClientsByAccountId;
    @OneToMany(mappedBy = "companyInfoByCompanyId")
    private Collection<RatingEntity> ratingsByAccountId;

    public int getAccountId() {
        return accountId;
    }

    public void setAccountId(int accountId) {
        this.accountId = accountId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getWard() {
        return ward;
    }

    public void setWard(String ward) {
        this.ward = ward;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public String getProvince() {
        return province;
    }

    public void setProvince(String province) {
        this.province = province;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public Integer getBudget() {
        return budget;
    }

    public void setBudget(Integer budget) {
        this.budget = budget;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getEstablishedYear() {
        return establishedYear;
    }

    public void setEstablishedYear(Integer establishedYear) {
        this.establishedYear = establishedYear;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Date getModifiedDate() {
        return modifiedDate;
    }

    public void setModifiedDate(Date modifiedDate) {
        this.modifiedDate = modifiedDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CompanyInfoEntity that = (CompanyInfoEntity) o;
        return accountId == that.accountId && Objects.equals(name, that.name) && Objects.equals(logo, that.logo) && Objects.equals(address, that.address) && Objects.equals(ward, that.ward) && Objects.equals(district, that.district) && Objects.equals(province, that.province) && Objects.equals(phone, that.phone) && Objects.equals(size, that.size) && Objects.equals(budget, that.budget) && Objects.equals(status, that.status) && Objects.equals(description, that.description) && Objects.equals(establishedYear, that.establishedYear) && Objects.equals(createdDate, that.createdDate) && Objects.equals(modifiedDate, that.modifiedDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(accountId, name, logo, address, ward, district, province, phone, size, budget, status, description, establishedYear, createdDate, modifiedDate);
    }

    public Collection<AwardEntity> getAwardsByAccountId() {
        return awardsByAccountId;
    }

    public void setAwardsByAccountId(Collection<AwardEntity> awardsByAccountId) {
        this.awardsByAccountId = awardsByAccountId;
    }

    public Collection<CompanyCategoryEntity> getCompanyCategoriesByAccountId() {
        return companyCategoriesByAccountId;
    }

    public void setCompanyCategoriesByAccountId(Collection<CompanyCategoryEntity> companyCategoriesByAccountId) {
        this.companyCategoriesByAccountId = companyCategoriesByAccountId;
    }

    public Collection<CompanyIndustryEntity> getCompanyIndustriesByAccountId() {
        return companyIndustriesByAccountId;
    }

    public void setCompanyIndustriesByAccountId(Collection<CompanyIndustryEntity> companyIndustriesByAccountId) {
        this.companyIndustriesByAccountId = companyIndustriesByAccountId;
    }

    public AccountEntity getAccountByAccountId() {
        return accountByAccountId;
    }

    public void setAccountByAccountId(AccountEntity accountByAccountId) {
        this.accountByAccountId = accountByAccountId;
    }

    public Collection<ConnectionEntity> getConnectionsByAccountId() {
        return connectionsByAccountId;
    }

    public void setConnectionsByAccountId(Collection<ConnectionEntity> connectionsByAccountId) {
        this.connectionsByAccountId = connectionsByAccountId;
    }

    public Collection<PreviousClientEntity> getPreviousClientsByAccountId() {
        return previousClientsByAccountId;
    }

    public void setPreviousClientsByAccountId(Collection<PreviousClientEntity> previousClientsByAccountId) {
        this.previousClientsByAccountId = previousClientsByAccountId;
    }

    public Collection<RatingEntity> getRatingsByAccountId() {
        return ratingsByAccountId;
    }

    public void setRatingsByAccountId(Collection<RatingEntity> ratingsByAccountId) {
        this.ratingsByAccountId = ratingsByAccountId;
    }
}
