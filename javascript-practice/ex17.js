// function 객체 메서드 call
// 호출과 동시에 this 바인딩

var email = "dooly@gmail.com";
global.name = "둘리";
console.log(name, global.name);

console.log("===function 객체 메서드 apply====")
var f1 = function(){
    console.log(this);
}
f1();

// this 바꾸기
var o = {
    name: "마이콜"
}
f1.apply(o);


console.log("===function 객체 메서드 call====")
var f2 = function(s){
    console.log(s + " " + this.name);
}
f2.call(o,"hi");
