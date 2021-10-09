function telephoneCheck(str) {
    if (str[0]=== "-") return false
    if (/(^1\s)\d{3}\s\d{3}\s\d{4}/.test(str)) return true
    return str.length >= 10 && (/((^1*\s*)(\(\))\s*-)/.test(str.split(/\d{3,}/g).join(''))|| /(^1*\s*)\s*-/.test(str.split(/\d{3,}/g).join(''))|| str.split(/\d{10}/).join('') === "")
  
  }
  
  console.log(telephoneCheck("1 (222)622-7382"));
  