const isPrime = (n) => {
    if(n <= 2) return true
    for (let i = 2; i < n; i++){
        if(n % i === 0) return false
    }
    return true
};


console.log(isPrime(25));
isPrime(3);
isPrime(4);
isPrime(5);
isPrime(6);
isPrime(7);
isPrime(8);
