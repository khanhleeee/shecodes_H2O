package com.shecodes2023.h2o.server.entity;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "Connection", schema = "dbo", catalog = "SheCodes2023H2O")
public class ConnectionEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "Id", nullable = false)
    private int id;
    @Basic
    @Column(name = "Email", nullable = false, length = 255)
    private String email;
    @Basic
    @Column(name = "Phone", nullable = true, length = 20)
    private String phone;
    @Basic
    @Column(name = "ProjectDescription", nullable = false, length = 2147483647)
    private String projectDescription;
    @Basic
    @Column(name = "CreatedDate", nullable = false)
    private Date createdDate;
    @Basic
    @Column(name = "Status", nullable = true, length = 20)
    private String status;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getProjectDescription() {
        return projectDescription;
    }

    public void setProjectDescription(String projectDescription) {
        this.projectDescription = projectDescription;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
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
        ConnectionEntity that = (ConnectionEntity) o;
        return id == that.id && companyId == that.companyId && Objects.equals(email, that.email) && Objects.equals(phone, that.phone) && Objects.equals(projectDescription, that.projectDescription) && Objects.equals(createdDate, that.createdDate) && Objects.equals(status, that.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, email, phone, projectDescription, createdDate, status, companyId);
    }

    public CompanyInfoEntity getCompanyInfoByCompanyId() {
        return companyInfoByCompanyId;
    }

    public void setCompanyInfoByCompanyId(CompanyInfoEntity companyInfoByCompanyId) {
        this.companyInfoByCompanyId = companyInfoByCompanyId;
    }
}
