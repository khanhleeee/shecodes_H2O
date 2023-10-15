package com.shecodes2023.h2o.server.mapper;

import com.shecodes2023.h2o.server.entity.ServiceEntity;
import com.shecodes2023.h2o.server.response.ServiceResponse;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Component
public class ServiceMapper {

    @Autowired
    private ModelMapper modelMapper;

    public ServiceResponse convertServiceEntityToServiceResponse(ServiceEntity serviceEntity) {
        return Objects.isNull(serviceEntity)
                ? null
                : modelMapper.map(serviceEntity, ServiceResponse.class);
    }
}
