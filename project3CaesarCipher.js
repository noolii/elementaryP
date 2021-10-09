function rot13(str) {
    return str.split('').map(elem => elem.charCodeAt()).map(function(e){
      if((e>=65)&&(e<=77)) return e+13
      if((e>=78)&&(e<=90)) return e-13
      else return e
    }).map(elem => String.fromCharCode(elem)).join('')
    
 }
 
 console.log(rot13("SERR PBQR PNZC"));