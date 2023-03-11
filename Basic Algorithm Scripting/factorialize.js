function factorialize(num) {
    let counter = 1

    for (let i = num; i > 0; i--) {
        console.log(i)
        counter = counter * i

    }
    return counter;
}

console.log(factorialize(5)) // 120
// console.log(factorialize(10)) // 3628800
// console.log(factorialize(20)) // 2432902008176640000