import React, {useState} from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// If you want to use the provided css
import 'react-google-places-autocomplete/dist/index.min.css';
import ContactRealtor from './ContactRealtor';
 
function SearchAutoComplete() {
  const [status, setstatus] = useState(false)
  const [data, setdata] = useState('')

const showrealtor = (data) => {
  console.log('data is in search', data)
    setstatus(true)
    setdata(data)
}
return (
  <div>
  <div className="autocompleteInput">
    <GooglePlacesAutocomplete
      onSelect={(data) => showrealtor(data)}
      placeholder="Enter Your Address"
      
    //   onSelect{showrealtor}
    />
  </div>

{status && 

<ContactRealtor status={status} address={data.description}/>

}
  </div>

);
}
 
export default SearchAutoComplete;