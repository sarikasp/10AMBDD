import GenericMethods from "../support/POM/GenericMethods";
import CSSSelector from "../support/POM/selector"

let sels = new CSSSelector()
let fileUpt = "MedicalChatBot.pptx"

describe("Automation Excercise Site", () => {
    it("Login with Valid credentials", function () {
        GenericMethods.visitSite(sels.selctEle.automationExcSite)
        GenericMethods.enterValue(sels.selctEle.userName, "gauri@gmail.com")
        GenericMethods.enterValue(sels.selctEle.password, 'Gauri99')
        GenericMethods.clickEle(sels.selctEle.loginBtn)
        GenericMethods.eleVisible('Full-Fledged practice website for Automation Engineers')

    })


    it('Click on Cantact page and add your deatils', ()=>{
        GenericMethods.clickEle(sels.selctEle.contactPage)
        GenericMethods.enterValue(sels.selctEle.conUserName, "Gauri")
        GenericMethods.enterValue(sels.selctEle.conEmail, "gauri@gmail.com")
        GenericMethods.enterValue(sels.selctEle.conSubject, 'Inquiry')
        GenericMethods.enterValue(sels.selctEle.conMessage, "Just want know more about  your site")
        GenericMethods.attachedFile(sels.selctEle.conFileUpt, fileUpt)
        GenericMethods.clickEle(sels.selctEle.conSubmitBtn)
        GenericMethods.ValidateText(sels.selctEle.sucMsg, "Success! Your details have been submitted successfully.")
    })

})


