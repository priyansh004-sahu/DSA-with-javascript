// array basic question 2

// — Q 25. Second max element from array

var arr = [28, 6, 74, 48, 84, 79, 79, 84 ];
var max = Math.max(arr[0], arr[1]);
var Smax = Math.min(arr[0], arr[1]);

for(var i=2; i<arr.length; i++) {
    if(arr[i] > max) {
         Smax = max;
         max = arr[i];
    } else if(arr[i] > Smax && arr[i] !== max) {
        Smax = arr[i];
    }
}
console.log("second max no. : " + Smax);

// Q26: Reverse the Array ==> First method for loop

var arr = [1, 2, 4, 6, 7, 9];
var temp = new Array(arr.length);
var i=0; 
for(var j=arr.length-1; j>= 0; j--) {
    temp[i] = arr[j]
    i++;
}
console.log(temp);



// Q26: Reverse the Array ==> second method using swap the element 2 pointer
var arr = [1, 2, 4, 6, 7, 9];
var i = 0, j = arr.length -1;

while(i<j) {
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;   
   i++;
   j--;
}
console.log(arr);

// — Q 27. All zeroes to left and all ones to right
var arr = [1, 0, 0, 1, 0, 1, 1, 0, 1];
var i = 0, j= 0;

while(i < arr.length) {
    if(arr[i] == 0) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
    i++;
}
console.log(arr);


// — Q 28. Array left Rotation by 1

var arr = [1, 2, 3, 4, 5,90];
var temp = arr[0];

for(var i=0; i<arr.length; i++) {
    arr[i] = arr[i+1];
}
arr[arr.length-1] = temp;
console.log(arr);

// — Q 28. Array right Rotation by 1

var arr = [1, 2, 3, 4, 5, 90];
var temp = arr[arr.length-1];

for(var i=arr.length-1; i>0; i--) {
    arr[i] = arr[i-1]
}
arr[0] = temp;
console.log(arr);

