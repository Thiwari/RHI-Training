import React from 'react';

import './DoctorList.css'


const DoctorsList=(props)=>{
if(props.filtereddocs.length===0){
    return (
        <p className='notfound'>Sorry,Found No Doctors</p>
    )
}

return (
    <>
    <div className="homeContainer"  >
          
          {
              props.filtereddocs.map((doctor) =>(
                <div className='vertical'>
                <div className='HCPcard' key={doctor.doctorId}>
                   <img src="/pcpIcon.svg" alt='' className="img" />
                    <div className='hcpInfo'>
                    <div className='alignleft'>
                    <h2 className='HCPName'>
                      {doctor.name}, {doctor.designation}</h2>
                    <p className='detailscon'>{doctor.department}</p>
                    
  
                    <p className='detailscon1'>{doctor.address}</p>
                    <p className='detailscon1'>{doctor.address2}</p>
                    <p className='detailscon1'>{doctor.phoneno}</p>
                    <p className="PName">0.7 Miles Away</p>
                    <p className="PName">View Additional Locations(6)</p>
                     <p className="PName"> View Enrollment Information</p> 
                   
               
                 
                    
                   
                </div>
                  <div className='alignright'>
                      <p>
                        Not Evaluated from Premium Care
                       </p> 
                       <p>
                        Accepting all Patients
                       </p>
                      
                      </div> 

                </div>
                
                </div>
                <div class="Offc">
              Office Visit - Primary Doctor - Established Patient - Moderate Complexity
          </div>
                  
               
                
              
              </div>
              ))

              
              
              }



      </div>
    </>
)

}

export default DoctorsList