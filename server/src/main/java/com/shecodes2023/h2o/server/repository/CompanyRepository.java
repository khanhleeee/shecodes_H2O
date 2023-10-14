package com.shecodes2023.h2o.server.repository;

import com.shecodes2023.h2o.server.dto.CustomCompanyDTO;
import com.shecodes2023.h2o.server.entity.CompanyInfoEntity;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CompanyRepository extends JpaRepository<CompanyInfoEntity, Integer> {

    @Query(value = "select * " +
            "from (SELECT ci.accountid, " +
            "             ci.name, " +
            "             ci.logo, " +
            "             ci.province, " +
            "             ci.budget, " +
            "             CAST(ci.description AS NVARCHAR(MAX))  AS Description, " +
            "             ci.establishedyear, " +
            "             ci.createddate, " +
            "             c.name                                 AS CategoryName, " +
            "             s.name                                 AS ServiceName, " +
            "             DENSE_RANK() OVER (ORDER BY AccountId) AS Rank " +
            "      FROM CompanyInfo ci " +
            "               join CompanyCategory cc " +
            "                    on ci.AccountId = cc.CompanyId " +
            "               join Category c on cc.CategoryId = c.Id " +
            "               join Service s on cc.ServiceId = s.Id) r " +
            "WHERE Rank BETWEEN (:pageSize * :pageIndex - :pageSize + 1) AND (:pageSize * :pageIndex)", nativeQuery = true)
    List<CustomCompanyDTO> findAllCompanies(@Param("pageSize") int pageSize,
                                            @Param("pageIndex") int pageIndex);
}
