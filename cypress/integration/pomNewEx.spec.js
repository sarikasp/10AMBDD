/// <reference types="cypress" />

import  GenericMethods  from "../support/POM/GenericMethods"
import  CSSSelector from "../support/POM/selector"

let sel = new CSSSelector()
let fileUpt = "MedicalChatBot.pptx"

describe("Automation Excercise Site", () => {
    it("Login with Valid credentials", function () {
        GenericMethods.visitSite(sel.selctEle.automationExcSite)
        GenericMethods.enterValue(sel.selctEle.userName, "gauri@gmail.com")
        GenericMethods.enterValue(sel.selctEle.password, 'Gauri99')
        GenericMethods.clickEle(sel.selctEle.loginBtn)
        GenericMethods.eleVisible('Full-Fledged practice website for Automation Engineers')
    })


    it('Click on Cantact page and add your deatils', ()=>{
        GenericMethods.clickEle(sel.selctEle.contactPage)
        GenericMethods.enterValue(sel.selctEle.conUserName, "Gauri")
        GenericMethods.enterValue(sel.selctEle.conEmail, "gauri@gmail.com")
        GenericMethods.enterValue(sel.selctEle.conSubject, 'Inquiry')
        GenericMethods.enterValue(sel.selctEle.conMessage, "Just want know more about  your site")
        GenericMethods.attachedFile(sel.selctEle.conFileUpt, fileUpt)
        GenericMethods.clickEle(sel.selctEle.conSubmitBtn)
        GenericMethods.ValidateText(sel.selctEle.sucMsg, "Success! Your details have been submitted successfully.")
    })

})

