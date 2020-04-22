




var users = [{
    name: 'John',
    email: 'johnson@mail.com',
    age: 25,
    address: 'USA'
    },
    {
        name: 'Tom',
        email: 'tom@mail.com',
        age: 35,
        address: 'England'
    },
    {
        name: 'Mark',
        email: 'mark@mail.com',
        age: 28,
        address: 'England'
}];



// console.log(users[0]
//            )

var filter = [{name: 'Mark'}, {age:28}]
var result = []
for (var prop in filter){
    var filtered = filter[prop]
    // console.log(filtered)
   for (let index = 0; index < users.length; index++) {
    //    const element = users[index];
     const element =  users.find(obj => {
        //  obj.name === filtered
        console.log('test',obj)
     
        if(Object.values(obj).includes(filtered)) {
            console.log(Object.values(filtered), 'it exust', Object.values(obj))
        }
        else{
            console.log('nothingfoud', Object.values(obj), Object.values(filtered))
        }
        });
       result.push(element) 
   } 
    console.log(result)
}

