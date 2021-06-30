/*
    5. Arrow Function
*/

const power = function (x) {
    return x * x;
}

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (numbers) {
    process.stdout.write(`${numbers}:${power(numbers)}\t`);
});


// ex 1

console.log();
numbers.forEach(function (numbers) {
    process.stdout.write(`${numbers}:${(x => x * x)(numbers)}\t`);
});

console.log();
numbers.forEach(
    function (numbers) {
        process.stdout.write(`${numbers}:${(x => {
            return x * x;
        })(numbers)}\t`);
    }
);

console.log("\n---");
numbers.forEach(n => process.stdout.write(`${n}:${(x => x * x)}`))


// ex4 - 여러행 함수
console.log("\n---");
[5, 3, 15, 1045, 43, 92].forEach(e => {
    if(e % 5 == 0){
        process.stdout.write(`${e}\t`);
    }
});

// ex5 - this를 어휘적으로 binding(Lexical Binding)
console.log("\n---");
const dooly = {
    name: '둘리',
    friends: ['또치','마이콜','도우너','길동','희동'],
    printFriends: function(){
        console.log(this); // this : 객체 둘리를 카리킴
        this.friends.forEach(f => {
           console.log(`${this.name}의 친구 ${f}`); // this : 둘리 아님, 화살표를 쓰면 보이는대로 원하던 this임
        });
    }
}
dooly.printFriends();

console.log();
numbers.forEach(
    function (numbers) {
        let result = (x=>{
            return x*x;
        })(numbers);
        process.stdout.write(`${numbers}:${result }\t`);
    }
);

console.log();
numbers.forEach(
    function (numbers) {
        let result = (x=>x*x)(numbers);
        process.stdout.write(`${numbers}:${result }\t`);
    }
);

const power2 = x=> x*x;
console.log();
numbers.forEach(
    function (numbers) {
        let result = (x=>x*x)(numbers);
        process.stdout.write(`${numbers}:${power2(numbers) }\t`);
    }
);