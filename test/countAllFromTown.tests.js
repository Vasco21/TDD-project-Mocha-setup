describe('The countAllFromTown function', function(){
    
    it('should return 3, the total of the registration numbers from Stellies', function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'));
    });

    it('should return 1, the total of the registration numbers from fromPaarl', function(){
        assert.equal(1, countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF'));
    });
});