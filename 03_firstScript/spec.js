describe('Test suite name', function() {
    it('Test case name', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
  
      expect(browser.getTitle()).toEqual('Super Calculator');
      browser.sleep(3000);
    });
  });