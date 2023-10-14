package com.shecodes2023.h2o.server.entity;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "Category", schema = "dbo", catalog = "SheCodes2023H2O")
public class CategoryEntity {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "Id", nullable = false)
    private int id;
    @Basic
    @Column(name = "Name", nullable = false, length = 50)
    private String name;
    @Basic
    @Column(name = "Description", nullable = true, length = 2147483647)
    private String description;
    @OneToMany(mappedBy = "categoryByCategoryId")
    private Collection<CompanyCategoryEntity> companyCategoriesById;
    @OneToMany(mappedBy = "categoryByCategoryId")
    private Collection<ServiceEntity> servicesById;

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CategoryEntity that = (CategoryEntity) o;
        return id == that.id && Objects.equals(name, that.name) && Objects.equals(description, that.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description);
    }

    public Collection<CompanyCategoryEntity> getCompanyCategoriesById() {
        return companyCategoriesById;
    }

    public void setCompanyCategoriesById(Collection<CompanyCategoryEntity> companyCategoriesById) {
        this.companyCategoriesById = companyCategoriesById;
    }

    public Collection<ServiceEntity> getServicesById() {
        return servicesById;
    }

    public void setServicesById(Collection<ServiceEntity> servicesById) {
        this.servicesById = servicesById;
    }
}
