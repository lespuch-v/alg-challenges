function addBorder(picture) {
  let result = [];

  for (let i = 0; i < picture.length; i++) {
    if (i === 0) {
      result.push('*'.repeat(picture[0].length));
    }
    if (i === picture.length) {
      result.push('*'.repeat(picture[0].length));
    }
    result.push(`*${picture[i]}*`);
  }

  return result.concat('*'.repeat(picture[0].length));
}

console.log(addBorder(['abc', 'ded']));
