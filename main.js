var fibonacciValueOfIndex = function (index) {
    if (index === 0 || index === 1)
        return index;
    return fibonacciValueOfIndex(index - 1) + fibonacciValueOfIndex(index - 2);
};
console.log(fibonacciValueOfIndex(10));
