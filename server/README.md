# SHE CODES 2023 - H2O TEAM - BACK-END CODE

## HOW TO RUN
**Step 01:** Config profile
  - Change profile in `/src/main/resources/profiles/default/application.yml` folder
  - In line 29, change to `active: default,profileName` (ex: active: default,tiendev)

**Step 02:** Run project
  - Run this command to run project local

  `mvn spring-boot:run -D"spring-boot.run.profiles"=profileName`

  Example:

  `mvn spring-boot:run -D"spring-boot.run.profiles"=tiendev`

  `mvn spring-boot:run -D"spring-boot.run.profiles"=khanhdev`

  `mvn spring-boot:run -D"spring-boot.run.profiles"=quynhdev`

  `mvn spring-boot:run -D"spring-boot.run.profiles"=default`

## Swagger UI

  `http://localhost:8081/swagger-ui/index.html`

###### Tien's Note: `mvn clean install -DskipTests -Ptiendev `
