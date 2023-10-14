package com.shecodes2023.h2o.server.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "Account", schema = "dbo", catalog = "SheCodes2023H2O")
public class AccountEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "Id", nullable = false)
    private int id;
    @Basic
    @Column(name = "Email", nullable = false, length = 255)
    private String email;
    @Basic
    @Column(name = "Password", nullable = true, length = 60)
    private String password;
    @Basic
    @Column(name = "Status", nullable = true, length = 20)
    private String status;
    @Basic
    @Column(name = "RoleId", nullable = false)
    private int roleId;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "RoleId", referencedColumnName = "Id", insertable = false, updatable = false)
    private RoleEntity roleByRoleId;
    @OneToOne(mappedBy = "accountByAccountId")
    private CompanyInfoEntity companyInfoById;

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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AccountEntity that = (AccountEntity) o;
        return id == that.id && roleId == that.roleId && Objects.equals(email, that.email) && Objects.equals(password, that.password) && Objects.equals(status, that.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, email, password, status, roleId);
    }

    public RoleEntity getRoleByRoleId() {
        return roleByRoleId;
    }

    public void setRoleByRoleId(RoleEntity roleByRoleId) {
        this.roleByRoleId = roleByRoleId;
    }

    public CompanyInfoEntity getCompanyInfoById() {
        return companyInfoById;
    }

    public void setCompanyInfoById(CompanyInfoEntity companyInfoById) {
        this.companyInfoById = companyInfoById;
    }
}
