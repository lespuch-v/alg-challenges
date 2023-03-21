function add(a, b) {
  return a + b;
}

console.log(add(1, 2));

function addAll(...args) {
  let result = 0;

  args.forEach((item) => {
    result = result + item;
  });
  return result;
}

console.log(addAll(addAll(1, 2, 3)));
