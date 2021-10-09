function specialPythagoreanTriplet(n) {
    let sumOfabc = n;
    let arr =[], mamad;
    let a,b;
    for(a=1; a<n; a++){
      for(b=1; b<n; b++){
         if( Math.floor(Math.sqrt(Math.pow(a,2)+Math.pow(b,2)))== Math.sqrt(Math.pow(a,2)+Math.pow(b,2)) && ( a+b+Math.sqrt(Math.pow(a,2)+Math.pow(b,2))==n)) {
      mamad = a*b*Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
      
         }
      }
    }
    
   
    return mamad;
   }
   
   console.log(specialPythagoreanTriplet(120));