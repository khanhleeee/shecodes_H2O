package com.shecodes2023.h2o.server.repository;

import com.shecodes2023.h2o.server.entity.CompanyInfoEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepository extends JpaRepository<CompanyInfoEntity, Integer> {

    @Query(value = "SELECT AccountId, " +
            "       Name, " +
            "       Logo, " +
            "       Address, " +
            "       Ward, " +
            "       District, " +
            "       Province, " +
            "       Phone, " +
            "       Size, " +
            "       Budget, " +
            "       Status, " +
            "       Description, " +
            "       EstablishedYear, " +
            "       CreatedDate, " +
            "       ModifiedDate " +
            "FROM CompanyInfo", nativeQuery = true)
    List<CompanyInfoEntity> findAllCompanies(Pageable pageable);
}
