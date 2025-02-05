import { landing_Page_Selectors, Business_Info_Selectors } from "../sub-common/sub-selectors.js"
import { enter_Phone_And_Code } from "../sub-common/sub-helpers.js"

export const Landing_LogIn_Test_Cases = () => {
    fixture`Landing Login page test cases`
    .page`http://localhost:4200/#/landing-page`
    .beforeEach(async t => {
        await t.eval(() => document.body.style.zoom = '90%')
        await t.resizeWindow(1920,945)
        await t.setTestSpeed(0.8)
    })
    const phone = '789552270'
    const code = '962'
    test('1- Submit without filling in required fields. ', async t => {
        await t 
            .click(landing_Page_Selectors.submit)
            .expect(landing_Page_Selectors.error_List.visible).ok('Error List should be displayed when required fields are missing')
            .hover(landing_Page_Selectors.error_List)
            //.click(landing_Page_Selectors.pause_Icon)
        //const errorMassage = await landing_Page_Selectors.all_IsRequired.innerText  
        //await t.expect(errorMassage).contains('User Name Is Required\nEmail Is Required')
        //console.log('1- Submit failed due to missing fields. Error message: ', errorMassage)
    })
    test('2- Verify login with valid username and phone number.', async t => {
        await t
            .click(landing_Page_Selectors.user_Name)
            .typeText(landing_Page_Selectors.user_Name, 'Amani Sabra',{ paste: true })
        await enter_Phone_And_Code(t, phone, code) // Use the variables here
        await t
            .click(landing_Page_Selectors.submit)
            .expect(landing_Page_Selectors.error_List.visible).ok('Error List should be displayed due to missing email')
            .hover(landing_Page_Selectors.error_List)
            //.click(landing_Page_Selectors.pause_Icon)
        //const errorMassage = await landing_Page_Selectors.email_IsRequired.innerText
        //await t.expect(errorMassage).contains('Email Is Required')
        //console.log('2- Failed to log in with valid username and phone number. Error message:', errorMassage)
    })
    test('3- Verify login with valid email and phone number.', async t => {
        await enter_Phone_And_Code(t, phone, code) // Use the variables here
        await t
            .click(landing_Page_Selectors.email)
            .typeText(landing_Page_Selectors.email, 'amani@gmail.com',{ paste: true })
            .click(landing_Page_Selectors.submit)
            .expect(landing_Page_Selectors.error_List.visible).ok('Error List should be displayed due to missing name field')
            .hover(landing_Page_Selectors.error_List)
            //.click(landing_Page_Selectors.pause_Icon)
        //const errorMassage = await landing_Page_Selectors.name_IsRequired.innerText
        //await t.expect(errorMassage).contains('User Name Is Required')
        //console.log('3- Failed to log in with valid email and phone number. Error message:', errorMassage)
    })
    test('4- Verify login with invalid email format.', async t => {
        await t

            .click(landing_Page_Selectors.user_Name)
            .typeText(landing_Page_Selectors.user_Name, 'Amani Sabra',{ paste: true })
        await enter_Phone_And_Code(t, phone, code) // Use the variables here
        await t
            .click(landing_Page_Selectors.email)
            .typeText(landing_Page_Selectors.email, 'test.io.com',{ paste: true })
            .click(landing_Page_Selectors.submit)
            .expect(landing_Page_Selectors.error_List.visible).ok('Error List should be displayed for invalid email format')
            .hover(landing_Page_Selectors.error_List)
            //.click(landing_Page_Selectors.pause_Icon)

       //const errorMessage = await landing_Page_Selectors.invalid_Email.innerText
       //await t.expect(errorMessage).contains('Invalid Email')
       //console.log('4- Failed to log in with an invalid email format. Error message:', errorMessage)
       //console.log('Expected email format: letters or numbers followed by "@" and a domain name.')
    })
    test('5- Verify login with pervously used email.', async t => {
        await t

            .click(landing_Page_Selectors.user_Name)
            .typeText(landing_Page_Selectors.user_Name, 'Amani Sabra',{ paste: true })
        await enter_Phone_And_Code(t, phone, code) // Use the variables here
        await t
            .click(landing_Page_Selectors.email)
            .typeText(landing_Page_Selectors.email, 'amani@vtech-sys.com',{ paste: true })
            .click(landing_Page_Selectors.submit)
            .expect(landing_Page_Selectors.error_List.visible).ok('Error List should be displayed for invalid email format')
            .hover(landing_Page_Selectors.error_List)
            //.click(landing_Page_Selectors.pause_Icon)

        //const errorMessage = await landing_Page_Selectors.email_Used.innerText
        //await t.expect(errorMessage).contains('Email Has Been Used Before')
        //console.log('5- Failed to log in with an used email before. Error message:', errorMessage)
    })
    test('6- Verify login with pervously used phone number.', async t => {
        await t

            .click(landing_Page_Selectors.user_Name)
            .typeText(landing_Page_Selectors.user_Name, 'Amani Sabra',{ paste: true })
        await enter_Phone_And_Code(t, '789999999', code) // Use the variables here
        await t
            .click(landing_Page_Selectors.email)
            .typeText(landing_Page_Selectors.email, 'amanitestphone@vtech-sys.com',{ paste: true })
            .click(landing_Page_Selectors.submit)
            .expect(landing_Page_Selectors.error_List.visible).ok('Error List should be displayed for invalid email format')
            //.hover(landing_Page_Selectors.error_List)
            //.click(landing_Page_Selectors.pause_Icon)

       //const errorMessage = await landing_Page_Selectors.phone_Used.innerText
       //await t.expect(errorMessage).contains('Phone Number Has Been Used Before')
       //console.log('6- Failed to log in with an used phone before. Error message:', errorMessage)
    }) 
    test('7- Enter a valid username,country code, email and a phone number that exceeds the character limit.', async t=> {
        await t
            .click(landing_Page_Selectors.user_Name)
            .typeText(landing_Page_Selectors.user_Name, 'Amani Sabra',{ paste: true })
        await enter_Phone_And_Code(t, '78910626497891060000', code) 
        await t
            .click(landing_Page_Selectors.email)
            .typeText(landing_Page_Selectors.email, 'amanitestphone@vtech-sys.com',{ paste: true })
            .click(landing_Page_Selectors.submit)
            .expect(landing_Page_Selectors.error_List.visible).ok('Error List should be displayed for invalid email format')
            //.hover(landing_Page_Selectors.error_List)
            //.click(landing_Page_Selectors.pause_Icon )
       //const errorMessage = await landing_Page_Selectors.verylong_Phone_num.innerText
       //await t.expect(errorMessage).contains('Issue regarding the phone number')
       //console.log('7- Failed to log in with an used phone before. Error message:', errorMessage)
       
    })
    test('8- Successful login with valid username, phone number, and email.', async t => {
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
                .expect(landing_Page_Selectors.success_List.visible).ok('Success message should be displayed upon successful login')
                .hover(landing_Page_Selectors.success_List)
                //.click(landing_Page_Selectors.pause_Icon)
        //const successMassage = await landing_Page_Selectors.success_Message.innerText
        //console.log('8- Successful login with valid username, phone number, and email. Success message:', successMassage)
        //const languageText = await landing_Page_Selectors.languge.innerText // Extract the text
        //console.log('Displayed language:', languageText) // Log for debugging
        await t
            //.expect(successMassage).contains('Success!')
            .hover(landing_Page_Selectors.languge)
            //.expect(languageText).contains('العربية') // Language should changed based on the selected key in the Login
            .click(landing_Page_Selectors.next)
            .expect(Business_Info_Selectors.business_Info_Form.visible).ok
    })
    test('9- Testing login with a username that includes numbers and special characters (e.g., @, #, $).', async t => {
        await t
            .click(landing_Page_Selectors.user_Name)
            .typeText(landing_Page_Selectors.user_Name, 'test@vtechsys-2024',{ paste: true })
            await enter_Phone_And_Code(t, '657417459854', code) 
        await t
            .typeText(landing_Page_Selectors.email, 'Amanitest@vtech-sys.com',{ paste: true })
            .click(landing_Page_Selectors.submit)
            .expect(landing_Page_Selectors.select_Lang_Card.visible).ok('Select Language card should displayed')
    })

}
