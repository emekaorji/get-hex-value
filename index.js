function getHexValue(number = 0) {
  let remainder = 0;
  let dividend = number;
  let hexValue = [];
  
  while(dividend > 0) {
    remainder = parseInt(dividend % 16);
    dividend = parseInt(dividend / 16);
    remainder = (() => {
      switch(remainder) {
        case 10: return 'a';
          break;
        case 11: return 'b';
          break;
        case 12: return 'c';
          break;
        case 13: return 'd';
          break;
        case 14: return 'e';
          break;
        case 15: return 'f';
          break;
        default: return remainder;
      }
    })();
    
    hexValue.push(remainder.toString());
  }

  // hexValue.length === 1 && hexValue.push('0');
  
  return number === 0 ? '0' : hexValue.reverse().join("");
}
