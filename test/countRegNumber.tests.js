describe('The countRegNumber function', function(){

    it('if is true Should returns the number of registration numbers in the string.', function(){
        assert.equal(true, countRegNumber("CA 182736"));
    });
    it('f is true Should returns the number of registration numbers in the string.', function(){
        
        assert.equal(true, countRegNumber("CA 182736","CY 523519","CJ 812328","CA 182736"));
    });
    it('if is true Should returns the number of registration numbers in the string.', function(){
        assert.equal(true, countRegNumber(" "));
    });
});

    


