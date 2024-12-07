function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); //This works fine

//The following code will throw an error
function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    if (i === 3) {
      continue; // Continue to the next iteration
    }
  }
}

printNumbers2(5); //This will print 1, 2, 4, 5