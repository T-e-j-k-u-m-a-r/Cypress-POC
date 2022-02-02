const arr1 = [true, false, true, true]

var result = arr1.reduce(function (pv, cv, i, arr1) {

    //Logical AND -> Product
    //return pv && cv;

    //Logical OR -> Summation
    return pv || cv;
})

console.log(result);