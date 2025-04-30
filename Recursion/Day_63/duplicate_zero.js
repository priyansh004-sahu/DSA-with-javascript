
//  1089. Duplicate Zeros

function DuplicateZeros(arr) {
    let zeros = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == 0) zeros++;
    }

    let i = arr.length-1;
    let j = (arr.length-1) + zeros;

    while(i != j) {
        if(j < arr.length) {
            arr[j] = arr[i]
        }
        j--;

        if(arr[i] == 0) {
            if(j < arr.length) {
                arr[j] = arr[i];
            }
        j--;
        }
        i--;
    }
 return arr;
}
console.log(DuplicateZeros([1,0,2,3,0,4]));
