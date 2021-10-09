
//در این مسئله قراره یه تیکه از دنباله حروف برداشته شده از حروف الفبا رو بررسی کنیم
//تا مطمئن شیم که حرفی از قلم نیفتاده و همه حروف پشت سر همن
//e.g: input : "fgijk" output should be "fghijk"
//راه حل خودمvvv
function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuv";
    let m = alphabet.indexOf(str[0]);
    let s = "";
    for (let i = 1; i < str.length; i++ ){
      if(alphabet.indexOf(str[i])-alphabet.indexOf(str[i-1]) > 1){
        s += alphabet[alphabet.indexOf(str[i])-1];
      } 
    }
    if (s!=="") {
      return s;
    }  
    
  }
  
  console.log(fearNotLetter("abce"));
  console.log(fearNotLetter("cdfg"));
  console.log(fearNotLetter("qrtuv"));
  console.log(fearNotLetter("bcde"));


//راه حل پیشنهادیشون 1
  function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
      
      var code = str.charCodeAt(i);
  
      if (code !== str.charCodeAt(0) + i) {
        
        return String.fromCharCode(code - 1);
      }
    }
    return undefined;
  }
  


//راه پیشنهادی دومشون
  function fearNotLetter(str) {
    let currCharCode = str.charCodeAt(0);
    let missing = undefined;
  
    str
      .split("")
      .forEach(letter => {
        if (letter.charCodeAt(0) === currCharCode) {
          currCharCode++;
        } else {
          missing = String.fromCharCode(currCharCode);
        }
      });
  
    return missing;
  }
