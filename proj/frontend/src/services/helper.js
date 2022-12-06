import axios from "axios";
const GUEST_API = "http://localhost:8080/doctors";


class guestService{

    getDoctors(){
  return axios.get(GUEST_API);
    }

    

    searchByName(query){
        return axios.get("http://localhost:8080/doctorsByName",{
          params:{
            query:query
          }
        });
            
        
    }

}

export default new guestService();