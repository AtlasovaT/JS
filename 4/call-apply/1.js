function sumArgs() {
    let reduce = [].reduce;
    let resultSum = reduce.call(arguments, function(a, b) {
        return a + b;
    });
    return resultSum;
}


console.log( sumArgs(1, 2, 3) );
