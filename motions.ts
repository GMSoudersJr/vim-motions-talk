// Function to add two numbers
function add(a: number, b: number): number {
    return a + b;
}

// Function to subtract two numbers
function subtract(a: number, b: number): number {
    return a - b;
}

// Function to multiply two numbers
function multiply(a: number, b: number): number {
    return a * b;
}

// Function to divide two numbers
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Function to calculate the factorial of a number
function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Function to find the maximum in an array
function findMax(arr: number[]): number {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    return Math.max(...arr);
}
