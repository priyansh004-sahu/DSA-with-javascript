
function peakIndexInMountainArray(arr) {
    var st = 1, end = arr.length - 2;

    while(st <= end) {
        var mid = Math.floor(st + (end - st) / 2);

        if(arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
            return mid;
        }
        else if(arr[mid - 1] < arr[mid]) {   // increasing --> right
            st = mid + 1;
        } 
        else{                                 // decreasing --> left
            end = mid - 1;
        }
    }
    return -1;
};


function peakIndexInMountainArray(arr) {
    var st = 1, end = arr.length - 2;

    while(st <= end) {
        var mid = Math.floor(st + (end - st) / 2);

        if(arr[mid] < arr[mid + 1]) {
           st = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return st;
};

console.log(peakIndexInMountainArray([0, 3, 8, 9, 5, 2]));
