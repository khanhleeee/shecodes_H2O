package com.shecodes2023.h2o.server.service.serviceImpl;

import com.shecodes2023.h2o.server.entity.ServiceEntity;
import com.shecodes2023.h2o.server.mapper.ServiceMapper;
import com.shecodes2023.h2o.server.repository.ServiceRepository;
import com.shecodes2023.h2o.server.response.ServiceResponse;
import com.shecodes2023.h2o.server.service.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServiceServiceImpl implements ServiceService {

    @Autowired
    private ServiceRepository serviceRepository;

    @Autowired
    private ServiceMapper serviceMapper;

    @Override
    public List<ServiceResponse> getAllService() {
        List<ServiceEntity> serviceEntities = serviceRepository.findAll().stream().distinct().collect(Collectors.toList());

        return serviceEntities.stream()
                .map(entity -> serviceMapper.convertServiceEntityToServiceResponse(entity))
                .collect(Collectors.toList());
    }
}
