# Unexpected Return Statement Behavior in TypeScript

This repository demonstrates a subtle bug related to the use of `return` statements within loops in TypeScript functions declared with a `void` return type.

## The Bug
The `printNumbers2` function is designed to print numbers from 1 to `n`. However, the `return` statement within the loop causes the function to exit prematurely when `i` reaches 3. This behavior is unexpected to developers that are familiar with other programming languages.

## The Solution
The solution involves using `continue;` instead of `return;` inside the loop. This allows the loop to continue to execute without terminating the function prematurely.