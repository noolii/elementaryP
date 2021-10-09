//موضوع پیدا کردن جفت یه پروتئین از دی ان ای
//این فانکشن قراره یه استرینگ بگیره و یه آرایه دوبعدی بده
// جفت پروتئین ذکر شده تو ورودی رو کنارش اضافه میکنه به صورت یه آرایه
//e.g. input is "TCGA" output should be [[T,A],[C,G],[G,C],[A,T]]
function pairElement(str) {

    let arr = str.split("").map(function(elem){return elem.split()});
    for(var n of arr){
       switch (n[0]){
         case "A" : n.push("T"); break;
         case "C" : n.push("G"); break;
         case "G" : n.push("C"); break;
         case "T" : n.push("A"); break;
       }
    }
    return arr
  }
  
  console.log(pairElement("ATCGA"));
  console.log(pairElement("TCGAT"));
  

//راه حل پیشنهادی فریکدکمپ
  function pairElement(str) {
    //create object for pair lookup
    var pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x, pairs[x]]);
  }
  
  //test here
  pairElement("GCG");

  //راه حل دیگر پیشنهادی
  function pairElement(str) {
    // Return each strand as an array of two elements, the original and the pair.
    var paired = [];
  
    // Function to check with strand to pair.
    var search = function(char) {
      switch (char) {
        case "A":
          paired.push(["A", "T"]);
          break;
        case "T":
          paired.push(["T", "A"]);
          break;
        case "C":
          paired.push(["C", "G"]);
          break;
        case "G":
          paired.push(["G", "C"]);
          break;
      }
    };
  
    // Loops through the input and pair.
    for (var i = 0; i < str.length; i++) {
      search(str[i]);
    }
  
    return paired;
  }
  
  // test here
  pairElement("GCG");


 let from = "Ann"
 
  function calcal(from , text){
    from = "*"+from+"*";
    console.log(from+text);
  }

  calcal(from, "salam");
  console.log(from);