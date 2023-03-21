function addTwoDigits(num) {
  let ref = num.toString().split('');
  let result = 0;

  for (let i = 0; i < ref.length; i++) {
    result += Number(ref[i]);
  }
  return result;
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(12));
