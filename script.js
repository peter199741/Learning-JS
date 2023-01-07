/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  var b = arr.map(dev);
  function dev(x){
    if(x.profession=="developer"){
      console.log( x.id + " " + " " + x.name +" "+ x.age + " " + x.profession ) ;
    }
  }
  
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(function(value){
    if(value.profession=="developer")
    console.log(value);
  })
}

function addData() {
  //Write your code here
  arr.push({id:4,name:"susan",age:"20",profession:"intern"});
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  arr.forEach(function(value){
    if(value.profession!="admin")
    console.log(value);
  })
  
}

function concatenateArray() {
  //Write your code here
  var brr = [
    { id: 4, name: "peter", age: "50", profession: "intern" },
    { id: 5, name: "robin", age: "78", profession: "developer" },
    { id: 6, name: "bruce", age: "99", profession: "admin" },
  ];

  var crr = arr.concat(brr);
  console.log(crr);
}
