describe('The yearsAgo function', function(){

    it('year and return how many years ago that year is from the current year.', function(){
        assert.equal(21, yearsAgo(2000));
    });

    it('year and return how many years ago that year is from the current year.', function(){
        assert.equal(45, yearsAgo(1976));
    });
});