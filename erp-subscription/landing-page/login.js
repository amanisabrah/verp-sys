import { landing_Page_Selectors } from "../sub-common/sub-helpers/sub-selectors.js"

export const Landing_LogIn_Test_Cases = () => {
    fixture`Landing Login page test cases`
    .page`http://localhost:4200/#/landing-page`
    .beforeEach(async t => {
        await t.setTestSpeed(0.8)
    })
    .afterEach(async t => {
        // Reload the page after each test
       // await t.navigateTo(`https://register.vtech-help.com/#/landing-pages`);
    })
    const code_Value='962'

    test('1- Submit failed: ', async t => {
        await t 
            .click(landing_Page_Selectors.submit)
            .expect(landing_Page_Selectors.error_List.visible).ok('Error List should displayed')
            .hover(landing_Page_Selectors.error_List)
            .click(landing_Page_Selectors.pause_Icon)

        const errorMassage = await landing_Page_Selectors.all_IsRequired.innerText
      
        console.log('1-Submit failed success, error Messages: ', errorMassage)
    })

    test ('2- Verify if a user will be able to login with a valid username and valid phone number.', async t => {
        const code_Value='962'
        await t
            .click(landing_Page_Selectors.user_Name)
            .typeText(landing_Page_Selectors.user_Name, 'Amani Sabra')
            .click(landing_Page_Selectors.phone_Key)
            .expect(landing_Page_Selectors.list_Of_Keys.visible).ok('The list should be displayed')
            .typeText(landing_Page_Selectors.search_bar, code_Value)
            .wait(1000)
            .pressKey('tab')
            .pressKey('enter')
            //.expect(landing_Page_Selectors.list_Of_Keys.visible).notOk('The list should be hidden after selecting the entered code.')
            .click(landing_Page_Selectors.phone_Number)
            .typeText(landing_Page_Selectors.phone_Number, '789552270') // should be decimal max 9 numbers
            .click(landing_Page_Selectors.submit)
            .expect(landing_Page_Selectors.error_List.visible).ok('Error List should displayed')
            .hover(landing_Page_Selectors.error_List)
            .click(landing_Page_Selectors.pause_Icon)
            const errorMassage = await landing_Page_Selectors.email_IsRequired.innerText
      
        console.log('2- Verify if a user will be able to login with a valid username and valid phone number:', errorMassage)
            
    })
    test ('3- Verify if a user will be able to login with a valid email and valid phone number.', async t => {
        const code_Value='962'
        await t
            .click(landing_Page_Selectors.phone_Key)
            .expect(landing_Page_Selectors.list_Of_Keys.visible).ok('The list should be displayed')
            .typeText(landing_Page_Selectors.search_bar, code_Value)
            .wait(1000)
            .pressKey('tab')
            .pressKey('enter')
            //.expect(landing_Page_Selectors.list_Of_Keys.visible).notOk('The list should be hidden after selecting the entered code.')
            .click(landing_Page_Selectors.phone_Number)
            .typeText(landing_Page_Selectors.phone_Number, '789552270') // should be decimal max 9 numbers
            .click(landing_Page_Selectors.email)
            .typeText(landing_Page_Selectors.email, 'amani@gmail.com')
            .click(landing_Page_Selectors.submit)
            .expect(landing_Page_Selectors.error_List.visible).ok('Error List should displayed')
            .hover(landing_Page_Selectors.error_List)
            .click(landing_Page_Selectors.pause_Icon)
            const errorMassage = await landing_Page_Selectors.name_IsRequired.innerText

        console.log('3-Verify if a user will be able to login with a valid email and valid phone number:', errorMassage)
            
    })

    test ('4- Verify if a user will be able to login with an invalid email.', async t => {
        await t
            .click(landing_Page_Selectors.user_Name)
            .typeText(landing_Page_Selectors.user_Name, 'Amani Sabra')
            .click(landing_Page_Selectors.phone_Key)
            .expect(landing_Page_Selectors.list_Of_Keys.visible).ok('The list should be displayed')
            .typeText(landing_Page_Selectors.search_bar, code_Value)
            .wait(1000)
            .pressKey('tab')
            .pressKey('enter')
            //.expect(landing_Page_Selectors.list_Of_Keys.visible).notOk('The list should be hidden after selecting the entered code.')
            .click(landing_Page_Selectors.phone_Number)
            .typeText(landing_Page_Selectors.phone_Number, '789552270') // should be decimal max 9 numbers
            .click(landing_Page_Selectors.email)
            .typeText(landing_Page_Selectors.email, 'test.io.com')
            .click(landing_Page_Selectors.submit)
            .expect(landing_Page_Selectors.error_List.visible).ok('Error List should displayed')
            .hover(landing_Page_Selectors.error_List)
            .click(landing_Page_Selectors.pause_Icon)
            const errorMassage = await landing_Page_Selectors.invalid_Email.innerText

        console.log('3-Verify if a user will be able to login with a valid email and valid phone number:', errorMassage)
        console.log('numbers or letters and these two symbols "@" and "." in this order: letter or num(@)letter or num(.)letter or num')    
    })
    test('5- Login successfully.', async t => {
        await t
            .click(landing_Page_Selectors.user_Name)
            .typeText(landing_Page_Selectors.user_Name, 'Amani Sabra')
            .click(landing_Page_Selectors.phone_Key)
            .expect(landing_Page_Selectors.list_Of_Keys.visible).ok('The list should be displayed')
            .typeText(landing_Page_Selectors.search_bar, code_Value)
            .wait(1000)
            .pressKey('tab')
            .pressKey('enter')
            .click(landing_Page_Selectors.phone_Number)
            .typeText(landing_Page_Selectors.phone_Number, '789552270') // should be decimal max 9 numbers
            .click(landing_Page_Selectors.email)
            .typeText(landing_Page_Selectors.email, 'amani@vtech-sys.com')
            .click(landing_Page_Selectors.submit)
            //.navigateTo('https://register.vtech-help.com/#/landing-page?CLIID=459')
            .expect(landing_Page_Selectors.success_List.visible).ok('success message should displayed')
            .hover(landing_Page_Selectors.success_List)
            .click(landing_Page_Selectors.pause_Icon)
        
            const successMassage = await landing_Page_Selectors.success_Message.innerText
        console.log('5-Login Successfully:', successMassage)

    })

}