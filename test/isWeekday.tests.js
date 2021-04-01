describe('The isWeekday function', function(){

    it('should retuurn true if day is a weekday.', function(){
        assert.equal(true, isWeekday('Monday'));
    });

    it('should return false if day is not a weekday', function(){
        assert.equal(false, isWeekday('Saturday'));
    });
});