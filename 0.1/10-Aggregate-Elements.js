function solve(arr) {
    let result = 0;
    arr.forEach(num => {
        result += num
    });
    console.log(result);
    // 
    let result2 = arr.reduce((sum, value) => sum + 1 / value, 0);
    console.log(result2);
    //
    let result3 = ''
    arr.forEach(n => {
        n = n + '';
        result3 += n;
    })
    console.log(result3);




}
solve([2, 4, 8, 16])