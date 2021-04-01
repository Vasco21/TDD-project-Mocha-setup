/** takes a parameter string with registration numbers separated with commas and returns all the registration numbers in the string for Paarl.**/

describe('The countAllPaarl function', function(){
    
    it('should return all regno from paarl.then count them.', function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });

    it('should return all regno from paarl.then count them.', function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });
    it('should return 0 if there is no regno from paarl.', function(){
        assert.equal(0, countAllPaarl('CA 345 123, CK 345, CC 123'));
    });
});