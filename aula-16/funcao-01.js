function parimpar(num) {
    if (num % 2 == 0) {
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

console.log(`O número é ${parimpar(17)}`)