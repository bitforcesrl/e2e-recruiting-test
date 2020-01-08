const { xpathSelector, cssSelector } = require('./common.js');

//Main Page - Prada
module.exports = {
    commands: [{
        //Function's and other staff
        
    }],
    elements: {
        //main page of web
        bodyContainer: xpathSelector("//*[@id='content']"),

        //main tabs on header
        mainPradaButton: xpathSelector("//*[@class='logo__img logo__img--white']"),
        collezioniButton: xpathSelector("(//*[@class='menu__item js-menuItem']//*[contains(text(), 'Collezioni')])[1]"),
        donnaButton: xpathSelector("(//*[@class='menu__item js-menuItem']//*[contains(text(), 'Donna')])[3]"),

        //Other page elements with women shoes
        firstProductContainer: xpathSelector('(//*[@class="gridCategory__item js-product-qb"])[1]'),
        listOfProductSizeButton: xpathSelector('//*[@class="pDetails__size"]'),
        firstSizeOfProduct: xpathSelector("//*[@class='customSelect__optionItem']//*[contains(text(), 'In negozio/Online')]"),
        secondSizeOfProduct: xpathSelector("(//*[@class='customSelect__optionItem']//*[contains(text(), 'In negozio/Online')])[2]"),
        addProductButton: xpathSelector('(//*[@class="button-cta button-cta--fullwidth"])[1]'),
        shopCardIcon: xpathSelector("//*[@class='utils__item']"),

        firstChosenItem: xpathSelector("//*[@class='cart-item']"),
        secondChosenItem: xpathSelector("(//*[@class='cart-item'])[2]"),

        priceOfProduct: xpathSelector("//*[@class=' pDetails__priceItem']"),
        firstCardItemPrice: xpathSelector("(//*[@class='cart-item__price__value'])[1]"),
        secondtCardItemPrice: xpathSelector("(//*[@class='cart-item__price__value'])[1]"),
        totalPrice: xpathSelector("//*[@class='resume__subtotal__value']"),
        continueWithPayment: xpathSelector("//*[@class='resume__ctas__checkout float-m-right']"),



    },

    data: {
        launch_url: 'https://www.prada.com/it/it.html',
        pageUrl: '/it/it.html',
        titleMain: 'PRADA | Sito Ufficiale Italia',
        titleCheckOut: 'Checkout Login',
        checkoutLogin: 'https://www.prada.com/it/it/checkout-login.html'


    }
};