
// 875. Koko Eating Bananas

function youcanEat(piles, h, limit) {
    let totalTime = 0;

    for(var i=0; i<piles.length; i++) {
        totalTime += Math.ceil(piles[i] / limit);
    }
    return totalTime <= h;
}
function minEatingSpeed(piles, h) {
    let st = 1;
    let end = Math.max(...piles);
    let ans = end;

   while(st <= end) {
    let mid = Math.floor(st + (end - st) / 2);
      if(youcanEat(piles, h, mid)) {
        ans = mid;
        end = mid - 1;
      }
      else {
        st = mid + 1;
      }
   }
    return ans;
};
console.log(minEatingSpeed([3,6,7,11], 8));
