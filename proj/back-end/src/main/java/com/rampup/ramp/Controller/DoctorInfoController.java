package com.rampup.ramp.Controller;

import com.rampup.ramp.Entity.DoctorInfo;
import com.rampup.ramp.Service.DoctorInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
public class DoctorInfoController {
    @Autowired
    private DoctorInfoService doctorInfoService;




    @GetMapping("/doctors")
    public List<DoctorInfo> getDoctors(){
        return  this.doctorInfoService.getDoctors();
    }

    @GetMapping("/doctorsByName")
    public List<DoctorInfo> getDoctorsBySearch(@RequestParam  String query){
        return this.doctorInfoService.getDoctorsBySearch(query);
    }



}
