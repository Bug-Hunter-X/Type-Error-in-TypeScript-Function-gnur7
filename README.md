# Type Error in TypeScript Function

This repository demonstrates a common type error in TypeScript that occurs when an argument of an incorrect type is passed to a function. The error is caught during compilation, preventing runtime failures.

## Bug

The `add` function is defined to accept two numbers and return their sum. However, in the example, a string ('2') is passed as the second argument. This causes a type error.

## Solution

The solution involves ensuring that the input arguments match the expected type of the `add` function parameters. This is achieved using type assertions or by converting the input strings to numbers.