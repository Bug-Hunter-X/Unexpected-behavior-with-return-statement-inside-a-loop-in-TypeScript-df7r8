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
      return; // Early exit from the loop
    }
  }
}

printNumbers2(5); //This will print only 1, 2, 3. But if we add a return statement in the function it will cause an error.