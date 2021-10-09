//این فانکشن قراره تمام المانهایی که به صورت آرایه ی نست شده در آرایه اولی هستن 
//رو تبدیل کنیم به المانهای بدون نست - بدون براکت طرافشون- و المان اصلی اون آرایه
///e.g. [[["a"],["b"]],["c","d"]] => ["a","b","c","d"]

function steamrollArray1(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};


function steamrollArray2(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}



function steamrollArray3(arr) {
  return arr
    .toString()
    .replace(",,", ",") // "1,2,,3" => "1,2,3"
    .split(",") // ['1','2','3']
    .map(function(v) {
      if (v == "[object Object]") {
        // bring back empty objects
        return {};
      } else if (isNaN(v)) {
        // if not a number (string)
        return v;
      } else {
        return parseInt(v); // if a number in a string, convert it
      }
    });
}


function steamrollArray4(val,flatArr=[]) {
  val.forEach(item => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}



function steamrollArray5(val,flatArr=[]) {
  val.forEach(item => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}