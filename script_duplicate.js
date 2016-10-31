// JavaScript Document
//find_duplicate([0,9,9,13,2,7,13,5,6,8,12,19,28,1,3,3,3]));  // outputs: [ 9, 13,3 ]

function find_duplicate(arr) {  
    var dupsCount = {}, result = [];
    
    for (var i = 0; i < arr.length; i++) {  
        dupsCount[arr[i]] = 0; 
    }

    for(var i = 0; i < arr.length; i++){
        dupsCount[arr[i]]++;
    }
    
    for (var key in dupsCount) {
        if (dupsCount[key] > 1) {  
            result.push(Number(key));
        }  
    }  
    return result;  
  }   



 
 // find and output the unique elements and sort 
 function sort_unique(arr) {
    if (arr.length === 0) return arr;
    arr = arr.sort(function (a, b) { return a*1 - b*1; });
    var ret = [arr[0]];
    for (var i = 1; i < arr.length; i++) { // start loop at 1 as element 0 can never be a duplicate
        if (arr[i-1] !== arr[i]) {
            ret.push(arr[i]);
        }
    }
    return ret;
}
//document.write(sort_unique([0,9,9,13,2,7,13,5,6,8,12,19,28,1,3,3,]));
//[0,1,2,3,5,6,7,8,9,12,13,19,28]