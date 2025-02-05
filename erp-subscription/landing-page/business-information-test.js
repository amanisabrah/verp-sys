import { Business_Info_Selectors, landing_Page_Selectors } from "../sub-common/sub-selectors.js"
import { enter_Phone_And_Code  } from "../sub-common/sub-helpers.js"


const login_And_Navigate_To_BusinessInfo = async t => {
    
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
        .expect(landing_Page_Selectors.select_Lang_Card.visible).ok()
        .click(landing_Page_Selectors.next)
        .expect(Business_Info_Selectors.business_Info_Form.visible).ok()
        .click(Business_Info_Selectors.business_Info_Form)

    return { randomUsername, randomEmail, randomPhone }
}

export const Business_Info_Test_Cases = () => {
    let testData
    fixture`Business Information stage test cases`
    .page`http://localhost:4200/#/landing-page`
    .beforeEach(async t => {
        await t.eval(() => document.body.style.zoom = '90%')
        await t.resizeWindow(1920,945)
        testData = await login_And_Navigate_To_BusinessInfo(t)//// Generate new data before each test
        await t.setTestSpeed(0.8)
    })

    test('1- Open the Business Information stage', async t => {
        await t 
                .hover(Business_Info_Selectors.city)
                .expect(Business_Info_Selectors.city.value).contains('Amman', 'The city should be filled with the capital of the selected phone code')
                .hover(Business_Info_Selectors.address)
                .expect(await Business_Info_Selectors.address.value).eql(await Business_Info_Selectors.city.value, 'Address should match the city')
                .hover(Business_Info_Selectors.company_Phone)
                .expect(await Business_Info_Selectors.company_Phone.value).eql(await landing_Page_Selectors.phone_Number.value,'Company phone should match landing page phone number')
                .hover(Business_Info_Selectors.company_Mobile)
                .expect(await Business_Info_Selectors.company_Mobile.value).eql(await Business_Info_Selectors.company_Phone.value,'Company mobile should match company phone')
                .hover(Business_Info_Selectors.default_Language_Code)
                .expect(Business_Info_Selectors.default_Language_Code.innerText).contains("العربية")
                .wait(1000)
                .hover(Business_Info_Selectors.postal_Code)
                .click(Business_Info_Selectors.postal_Code)
                .typeText(Business_Info_Selectors.postal_Code, '11593aaa', { replace: true })
                .expect(Business_Info_Selectors.postal_Code.value).contains('a','The system allows typing characters in the postal code')
                //.scroll(Business_Info_Selectors.currency, 'bottomLeft')
                //.wait(1500)
                //.hover(Business_Info_Selectors.currency)
                //.expect(Business_Info_Selectors.currency.visible)
                //await t 
                //.expect(Business_Info_Selectors.currency.value).contains('JOD', 'The currency should be automatically filled based on the selected mobile code.')
                .click(Business_Info_Selectors.next)
                .expect(landing_Page_Selectors.error_List.visible).ok('Error List should be displayed for Compant name, Postal Code, Company Size, Tax Number, Registration Number')
                .click(Business_Info_Selectors.previous)
                .expect(landing_Page_Selectors.select_Lang_Card.visible).ok('Select Language card should displayed')            
      })

            
    test('2- Bassing the Business Information stage ', async t => {
        const filePath = './files/sample.pdf';
        await t
                .click(Business_Info_Selectors.company_Name)
                .typeText(Business_Info_Selectors.company_Name,"Vtech", { paste: true })
                .click(Business_Info_Selectors.postal_Code)
                .typeText(Business_Info_Selectors.postal_Code, "12ABC", { paste: true })
                //.click(Business_Info_Selectors.company_Size)
                //.hover(Business_Info_Selectors.company_Size_value).withText("1120")
                //.click(Business_Info_Selectors.company_Size_value)
                //.wait(1000)
                //.click(Business_Info_Selectors.tax_Num)
                //.typeText(Business_Info_Selectors.tax_Num,"6598652")
                //.click

    })
        
        

}
