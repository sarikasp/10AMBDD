/// <reference types="cypress" />

import GenericMethods from "../support/POM/GenericMethods"
import CSSSelector from "../support/POM/selector"


let selector = new CSSSelector()

describe('Test Orange HRM Site with POM', () => {

    it('Login Functionality', () => {
        GenericMethods.visitSite(selector.selctEle.orangeHRMSiteUrl)
        GenericMethods.enterValue(selector.selctEle.hrmUserName, "Admin")
        GenericMethods.enterValue(selector.selctEle.hrmPassword, "admin123")
        GenericMethods.clickEle(selector.selctEle.hrmLoginBtn)
        GenericMethods.eleVisible('Admin')
        cy.contains('Dashboard').click()
        GenericMethods.eleVisible('Launching Soon')
    })

})