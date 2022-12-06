package com.rampup.ramp.Service;

import com.rampup.ramp.Entity.DoctorInfo;

import java.util.List;

public interface DoctorInfoService {


    public List<DoctorInfo> getDoctors();

    public List<DoctorInfo> getDoctorsBySearch(String query);


}
