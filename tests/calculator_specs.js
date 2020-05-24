var homePage=require('../pages/homePage');
describe('Calculator',function()
{
    it('Addition',function()
    {
    homePage.browse('https://juliemr.github.io/protractor-demo/');
    homePage.enterFirstNumber('1');
    homePage.enterSecondNumber('2');
    homePage.clickGo();   
    homePage.verifyResult('3');       
    });
    it('Subtraction',function()
    {
        homePage.enterFirstNumber('1');
        homePage.enterSecondNumber('2');
        homePage.clickGo();   
        homePage.verifyResult('9'); 

    });
})