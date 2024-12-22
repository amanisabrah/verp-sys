import { landing_Page_Selectors } from "../sub-common/sub-helpers/sub-selectors.js"

export const Landing_LogIn_Test_Cases = () => {
    fixture`Landing Login page test cases`
    .page`http://localhost:4200/#/landing-page`
    .beforeEach(async t => {
        await t.setTestSpeed(0.8)
    })

    test('1- Submit failed: ', async t => {
        await t 
            .click(landing_Page_Selectors.submit)
            .expect(landing_Page_Selectors.error_List.visible).ok('Error List should displayed')
            .hover(landing_Page_Selectors.error_List)
            .click(landing_Page_Selectors.pause_Icon)

        const errorMassage = await landing_Page_Selectors.error_List_Text.innerText
      
        console.log('1-Submit failed success. Error Messages: ', errorMassage)
    })


}