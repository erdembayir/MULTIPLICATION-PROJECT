const calculateArguments = (...args) => {
    const numberArray = args.filter (x=> typeof x === "number");
 
    if (typeof numberArray === "number") {
       return numberArray.reduce((acc, val) => acc* val);  
    } else {
       console.log("Lütfen Yalnızca Sayı Giriniz.");
       
    }
 }
 
 console.log('Carpim', calculateArguments(8,4,1, "erdem"))