
function getAllSubsets(arr, ans, i, allSubsets) {
  if(i == arr.length) {
    // store subset
    allSubsets.push([...ans])
    return;
  }

  // include
  ans.push(arr[i]);
  getAllSubsets(arr, ans, i+1, allSubsets);

  ans.pop();
  //   exclude
 getAllSubsets(arr, ans, i+1, allSubsets);


}


function subSets(arr, ans, i) { 

 var arr = [1, 2, 3];
 var ans = [];
  var allSubsets = new Array();
 getAllSubsets(arr, ans, 0, allSubsets)
 console.log(allSubsets);
 
}
subSets()
