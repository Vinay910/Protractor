let homePage = function()
{
    let firstNumber=element(by.model('first'));
    let secondNumber=element(by.model('second'));
    let goButton=element(by.id('gobutton'));
    this.browse=function(url)
    {
        browser.get(url);
    }
    this.enterFirstNumber=function(first)
    {
        firstNumber.sendKeys(first);
    };
    this.enterSecondNumber=function(second)
    {
        secondNumber.sendKeys(second);
    };
    this.clickGo=function()
    {
        goButton.click();
    };
    this.verifyResult=function(result)
    {
        let output=element(by.cssContainingText('.ng-binding',result));
     expect(output.getText()).toEqual(result);   
    }

};

module.exports= new homePage();