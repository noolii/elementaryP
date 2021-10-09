//محاسبه ک م م یه دنباله عدد با ارایه عدد اول و آخر دنباله در یه آرایه
// با کمک نوشتن یه اروفانکشن که ب م م دو عدد رو محاسبه مینماید

const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b);
const lcm = (a,b) => (a*b)/gcd(a,b);

function smallestCommons(arr) {
  arr.sort((a,b)=>a-b)
  let lcmMaker = 1
  for(let i = arr[0]; i <= arr[1]; i++){
    lcmMaker = lcm(lcmMaker , i)
  }
  
 return lcmMaker
}


console.log(smallestCommons([5,2]));
console.log(lcm(10,15))

//مسئله جانبی : محاسبه ی بزرگترین مضرب مشترک از یک تا یه عدد 
function findLCMForOne2N(n){
  let multiple = n;
  for( let i=n-1; i>=1; i--){
    multiple = lcm(multiple,i);
  }
  return multiple;
}

console.log(findLCMForOne2N(20));