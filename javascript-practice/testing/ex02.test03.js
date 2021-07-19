const assert = require('assert').strict;
const { na } = require('./ex02');

try{ // assert 는 try catch 쓰기
    assert.deepEqual(na(),[2, 4, 6], 'fail: deepEqual');
    assert.equal(na(),[2, 4, 6], 'fail: deepEqual');

    console.log('ok');   
}catch(err){
    console.log('fail:' + err.message);
}