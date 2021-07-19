const assert = require('assert');
const { add } = require('./ex02');

try{ // assert 는 try catch 쓰기
    assert.equal(add(10,20), '30');
    assert.strictEqual(add(10,20), '30'); // 엄격하게 타입까지 비교 ===
    console.log('ok');   
}catch(err){
    console.log('fail:' + err.message);
}