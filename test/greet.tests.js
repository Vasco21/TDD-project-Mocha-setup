describe('The greet function', function(){

    it('should greet Tebogo correctly', function(){
        assert.equal('Hello, Tebogo', greet('Tebogo'));
    });
    it('should greet Vasco correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Vasco', greet('Vasco'));
    });
});
