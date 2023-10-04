CREATE DATABASE SheCodes2023H2O
GO

USE SheCodes2023H2O
GO

------------------------------ CREATE TABLE ------------------------------
CREATE TABLE [Role]
(
    Id   INT IDENTITY (1, 1) NOT NULL,
    Name VARCHAR(10)         NOT NULL
)
GO

CREATE TABLE [Account]
(
    Id       INT IDENTITY (1, 1) NOT NULL,
    Email    VARCHAR(255)        NOT NULL,
    Password CHAR(60)            NULL,
    Status   NVARCHAR(20)        NOT NULL,
    RoleId   INT                 NOT NULL
)
GO

CREATE TABLE [CompanyInfo]
(
    AccountId INT           NOT NULL,
    Name      NVARCHAR(50)  NOT NULL,
    Logo      TEXT          NULL,
    Address   NVARCHAR(100) NOT NULL,
    Ward      NVARCHAR(50)  NOT NULL,
    District  NVARCHAR(50)  NOT NULL,
    Province  NVARCHAR(50)  NOT NULL,
    Phone     VARCHAR(20)   NULL,
    Size      NVARCHAR(20)  NOT NULL,
    Budget    INT           NOT NULL,
    Status    NVARCHAR(20)  NULL,
)
GO

CREATE TABLE [Category]
(
    Id          INT IDENTITY (1, 1) NOT NULL,
    Name        NVARCHAR(50)        NOT NULL,
    Description NVARCHAR(MAX)       NULL
)
GO

CREATE TABLE [SubCategory]
(
    Id         INT IDENTITY (1, 1) NOT NULL,
    Name       NVARCHAR(50)        NOT NULL,
    CategoryId INT                 NOT NULL
)
GO

CREATE TABLE [CompanyCategory]
(
    Id         INT IDENTITY (1, 1) NOT NULL,
    CompanyId  INT                 NOT NULL,
    CategoryId INT                 NOT NULL
)
GO

CREATE TABLE [Industry]
(
    Id   INT IDENTITY (1, 1) NOT NULL,
    Name NVARCHAR(50)        NOT NULL
)
GO

CREATE TABLE [CompanyIndustry]
(
    Id         INT IDENTITY (1, 1) NOT NULL,
    CompanyId  INT                 NOT NULL,
    IndustryId INT                 NOT NULL
)
GO

CREATE TABLE [Rating]
(
    Id          INT IDENTITY (1, 1) NOT NULL,
    Star        INT                 NOT NULL,
    Comment     NTEXT               NOT NULL,
    CreatedDate DATETIME            NOT NULL,
    CompanyId   INT                 NOT NULL
)
GO

CREATE TABLE [Connection]
(
    Id                 INT IDENTITY (1,1) NOT NULL,
    Email              VARCHAR(255)       NOT NULL,
    Phone              VARCHAR(20)        NULL,
    ProjectDescription NVARCHAR(MAX)      NOT NULL,
    CreatedDate        DATETIME           NOT NULL,
    Status             NVARCHAR(20)       NULL,
    CompanyId          INT                NOT NULL
)

CREATE TABLE [Award]
(
    Id        INT IDENTITY (1,1) NOT NULL,
    CompanyId INT                NOT NULL
)

CREATE TABLE [PreviousClient]
(
    Id        INT IDENTITY (1,1) NOT NULL,
    CompanyId INT                NOT NULL
)

------------------------------ CREATE CONSTRAINT ------------------------------
--- PRIMARY KEY ---
ALTER TABLE [Role]
    ADD CONSTRAINT PK_Role PRIMARY KEY (Id);
ALTER TABLE [Account]
    ADD CONSTRAINT PK_Account PRIMARY KEY (Id);
ALTER TABLE [CompanyInfo]
    ADD CONSTRAINT PK_CompanyInfo PRIMARY KEY (AccountId);
ALTER TABLE [Category]
    ADD CONSTRAINT PK_Category PRIMARY KEY (Id);
ALTER TABLE [SubCategory]
    ADD CONSTRAINT PK_SubCategory PRIMARY KEY (Id);
ALTER TABLE [CompanyCategory]
    ADD CONSTRAINT PK_CompanyCategory PRIMARY KEY (Id);
ALTER TABLE [Industry]
    ADD CONSTRAINT PK_Industry PRIMARY KEY (Id);
ALTER TABLE [CompanyIndustry]
    ADD CONSTRAINT PK_CompanyIndustry PRIMARY KEY (Id);
ALTER TABLE [Rating]
    ADD CONSTRAINT PK_Rating PRIMARY KEY (Id);
ALTER TABLE [Connection]
    ADD CONSTRAINT PK_Connection PRIMARY KEY (Id);
ALTER TABLE [Award]
    ADD CONSTRAINT PK_Award PRIMARY KEY (Id);
ALTER TABLE [PreviousClient]
    ADD CONSTRAINT PK_PreviousClient PRIMARY KEY (Id);

--- UNIQUE ---
ALTER TABLE [Account]
    ADD CONSTRAINT UNIQUE_Email UNIQUE (Email);

-- FOREIGN KEY ---
ALTER TABLE [Account]
    ADD CONSTRAINT FK_Account_Role
        FOREIGN KEY (RoleId) REFERENCES Role (Id);

ALTER TABLE [CompanyInfo]
    ADD CONSTRAINT FK_CompanyInfo_Account
        FOREIGN KEY (AccountId) REFERENCES Account (Id);

ALTER TABLE [SubCategory]
    ADD CONSTRAINT FK_SubCategory_Category
        FOREIGN KEY (CategoryId) REFERENCES Category (Id);

ALTER TABLE [CompanyCategory]
    ADD CONSTRAINT FK_CompanyCategory_Company
        FOREIGN KEY (CompanyId) REFERENCES CompanyInfo (AccountId);

ALTER TABLE [CompanyCategory]
    ADD CONSTRAINT FK_CompanyCategory_Category
        FOREIGN KEY (CategoryId) REFERENCES Category (Id);

ALTER TABLE [CompanyIndustry]
    ADD CONSTRAINT FK_CompanyIndustry_Company
        FOREIGN KEY (CompanyId) REFERENCES CompanyInfo (AccountId);

ALTER TABLE [CompanyIndustry]
    ADD CONSTRAINT FK_CompanyIndustry_Category
        FOREIGN KEY (IndustryId) REFERENCES Industry (Id);

ALTER TABLE [Connection]
    ADD CONSTRAINT FK_Connection_Company
        FOREIGN KEY (CompanyId) REFERENCES CompanyInfo (AccountId);

ALTER TABLE [Rating]
    ADD CONSTRAINT FK_Rating_Company
        FOREIGN KEY (CompanyId) REFERENCES CompanyInfo (AccountId);

ALTER TABLE [Award]
    ADD CONSTRAINT FK_Award_Company
        FOREIGN KEY (CompanyId) REFERENCES CompanyInfo (AccountId);

ALTER TABLE [PreviousClient]
    ADD CONSTRAINT FK_PreviousClient_Company
        FOREIGN KEY (CompanyId) REFERENCES CompanyInfo (AccountId);

------------------------------ INSERT VALUE ------------------------------
INSERT INTO [Role] (Name)
VALUES ('Admin'),
       ('Company')
GO