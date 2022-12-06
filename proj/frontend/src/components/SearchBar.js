import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import guestService from '../services/helper';
import './SearchBar.css'
import InputGroup from 'react-bootstrap/InputGroup';
import DoctorsList from './DoctorsList';



const SearchBar = () => {
  const [query,setQuery] = useState('')
  const [users, setUsers] = useState([])
  const [filtereddocs,setFilteredDocs] = useState(users)


  useEffect(()=>{
    getUsers();
  },[]);

  const getUsers=()=>{
    guestService.getDoctors().then((response)=>{
      setUsers(response.data);
      setFilteredDocs(response.data);
    })
  }

  const handleQuery=(event)=>{
    setQuery(event.target.value);
  }

  const handleSearch=(e)=>{
    e.preventDefault();
    guestService.searchByName(query).then((response)=>{
      setFilteredDocs(response.data);
    });
    
  };



  


  return (
    <div className='searchComponent'>
    <div className='searchContainer'>
        <InputGroup size="lg" className="mb-3">
        <Form.Control 
          className='formSearch'
          placeholder="Search for healthcare providers..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={handleQuery}
          />
        <button 
        className='searchBtn'
         variant="outline-secondary" 
         onClick={handleSearch} 
         id="button-addon2"
         >
          Search
        </button>
      </InputGroup>
    </div>
    
    <DoctorsList filtereddocs={filtereddocs}></DoctorsList>

    </div> 
  )
}

export default SearchBar