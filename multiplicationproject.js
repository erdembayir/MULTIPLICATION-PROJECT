const multiplication = (...args) => {
    const numberArray = args.filter (x=> typeof x === "number");
    return numberArray.reduce((acc, val) => acc* val);
}
console.log('ÇARPMA', multiplication(args = 5,4, "hele"));