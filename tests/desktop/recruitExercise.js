module.exports = {
    '@tags' : ['Maxim H. - exercise'],

    'Go to main page of web-page, and do some specific assertions.': function (browser) {
        
        var mainPage = browser.page.mainPage();

        //verify we landed on our web-page
        //page exist and the main tabs are present
        browser
            .url(mainPage.__options.data.launch_url)
            .maximizeWindow() 

        browser.getTitle(function(title) {``
            this.assert.equal(title, mainPage.__options.data.titleMain);
            });

        mainPage
            .waitForElementVisible("@bodyContainer", 1000);
        browser.assert.urlContains(mainPage.__options.data.pageUrl);
        mainPage
            .waitForElementVisible('@mainPradaButton')
            .waitForElementVisible('@collezioniButton')
            .waitForElementVisible('@donnaButton')
        mainPage.assert.elementPresent('@mainPradaButton')
        mainPage.assert.elementPresent('@collezioniButton')
        mainPage.assert.elementPresent('@donnaButton')
            
            //step too of task
        browser
            .url('https://www.prada.com/it/it/women/shoes/sneakers.html')
            //select the fist product
        mainPage
            .waitForElementVisible('@firstProductContainer')
            .click('@firstProductContainer')
            //select the first available size and add it to the cart
            .waitForElementVisible('@listOfProductSizeButton')
            .click('@listOfProductSizeButton')
            .waitForElementVisible('@firstSizeOfProduct')
            .click('@firstSizeOfProduct')
            .waitForElementVisible('@addProductButton')
            .click('@addProductButton')
            .pause(2000)
            //select the second available size and add it to the cart
            .waitForElementVisible('@listOfProductSizeButton')
            .click('@listOfProductSizeButton')
            .waitForElementVisible('@secondSizeOfProduct')
            .click('@secondSizeOfProduct')
            .waitForElementVisible('@addProductButton')
            .click('@addProductButton')
            .pause(2000)
            //check that the products are in the cart
            .waitForElementVisible('@shopCardIcon')
            .click('@shopCardIcon')
            .pause(2000)
            .waitForElementVisible('@firstChosenItem')
            .waitForElementVisible('@secondChosenItem')
        mainPage.assert.elementPresent('@firstChosenItem')
        mainPage.assert.elementPresent('@secondChosenItem')
        //check that the sum of the products in the cart is correct
        mainPage.getText("@firstCardItemPrice", function(result) {

            var price = result.value.toString();
            var firstFormatedPrice = price.replace(/^.*€./g, '');
                this.assert.equal(firstFormatedPrice, '550');

            mainPage.getText("@secondtCardItemPrice", function(result) {

                var price = result.value.toString();
                var secondFormatedPrice = price.replace(/^.*€./g, '');
                    this.assert.equal(secondFormatedPrice, '550');

                mainPage.getText("@totalPrice", function(result) {

                    var price = result.value.toString();
                    var formatedTotalPrice = price.replace('€ ', '');
                    var totalToCompare = formatedTotalPrice.replace(/\./g, '');
                        this.assert.equal(formatedTotalPrice, '1.100');
                
                var twoPrices = parseInt(firstFormatedPrice, 10) + parseInt(secondFormatedPrice, 10)
                console.log(twoPrices)
                console.log(formatedTotalPrice)
                    this.assert.equal(twoPrices, totalToCompare);

                })
            })
        })
        //click on "procedi al pagamento" the checkout button
        mainPage.waitForElementVisible('@continueWithPayment')
        mainPage.assert.elementPresent('@continueWithPayment')
            .click("@continueWithPayment")
        //verify that the url is right
        browser.getTitle(function(title) {
            this.assert.equal(title, mainPage.__options.data.titleCheckOut);
            });
        browser.assert.urlContains(mainPage.__options.data.checkoutLogin);

        browser.end();
    }
}