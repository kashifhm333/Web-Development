let first = () => {
    console.log("First Function");
}

let second = (name, useCallback) => {
    console.log("Second Function");
    console.log(name);
    useCallback();
}

second("kashif is the best",second);