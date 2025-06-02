// Painter's Partition Problem 

function youcanPaint(arr, n, m, maxAllowedTime) {
  let painter = 1, time = 0;

  for(var i=0; i<arr.length; i++) {
    if(time + arr[i] <= maxAllowedTime) {
        time += arr[i];
    } 
    else {
        painter++;
        time = arr[i];
    }
  }

   return painter <= m;
}
function PainterPartition(arr,n, m) {
  var left = Math.max(...arr);
  var right = arr.reduce((a,b) => a+b, 0);
  let ans = right;

  while(left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if(youcanPaint(arr, n, m, mid)) {          // left
        ans = mid;
        right = mid - 1;
    } else {                  // right
        left = mid + 1;
    }
  }
  return ans;
}
console.log(PainterPartition([40, 30, 20, 10],4, 2));
 