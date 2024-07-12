var arr=[100,200,300,400];
console.log(arr);
console.log(typeof arr);
//ADD A ELEMENT IN ARRAY IN LAST INDEX
arr.push(500);
console.log(arr);
//ADD THE ELEMENT IN FIRST POSITION
arr.unshift(50);
console.log(arr);
//DELETE THE LAST INDEX OF AN ARRAY
arr.pop();
console.log(arr);
//REMOVE THE FIRST ELEMENT FROM THE ARRAY
arr.shift();
console.log(arr);
//REMOVE THE ELEMENT FROM SPECIFIC POSITION
arr.splice(2,1);
console.log(arr);
//ADD A ELEMENT INTO A SPECIFIC POSITION
arr.splice(2,0,300);
console.log(arr);
//RANGE OF VALUES IN ARRAY
var newArray=arr.slice(2,4);
console.log(newArray);
//FOR EACH METHOD
arr.forEach(function(element,index){
    console.log(index,element);
})
//MAP() FUNCTION
var newArray1=arr.map(function(element,index){
    return element*10;
})
console.log(newArray1);
//FILTER() FUNCTION
var newArray2=arr.filter(function(element,index){
    return element>200;
})
console.log(newArray2);

    