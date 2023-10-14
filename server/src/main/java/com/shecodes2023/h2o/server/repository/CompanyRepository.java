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
            "             CAST(ci.logo AS VARCHAR(MAX))          as logo, " +
            "             ci.province, " +
            "             ci.budget, " +
            "             CAST(ci.description AS NVARCHAR(MAX))  AS Description, " +
            "             ci.establishedyear, " +
            "             ci.createddate, " +
            "             c.name                                 AS CategoryName, " +
            "             s.name                                 AS ServiceName, " +
            "             DENSE_RANK() OVER (ORDER BY AccountId) AS Rank " +
            "      from CompanyInfo ci " +
            "               join CompanyCategory cc on ci.AccountId = cc.CompanyId " +
            "               join Service s on cc.ServiceId = s.Id " +
            "               join Category c on s.CategoryId = c.Id " +
            "      where (:province is null or ci.province = CONVERT(NVARCHAR(50), :province)) " +
            "         or (:strListCategories is null or c.Name in (SELECT value FROM STRING_SPLIT((:strListCategories), ','))) " +
            "          and AccountId in (select cc.CompanyId " +
            "                            from CompanyCategory cc " +
            "                            where cc.ServiceId in (select ss.Id " +
            "                                                   from Service ss " +
            "                                                   where (:strListServices is null or ss.Name in " +
            "                                                                                      (SELECT value FROM STRING_SPLIT((:strListServices), ',')))))) r " +
            "WHERE Rank BETWEEN (:pageSize * :pageIndex - :pageSize + 1) AND (:pageSize * :pageIndex)", nativeQuery = true)
    List<CustomCompanyDTO> findAllCompanies(@Param("province") String province,
                                            @Param("strListCategories") String strListCategories,
                                            @Param("strListServices") String strListServices,
                                            @Param("pageSize") int pageSize,
                                            @Param("pageIndex") int pageIndex);
}
