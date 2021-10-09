function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  return collection.filter(function(e){
    let mm = true;
    for(let i in e){
      mm = mm&&source.hasOwnProperty(i)&&source[i]===e[i];
    }
    return mm;
  })

  // Only change code above this line
  
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

let arrr = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]
let arar = { last: "Capulet" };

console.log(arrr.filter(function(e){
  let mm = true;
  for(let i in arar){
    mm = mm && e.hasOwnProperty(i) && arar[i]===e[i];
  }
  return mm;
}))
