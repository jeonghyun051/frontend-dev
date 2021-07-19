const assert = require('assert').strict;
const { X } = require('./ex02');

try{ // assert 는 try catch 쓰기
    const a = new X();
    const b = new X();
    const c = a;

    assert.equal(a,c, 'fail: a === c'); // ok
    assert.deepEqual(a,c, 'fail: deepEqual1'); // ok
    assert.deepEqual(a,b, 'fail: deepEqual2'); // ok

    b.bar = 'foo';
    assert.notDeepEqual(a,b, 'fail: notDeepEqual1'); // ok

    console.log('ok');   
}catch(err){
    console.log('fail:' + err.message);
}