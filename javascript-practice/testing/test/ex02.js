const assert = require('assert').strict;
const { add, na, X } = require('../ex02');

describe('ex02', function(){
    describe('add(10, 20)', function(){
        it('should equal to 30', function(){
            assert.equal(add(10,20), 30);
        });
        it('should not equal to 30', function(){
            assert.notEqual(add(10,20), "30");
        });
    });
    describe('na()', function(){
        it('should deepEqual to [2, 4, 6] deeply', function(){
            assert.deepEqual(na(), [2, 4, 6]);
        });
        it('should notEqual to [2, 4, 6] deeply', function(){
            assert.notEqual(na(), [2, 4, 6]);
        });
    });
    describe('X() constructor', function(){
        it('a === c', function(){ // 동일성 테스트
            const a = new X();
            const c = a;

            assert.equal(a,c); // ok
        });
        it('a not equality c', function(){ // 동일성 테스트
            const a = new X();
            const b = new X();

            assert.notEqual(a,b); // ok
        });
        it('Equanity Between a and c', function(){ // 동질성 테스트
            const a = new X();
            const b = new X();

            assert.deepEqual(a,b); // ok
        });
        it('not Equanity Between a and c', function(){ // 동질성 테스트
            const a = new X();
            const b = new X();
            b.bar = 'foo';
            assert.notDeepEqual(a,b); // ok
        });
    });
});