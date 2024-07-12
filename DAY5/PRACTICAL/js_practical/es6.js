//SPREAD OPRATOR(COPY ONE OBJECT VALUE TO ANOTHER OBJECT AND ALSO MODIFY THE SOURCE OBJECT DATA IN
//NEW OBJECT)
var obj1={
    id:100,
    name:'ROBIN',
    phno:'23333',
    dept:'HR'
}
console.log(obj1);
var obj2={
    ...obj1,
    dept:'FINANCE'
}
console.log(obj2);
//REST PARAMETER
/*function  fn1(x,y)
{
  console.log(x,y);
}
fn1(10,20);
fn1(10,20,30,40);*/
function  fn1(x,y,...data)
{
  console.log(x,y);
  console.log(data);
}
fn1(10,20);
fn1(10,20,30,40);
//DESTRUCTING OF OBJECT
var obj1={
  rollno:1,
  sname:'RUPAM',
  phno:'45545',
  dept:'CSE'
}
console.log(obj1);
var{sname,dept}=obj1;
console.log(sname,dept);
//LET VS VAR VS CONST
/*function fn3()
{
  if(true)
  {
    var x=25;
    console.log(x);
  }
  console.log(x);
}*/
/*function fn3()
{
  if(true)
  {
    let x=25;
    console.log(x);
  }
  console.log(x);
}*/
function fn3()
{
  if(true)
  {
    const x=25;
    console.log(x);
    x=40;
  }
  }

//fn3()
//ARROW Function
function fn5()
{
  console.log("NORMAL FUNCTION");
}
fn5();
const fn6=()=>{
  console.log("ARROW FUNCTION");
}
fn6();
//ARROW FUNCTION FOR EACH LOOP
var arr=[100,200,300,400,500,600];
arr.forEach((element,index)=>{
    console.log(index,element);
     })
