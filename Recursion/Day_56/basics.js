greet()

function greet(){
    console.log("pine Apple");
   fun()
};
function fun() {
     console.log("funning guyss....");
     Random()
}

function Random() {
    console.log("random");

}
function temp(a) {
  if(a !== 0) return 10
  console.log("continue..");
  
}
temp(10)

// recursion 

var n = 5;

temp1(n)         //    stack overflow // run
function temp1(a) {   
       if(a == 0) return              
   console.log("Pbks");
   temp1(a-1)              // run
}
// a++

var n = 5;
printNums(n)
function printNums(a) {
    if(a === 0) return 
    process.stdout.write(a + " ")  // n to 1 --> n, n-1, n-2, n-3, n-4, n-5
    printNums(a-1)
}



