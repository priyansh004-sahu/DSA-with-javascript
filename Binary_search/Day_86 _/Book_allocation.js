
function isValid(arr, upperLimit, k) {
    let count = 1, sum = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] + sum > upperLimit) {
            count++;
            sum = arr[i];
            if(count > k) return false;
        }
        else sum += arr[i];
    }
    return true;
}

function bookAllocation(arr, k) {

    if(k > arr.length)  return -1;

    let st  = 0, end= 0, ans = -1;
    
    for(var i=0; i<arr.length; i++) {
        end += arr[i];
        st = Math.max(arr[i], st);
    }

    while(st <= end) {
        let mid = Math.floor(st + (end - st)/ 2);
        if(isValid(arr, mid, k)) {
            ans = mid;
            end = mid - 1;
        } 
        else st = mid + 1;
    }
    return ans;
}


console.log(bookAllocation([12, 34, 67, 90], 2));  // 113
