var myJsonArray =  require('./RaleighForMaps.json');
var anotherJson =  require('./AnotherRaleigh.json');
var raleighJS = require('./RaleighData.json')

const axios = require('axios');
var fs = require('fs');


var city = "Raleigh"
var street = "5116 thornton knoll way" + ", " + city

var url = `https://www.mapquestapi.com/geocoding/v1/address?key=zYvp7r2tiYtbkWzl8FsXQAs7ys8qBEh2&inFormat=json&outFormat=json&json={"location":
{"street":"${street}"},"options":{"thumbMaps":false}}`

// let index = myJsonArray.findIndex(
//     (x) => x.address.streetAddress == action.payload
//   );
//   state[index]['favorite'] = true;
var dataStore =[]

raleighJS.map((item, index) => {
var jsonStreet = item.address.streetAddress
var jsonCity = item.address.city
var searchAddress = jsonStreet + ", " + jsonCity

    // console.log('item is here', searchAddress)

    // const new_obj = { ...obj, name: { first: 'blah', last: 'ha'} }

axios.get(`https://www.mapquestapi.com/geocoding/v1/address?key=zYvp7r2tiYtbkWzl8FsXQAs7ys8qBEh2&inFormat=json&outFormat=json&json={"location":
{"street":"${searchAddress}"},"options":{"thumbMaps":false}}`)
  .then(function (result) {
   var data  = result.data.results[0].locations[0].latLng
    // handle success
    if(data){
        const new_obj = { ...myJsonArray[index], position: data }

        const jsonString = JSON.stringify(new_obj)
        dataStore.push(jsonString)
    console.log('new_obj', dataStore)


    if(dataStore){

        fs.writeFile('./newHouseData.json', [dataStore], err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file', dataStore.length)
        }
    })
    }


    }
    else{
        console.log('nodatafoud')
    }
    // console.log('result', result.data.results);
    // console.log(result.data.results[0].locations[0].latLng)
    // myJsonArray[index].address['position'] = result.data.results[0].locations[0].latLng

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function(){

  })

})






// console.log(url)


  



// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

