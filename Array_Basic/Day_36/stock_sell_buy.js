/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    var maxProfit = 0, bestBuy = prices[0];

    for(var i = 1; i < prices.length; i++) {

        if(prices[i] > bestBuy) {
            maxProfit = Math.max(maxProfit, prices[i] - bestBuy)
        }
        bestBuy = Math.min(prices[i], bestBuy);
    }
    return maxProfit;
};
console.log(maxProfit([7,1,5,3,6,4]));
