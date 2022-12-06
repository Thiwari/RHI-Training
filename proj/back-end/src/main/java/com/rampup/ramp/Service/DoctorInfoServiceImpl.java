package com.rampup.ramp.Service;

import com.rampup.ramp.Entity.DoctorInfo;
import com.rampup.ramp.Repository.DoctorInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorInfoServiceImpl implements DoctorInfoService{

    @Autowired
    private DoctorInfoRepository doctorInfoRepository;


//    @Override
//    public List<DoctorInfo> fetchAll() {
//        return doctorInfoRepository.findAll();
//    }

//    @Override
//    public List<DoctorInfo> fetchByName(String name) {
//        List<DoctorInfo> doctors= doctorInfoRepository.findByNameContaining(name);
//        return doctors;
//    }


    @Override
    public List<DoctorInfo> getDoctorsBySearch(String query) {
        List<DoctorInfo> doctors= doctorInfoRepository.doctorsBySearch(query);
        return doctors;
    }

    @Override
    public List<DoctorInfo> getDoctors() {
        return doctorInfoRepository.findAll();
    }
}
