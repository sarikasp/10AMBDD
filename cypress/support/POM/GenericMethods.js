class GenericMethods {

    static visitSite(url) {
        cy.visit(url)
    }

    static enterValue(element, value) {
        cy.get(element).type(value)
    }

    static clickEle(element){
        cy.get(element).click()
    }

    static eleVisible(value){
        cy.contains(value).should('be.visible')
    }
     static attachedFile(element, filepath){
        cy.get(element).attachFile(filepath)
     }

     static ValidateText(element, value){
        cy.get(element).should('have.text', value)
     }



}

export default GenericMethods
