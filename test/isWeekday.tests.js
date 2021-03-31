describe('The isWeekday function', function(){

    it(' check if is a isweekday day return true', function(){
        assert.equal(true, isWeekday('Monday'));
    });

    it('check if isweekday if not return false', function(){
        assert.equal(false, isWeekday('Saturday'));
    });
});