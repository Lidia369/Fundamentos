function aPar(num) {
    for (var i = 0; i < num.length; i++)
        if (num[i] % 2 == 0) {
            console.log(true);
        }
        else {
            console.log(false);
        }
}
aPar([2, 3, 4, 5, 6]);
