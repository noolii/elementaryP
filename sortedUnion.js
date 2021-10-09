
//این فانکشن قراره تعدادی آرایه بگیره و یه آرایه بده
//خروجی باید حاوی المانهای یونیک از هر آرایه ی ورودی باشه
//اما با همون ترتیبی که تو خود ارایه ها امده
//input:[1, 2, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8] output: [1, 2, 3, 5, 4, 6, 7, 8]
function uniteUnique(arr) {
    let arry=[];
  
    for ( let i = 0; i < arguments.length; i++){
       for ( let j = 0; j< arguments[i].length; j++) {
         if(arry.indexOf(arguments[i][j])<0){
           arry.push(arguments[i][j])
         }
        }
       }
    return arry;
  }
  
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  console.log(uniteUnique([1, 2, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));




  function uniteUnique1(arr1, arr2, arr3) {
    // Creates an empty array to store our final result.
    var finalArray = [];
  
    // Loop through the arguments object to truly make the program work with two or more arrays
    // instead of 3.
    for (var i = 0; i < arguments.length; i++) {
      var arrayArguments = arguments[i];
  
      // Loops through the array at hand
      for (var j = 0; j < arrayArguments.length; j++) {
        var indexValue = arrayArguments[j];
  
        // Checks if the value is already on the final array.
        if (finalArray.indexOf(indexValue) < 0) {
          finalArray.push(indexValue);
        }
      }
    }
  
    return finalArray;
  }





  function uniteUnique2(arr) {
    var args = [...arguments];
    var result = [];
    for (var i = 0; i < args.length; i++) {
      for (var j = 0; j < args[i].length; j++) {
        if (!result.includes(args[i][j])) {
          result.push(args[i][j]);
        }
      }
    }
    return result;
  }

  



  function uniteUnique3(arr1, arr2, arr3) {
    var newArr;
    //Convert the arguments object into an array
    var args = Array.prototype.slice.call(arguments);
    //Use reduce function to flatten the array
    newArr = args.reduce(function(arrA, arrB) {
      //Apply filter to remove the duplicate elements in the array
      return arrA.concat(
        arrB.filter(function(i) {
          return arrA.indexOf(i) === -1;
        })
      );
    });
  
    return newArr;
  }




  function uniteUnique4() {
    var concatArr = [];
    var i = 0;
    while (arguments[i]) {
      concatArr = concatArr.concat(arguments[i]);
      i++;
    }
    uniqueArray = concatArr.filter(function(item, pos) {
      return concatArr.indexOf(item) == pos;
    });
    return uniqueArray;
  }
  


  function uniteUnique5(...arrays) {
    //make an array out of the given arrays and flatten it (using the spread operator)
    const flatArray = [].concat(...arrays);
  
    // create a Set which clears any duplicates since it's a regular set and not a multiset
    return [...new Set(flatArray)];
  }
  


  function uniteUnique6(...arr) {
    return [...new Set(arr.flat())]
  }
  
  // Or as an arrow function
  const uniteUnique = (...arr) => [...new Set(arr.flat())]