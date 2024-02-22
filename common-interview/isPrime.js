const isPrime = (num) => {
    if(num <= 3) return true;
    for (let i = 2; i <= num; i++){
        if(num % i === 0) return false
    }
    return false
}
console.log(isPrime(3))
console.log(isPrime(6))
console.log(isPrime(9))
