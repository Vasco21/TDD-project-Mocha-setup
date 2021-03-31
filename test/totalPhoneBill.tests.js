describe('The totalPhoneBill function', function(){
    
    it('should print the sms ', function(){
        assert.equal("R0.65", totalPhoneBill('sms', 'sms', 'sms'));
    });

    it('should print the calls', function(){
        assert.equal("R2.75", totalPhoneBill('call', 'call'));
    });

    it('should return totalBill', function(){
        assert.equal("R7.45", totalPhoneBill('sms, sms, sms, call, call'));
    });
});