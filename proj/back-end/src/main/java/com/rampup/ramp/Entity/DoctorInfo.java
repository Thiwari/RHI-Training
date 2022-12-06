package com.rampup.ramp.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class DoctorInfo {

    public DoctorInfo() {
    }

    public DoctorInfo(int doctorId, String name, String designation, String department, String address1,String address2, String phoneno) {
        this.doctorId = doctorId;
        this.name = name;
        this.designation = designation;
        this.department = department;
        this.address1 = address1;
        this.address2=address2;
        this.phoneno = phoneno;
    }

    public int getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(int doctorId) {
        this.doctorId = doctorId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getAddress() {
        return address1;
    }

    public void setAddress(String address) {
        this.address1 = address;
    }

    public String getPhoneno() {
        return phoneno;
    }

    public void setPhoneno(String phoneno) {
        this.phoneno = phoneno;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int doctorId;
    private String name;
    private String designation;
    private String department;
    private String address1;

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    private String address2;
    private String phoneno;

    @Override
    public String toString() {
        return "DoctorInfo{" +
                "doctorId=" + doctorId +
                ", name='" + name + '\'' +
                ", designation='" + designation + '\'' +
                ", department='" + department + '\'' +
                ", address1='" + address1 + '\'' +
                ", address2='" + address2 + '\'' +
                ", phoneno='" + phoneno + '\'' +
                '}';
    }
}
