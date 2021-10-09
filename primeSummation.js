/*
function maxPrimedivisor(num){
    let max = 1;
    let n =num;
    while(n%2==0){
        n/=2;
        max=2;
    }
    for(let i=3; i<=Math.sqrt(n); i+=2){

        while(n%i==0){
            n/=i;
            max=i;
        }
       
    }
    if(n>2){
      max=n;
    }
    return max;
}
//حالا یه تابعی بنویس که بفهمه دیوایزورِ ان رقمی داره 
function divisorCheck(num){
    let len = Math.ceil(Math.log10(num));
    

}
//console.log(maxPrimedivisor(1656664854));
// 913*993=906609
// 91*99=9009

function palindromeCheck(n){
    let num = n;
   let len = Math.ceil(Math.log10(n));

   while(Math.floor(num/Math.pow(10,len-1))==num%10){
       num = Math.floor(num%Math.pow(10,len-1)/10);
       len -= 2;
   }
   if (num == 0){ 
       return true
   } else {
       return false;
   }
   
}
function largestPalindromeProduct(n){
    let first = Math.pow(10,n)-1;
    //let second = (n%2==0) ? Math.pow(10,n)-1 : Math.pow(10,n)-10;
    
    for(let i=first; i>=first/4; i=i-1){
      for(let j=first; j>=first*3/4; j--){
        if(palindromeCheck(i*j)==true){
          return i*j;
        }
      }
    }
    
}

//console.log(palindromeCheck(555550));
console.log(largestPalindromeProduct(4));*/

function isPrime(num){
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
  
  function nthPrime(n) {
    let i = 2;
    while( i < n){
      if(isPrime(i)){
        i++;
      } 
    }
    
    return true;
  }
  
  console.log(nthPrime(10001));
  console.log(isPrime(9))

  //جمع اعداد اول کوچکتر از پارامتر ورودی
function primeSummation(n) {
  let addup = 0;
  for (let i=2; i<n; i++){
    if(isPrime(i)) addup = addup+i;
  }
  return addup;
}

console.log(primeSummation(17));

//fcc solution!
function primeSummation(num) {
  // Prime number sieve
  let isPrime = Array(num).fill(true);
  // 0 and 1 are not prime
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(num - 1); i++) {
    if (isPrime[i]) {
      // i has not been marked false -- it is prime
      for (let j = i * i; j < num; j += i)
        isPrime[j] = false;
    }
  }

  // Sum all values still marked prime
  return isPrime.reduce(
    (sum, prime, index) => prime ? sum + index : sum, 0
  );
}