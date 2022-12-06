package com.rampup.ramp.Repository;

import com.rampup.ramp.Entity.DoctorInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DoctorInfoRepository extends JpaRepository<DoctorInfo,Long> {
    @Query(value= "SELECT * FROM doctor_info WHERE doctor_info.name LIKE CONCAT ('%',:query,'%' )",nativeQuery = true)
    List<DoctorInfo> doctorsBySearch(String query);
}
