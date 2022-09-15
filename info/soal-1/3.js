const checkString = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  
  return true;
};

console.log(checkString("halo"));
console.log(checkString("ada"));
console.log(checkString("adda"));
console.log(checkString("addka"));
