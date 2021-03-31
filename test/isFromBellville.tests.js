describe('The isFromBellville function', function(){

    it(' returns true if a registration number is for Bellville otherwise returns false.', function(){
        assert.equal(true, isFromBellville('CY'));
    });

    it('that returns true if a registration number is for Bellville otherwise returns false.', function(){
        assert.equal(false, isFromBellville('CA'));
    });
});
