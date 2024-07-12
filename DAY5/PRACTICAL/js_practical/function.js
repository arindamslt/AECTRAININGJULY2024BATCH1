//NORMAL FUNCTION
function fn1()
{
    console.log("NORMAL FUNCTION");
}
fn1();
//PARAMETRISED FUNCTION
function fn2(x,y)
{
 console.log(x,y);
}
fn2(10,20);
function fn3(x,y)
{
   return(x+y);
}
var res=fn3(10,20);
console.log(res);
//ANNONYMOUS FUNCTION
function fn4(f)
{
 console.log(f);
 f();
}
//CALLING THE FUNCTION
fn4(function(){
var city='KOLKATA';
console.log(city);
}
)
function print()
{
  var state='WB';
  console.log(state);
}

function fn5(f)
{
   console.log(f);
   f();
}
fn5(print);
var result=function(){
    console.log("FUNCTION EXPRESSION");
    }
    
result();    