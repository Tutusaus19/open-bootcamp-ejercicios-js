function fibonaci(num) {
    const fib = [0,1];
    for(let i = 2; i<=num; i++){
      fib[i] = fib[i-1] + fib[i-2]; 
    }
    return  [...fib];
    
  }
  const fibo = fibonaci(6);
  console.log(fibo)