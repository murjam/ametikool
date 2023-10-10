/*
 * See skript arvutab failis "numbers.txt" olevate numbrite summa.
 * Aga teeb seda ebaefektiivselt: umbes paarkümmend millisekundit.
 *
 * ÜLESANNE: optimeeri koodi nii, et programmi käivitus võtaks aega umbes paar millisekundit.
 */

// TODO: Optimize this function
function calculateSum() {
    let sum = 0;
    for (i = 0; i < 1000; i++) {
        const fs = require('fs');
        const data = fs.readFileSync('numbers.txt', 'utf8');
        lines = data.split("\n");
        sum += Number(lines[i]);
    }
    return sum;
}

console.time("Timer");
console.log(calculateSum());
console.timeEnd("Timer");