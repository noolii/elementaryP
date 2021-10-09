function convertToRoman(num) {
    let yekanha = ['',"I","II","III","IV","V","VI","VII","VIII","IX"]
    let dahganha = ['', "X",'XX','XXX','XL','L','LX','LXX','LXXX','XC']
    let sadganha = ['', 'C','CC','CCC','CD','D','DC','DCC','DCCC','CM']
    let hezaria = ['', 'M', 'MM','MMM']
    let yekan = yekanha[num%10]
    let dahgan = dahganha[((num-num%10)/10)%10]
    let sadgan = sadganha[((num-num%100)/100)%10]
    let hezari = hezaria[((num-num%1000)/1000)%10]
  
   return hezari+sadgan+dahgan+yekan;
  }
  
  console.log(convertToRoman(2126));