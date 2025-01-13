import { landing_Page_Selectors } from "../sub-common/sub-selectors.js"
import { enter_Phone_And_Code } from "../sub-common/sub-helpers.js"

export const Landing_LogIn_Test_Cases = () => {
    fixture`Landing Login page test cases`
    .page`http://localhost:4200/#/landing-page`
    .beforeEach(async t => {
        await t.setTestSpeed(0.8)
    })

    // Define phone and code outside of tests, but inside the Landing_LogIn_Test_Cases function
    const phone = '789552270';
    const code = '962';

    test('1- Submit without filling in required fields: ', async t => {
        await t 
            .click(landing_Page_Selectors.submit)
            .expect(landing_Page_Selectors.error_List.visible).ok('Error List should be displayed when required fields are missing')
            .hover(landing_Page_Selectors.error_List)
            .click(landing_Page_Selectors.pause_Icon)
        const errorMassage = await landing_Page_Selectors.all_IsRequired.innerText  
        console.log('1- Submit failed due to missing fields. Error message: ', errorMassage)
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
            .click(landing_Page_Selectors.pause_Icon)
        const errorMassage = await landing_Page_Selectors.email_IsRequired.innerText
        console.log('2- Failed to log in with valid username and phone number. Error message:', errorMassage)
    })

    test('3- Verify login with valid email and phone number.', async t => {
        await enter_Phone_And_Code(t, phone, code) // Use the variables here
        await t
            .click(landing_Page_Selectors.email)
            .typeText(landing_Page_Selectors.email, 'amani@gmail.com',{ paste: true })
            .click(landing_Page_Selectors.submit)
            .expect(landing_Page_Selectors.error_List.visible).ok('Error List should be displayed due to missing name field')
            .hover(landing_Page_Selectors.error_List)
            .click(landing_Page_Selectors.pause_Icon)
        const errorMassage = await landing_Page_Selectors.name_IsRequired.innerText
        console.log('3- Failed to log in with valid email and phone number. Error message:', errorMassage)
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
            .click(landing_Page_Selectors.pause_Icon)

        const errorMessage = await landing_Page_Selectors.invalid_Email.innerText
        console.log('4 - Failed to log in with an invalid email format. Error message:', errorMessage)
        console.log('Expected email format: letters or numbers followed by "@" and a domain name.')
    })

    test('5- Verify login with pervously used email .', async t => {
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
            .click(landing_Page_Selectors.pause_Icon)

        const errorMessage = await landing_Page_Selectors.email_Used.innerText
        console.log('5- Failed to log in with an used email before. Error message:', errorMessage)
    })

    test('6- Verify login with pervously used phone number .', async t => {
        await t
            .click(landing_Page_Selectors.user_Name)
            .typeText(landing_Page_Selectors.user_Name, 'Amani Sabra',{ paste: true })
        await enter_Phone_And_Code(t, phone, code) // Use the variables here
        await t
            .click(landing_Page_Selectors.email)
            .click(landing_Page_Selectors.submit)
            .expect(landing_Page_Selectors.error_List.visible).ok('Error List should be displayed for invalid email format')
            .hover(landing_Page_Selectors.error_List)
            .click(landing_Page_Selectors.pause_Icon)

        const errorMessage = await landing_Page_Selectors.phone_Used.innerText
        console.log('6- Failed to log in with an used phone before. Error message:', errorMessage)
    })

    test('7- Successful login with valid username, phone number, and email.', async t => {
        await t
            .click(landing_Page_Selectors.user_Name)
            .typeText(landing_Page_Selectors.user_Name, 'Amani Sabra',{ paste: true })
        await enter_Phone_And_Code(t, phone, code) // Use the variables here
        await t
            .click(landing_Page_Selectors.email)
            .typeText(landing_Page_Selectors.email, 'amanisabrah7@gmail.com',{ paste: true })
            .click(landing_Page_Selectors.submit)
            .expect(landing_Page_Selectors.success_List.visible).ok('Success message should be displayed upon successful login')
            .hover(landing_Page_Selectors.success_List)
            .click(landing_Page_Selectors.pause_Icon)
            .hover(landing_Page_Selectors.languge)
            .expect(landing_Page_Selectors.languge).contains('Arabic') // Language should changed based on the selected key in the Login
        
        const successMassage = await landing_Page_Selectors.success_Message.innerText
        console.log('6- Login successful. Success message:', successMassage)
    })
}
