var product={
    pid:'P1',
    pname:'TV',
    pqty:5,
    price:25000.00
}
console.log(product);
console.log(product.pname,product.price);
//ADD A ELEMENT IN OBJECT
product.company='SAMSUNG';
console.log(product);
//UPDATE DATA IN OBJECT
product.price=32000.00;
console.log(product);
//DELETE ELEMENT IN OBJECT
delete product.company;
console.log(product);
//NESTED OBJECT
var employee={
    eid:'E1',
    ename:'AYAN',
    desig:'MANAGER',
    phno:'545445',
    address:{
       plotno:'AD10',
       streetnm:'SALTLAKE CITY',
       pincode:'700091',
       area:{
        ps:'BIDHANNAGAR',
        state:'WB'
       } 
    }
}
console.log(employee);
console.log(employee.ename,employee.desig,employee.address.plotno,employee.address.pincode,employee.address.area.ps);
//OBJECT WITH FUNCTION
var products={
    pid:'P1',
    pname:'TV',
    pqty:5,
    price:32000.00,
    totalcost:function(){
        console.log(this.price*this.pqty);
    }
}
console.log(products.pname,products.pqty,products.price);
products.totalcost();


