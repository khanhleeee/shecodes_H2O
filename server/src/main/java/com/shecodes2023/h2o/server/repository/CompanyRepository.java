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

    @Query(value = "select *\n" +
            "from (SELECT ci.accountid,\n" +
            "             ci.name,\n" +
            "             CAST(ci.logo AS VARCHAR(MAX))          as logo,\n" +
            "             ci.province,\n" +
            "             ci.budget,\n" +
            "             CAST(ci.description AS NVARCHAR(MAX))  AS Description,\n" +
            "             ci.establishedyear,\n" +
            "             ci.createddate,\n" +
            "             c.name                                 AS CategoryName,\n" +
            "             s.name                                 AS ServiceName,\n" +
            "             DENSE_RANK() OVER (ORDER BY AccountId) AS Rank\n" +
            "      from CompanyInfo ci\n" +
            "               join CompanyCategory cc on ci.AccountId = cc.CompanyId\n" +
            "               join Service s on cc.ServiceId = s.Id\n" +
            "               join Category c on s.CategoryId = c.Id\n" +
            "      where (:province is null or ci.province = CONVERT(NVARCHAR(50), :province))\n" +
            "        and (:strListCategories is null or c.Name in (SELECT value FROM STRING_SPLIT((:strListCategories), ',')))\n" +
            "        and ((:minBudget is null and :maxBudget is null) or ci.Budget between coalesce(:minBudget, 0) and :maxBudget)\n" +
            "        and AccountId in (select cc.CompanyId\n" +
            "                          from CompanyCategory cc\n" +
            "                          where cc.ServiceId in (select ss.Id\n" +
            "                                                 from Service ss\n" +
            "                                                 where (:strListServices is null or ss.Name in\n" +
            "                                                                                    (SELECT value FROM STRING_SPLIT((:strListServices), ',')))))) r\n" +
            "WHERE Rank BETWEEN (:pageSize * :pageIndex - :pageSize + 1) AND (:pageSize * :pageIndex)", nativeQuery = true)
    List<CustomCompanyDTO> findAllCompanies(@Param("province") String province,
                                            @Param("strListCategories") String strListCategories,
                                            @Param("strListServices") String strListServices,
                                            @Param("minBudget") Integer minBudget,
                                            @Param("maxBudget") Integer maxBudget,
                                            @Param("pageSize") int pageSize,
                                            @Param("pageIndex") int pageIndex);

    @Query(value = "SELECT count(*)\n" +
            "      from CompanyInfo ci\n" +
            "               join CompanyCategory cc on ci.AccountId = cc.CompanyId\n" +
            "               join Service s on cc.ServiceId = s.Id\n" +
            "               join Category c on s.CategoryId = c.Id\n" +
            "      where (:province is null or ci.province = CONVERT(NVARCHAR(50), :province))\n" +
            "        and (:strListCategories is null or c.Name in (SELECT value FROM STRING_SPLIT((:strListCategories), ',')))\n" +
            "        and ((:minBudget is null and :maxBudget is null) or ci.Budget between coalesce(:minBudget, 0) and :maxBudget)\n" +
            "        and AccountId in (select cc.CompanyId\n" +
            "                          from CompanyCategory cc\n" +
            "                          where cc.ServiceId in (select ss.Id\n" +
            "                                                 from Service ss\n" +
            "                                                 where (:strListServices is null or ss.Name in\n" +
            "                                                                                    (SELECT value FROM STRING_SPLIT((:strListServices), ',')))))", nativeQuery = true)
    long count(
            @Param("province") String province,
            @Param("strListCategories") String strListCategories,
            @Param("strListServices") String strListServices,
            @Param("minBudget") Integer minBudget,
            @Param("maxBudget") Integer maxBudget
    );

    @Query(value = "SELECT ci.accountid,\n" +
            "             ci.name,\n" +
            "             CAST(ci.logo AS VARCHAR(MAX))          as logo,\n" +
            "             ci.province,\n" +
            "             ci.budget,\n" +
            "             CAST(ci.description AS NVARCHAR(MAX))  AS Description,\n" +
            "             CAST(ci.content AS NVARCHAR(MAX)) AS Content,\n" +
            "             ci.establishedyear,\n" +
            "             ci.createddate,\n" +
            "             c.name                                 AS CategoryName,\n" +
            "             s.name                                 AS ServiceName,\n" +
            "             CAST(a.Description AS NVARCHAR(MAX)) AS Award\n" +
            "      from CompanyInfo ci\n" +
            "               join CompanyCategory cc on ci.AccountId = cc.CompanyId\n" +
            "               join Service s on cc.ServiceId = s.Id\n" +
            "               join Category c on s.CategoryId = c.Id\n" +
            "      join Award a on ci.AccountId = a.CompanyId\n" +
            "      where ci.AccountId = :companyId", nativeQuery = true)
    List<CustomCompanyDTO> findByCompanyId(@Param("companyId") int companyId);
}
