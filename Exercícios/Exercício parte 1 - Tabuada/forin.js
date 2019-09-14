var num = [9, 8, 7, 6, 5, 4, 3, 2, 1];
num.push(0);
num.sort();
console.log(num.indexOf(3));
num.splice(0, 1, 100);
for (var i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`);
}