class HomePage {

    selector = {
        EcommUrl: 'https://rahulshettyacademy.com/seleniumPractise/#/',
        searchProductInput: '.search-keyword',
        searchBtn: '[class="search-button"]',
        productLst: 'h4[class="product-name"]',
        addCart: '[class="product-action"] button',
        cart: 'img[alt="Cart"]',
        placeorderBtn: '[class="action-block"] button',
        CountryLst : 'select',
        conditionBtn : '[class="chkAgree"]',
        submitBtn : 'button',
    }


  
    vistUrl() {
        cy.visit(this.selector.EcommUrl)
    }
    enterText(value) {
        cy.get(this.selector.searchProductInput).type(value)
    }
    clickBtn() {
        cy.get(this.selector.searchBtn).click()
    }

    // searchProduct(veggies) {
    //     cy.get(this.selector.productLst).each((el, i) => {
    //         cy.log(el.text())
    //         let vegitable = el.text().replace(' - 1 Kg', " ").trim()
    //         if (vegitable == veggies) {
    //             cy.get(this.selector.addCart).eq(i).click()
    //         }
    //     })
    // }

    searchProduct(element, veggies, element2){
        cy.get(element).each((el, i) => {
            cy.log(el.text())
            let vegitable = el.text().replace(' - 1 Kg', " ").trim()
            if (vegitable == veggies) {
                cy.get(element2).eq(i).click()
            }
        })
    }

    // placeorder(){
    //     cy.get(this.selector.cart).click()
    //     cy.get(this.selector.placeorderBtn).first().click()
    //     cy.contains('Place Order').click()
    //     cy.get(this.selector.CountryLst).select('India')
    //     cy.get(this.selector.conditionBtn).click()
    //     cy.get(this.selector.submitBtn).click()
    // }

    placeorder(){
        this.clickOnElement(this.selector.cart)
        cy.get(this.selector.placeorderBtn).first().click()
        cy.contains('Place Order').click()
        cy.get(this.selector.CountryLst).select('India')
        this.clickOnElement(this.selector.conditionBtn)
        this.clickOnElement(this.selector.submitBtn)
    }
    
    clickOnElement(element){
        cy.get(element).click()
    }


   
  

}


  


export default HomePage