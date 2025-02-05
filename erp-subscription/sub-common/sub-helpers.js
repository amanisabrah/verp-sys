import { landing_Page_Selectors, Business_Info_Selectors } from "../sub-common/sub-selectors.js"
//import { Role } from 'testcafe';


export const enter_Phone_And_Code  = async (t, phone, code) => {
    await t
        .click(landing_Page_Selectors.phone_Key)
        .expect(landing_Page_Selectors.list_Of_Keys.visible).ok('The list of phone codes should be visible')
        .typeText(landing_Page_Selectors.search_bar, code,{ paste: true })
        .wait(1000)
        .pressKey('tab')
        .pressKey('enter')
        .click(landing_Page_Selectors.phone_Number)
        .typeText(landing_Page_Selectors.phone_Number, phone,{ paste: true })
}
/*export const company_Role = Role('http://localhost:4200/#/landing-page', async t => {
    const randomUsername = `Amani${Math.floor(1000 + Math.random() * 9000)}`; // Generate a username starting with "Amani"
    const randomEmail = `amani${Date.now()}@test.com`; // Generate a unique email
    const randomPhone = `789${Math.floor(1000000 + Math.random() * 1000000)}`; // Generate a random phone number
    const code = '962'; // Country code
    await t
        .click(landing_Page_Selectors.user_Name)
        .typeText(landing_Page_Selectors.user_Name, randomUsername ,{ paste: true })
        await enter_Phone_And_Code(t, randomPhone, code)
        await t
            .click(landing_Page_Selectors.email)
            .typeText(landing_Page_Selectors.email, randomEmail ,{ paste: true })
            .click(landing_Page_Selectors.submit)
}, { preserveUrl: true })
*/