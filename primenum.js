function prime(start, end) {
    for (let num = start; num <= end; num++) {
      let prime = true;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
          prime = false;
          break;
        }
      }
      if (prime && num != 1) {
        let factorial = 1;
        for (let j = num; j >= 1; j--) {
          factorial *= j;
        }
        console.log(`Factorial of ${num}: ${factorial}`);
      }
    }
  }
  prime(1,100)