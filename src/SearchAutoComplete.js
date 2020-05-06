import React, {useState} from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// If you want to use the provided css
import 'react-google-places-autocomplete/dist/index.min.css';
import ContactRealtor from './ContactRealtor';
 
function SearchAutoComplete() {
  const [status, setstatus] = useState(false)
const showrealtor = () => {
    setstatus(true)
}
return (
  <div>
  <div className="autocompleteInput">
    <GooglePlacesAutocomplete
      onSelect={showrealtor}
      placeholder="Enter Your Address"
    //   onSelect{showrealtor}
    />
  </div>

<ContactRealtor status={status}/>
  </div>

);
}
 
export default SearchAutoComplete;