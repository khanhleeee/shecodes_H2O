package com.shecodes2023.h2o.server.config;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class OpenApiConfig {

    public static final String securitySchemeName = "Bearer Authentication";

    @Bean
    public OpenAPI sheCodes2023H2OOpenApi() {
        Server prodServer = new Server();
        prodServer.setUrl("https://partnerup-api.azurewebsites.net/");
        prodServer.setDescription("Server URL in Production environment");
        Server localServer = new Server();
        localServer.setUrl("http://localhost:8081");
        localServer.setDescription("Server URL in Local environment");

        return new OpenAPI()
                .info(new Info().title("SHE CODES 2023 - H2O - API")
                        .description("She Codes 2023 - H2O Team - API")
                        .contact(new Contact()
                                .email("tien.huynhlt.tn@gmail.com")
                                .name("Tien Huynh TN")
                                .url("https://github.com/tienhuynh-tn"))
                        .license(new License()
                                .name("The GNU General Public License v3.0")
                                .url("https://www.gnu.org/licenses/gpl-3.0.html"))
                        .version("1.0.0"))
                .servers(List.of(prodServer, localServer))
                .addSecurityItem(new SecurityRequirement().addList(securitySchemeName))
                .components(
                        new Components().addSecuritySchemes(
                                securitySchemeName,
                                new SecurityScheme()
                                        .name(securitySchemeName)
                                        .type(SecurityScheme.Type.HTTP)
                                        .scheme("Bearer")
                                        .description("JWT Authorization header using the Bearer scheme. Enter your token in the text input below. Example: '12345abcdef' (Not include keyword 'Bearer')")
                                        .bearerFormat("JWT")
                                        .in(SecurityScheme.In.HEADER)));
    }
}
