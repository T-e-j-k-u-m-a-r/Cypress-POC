const p = new Promise(function (resolve, reject) {

    const a = 1;

    if (a == 1) {
        resolve('a is equal to 1')
    } else {
        reject('a is not equal to 1')
    }


});


p.then(function (res) {

    console.log(res);

}).catch(function (err) {
    console.log(err);
})





