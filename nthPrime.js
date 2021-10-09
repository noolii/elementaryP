function nthPrime(n){
    let isPrime = function(num){
      if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
         return false;
        }
     }
       return true;
    }
    let i = 3, primes = [2];
    while(primes.length < n){
      if(isPrime(i)){
         primes.push(i);
      }
      i+=2
    }
    
    return i-2;
  }
  
  console.log(nthPrime(10001));