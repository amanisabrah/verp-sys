import { Selector } from "testcafe"
import { adminRole } from "../roles.test"  // Import the admin role from roles.test.js

    const username= Selector ("#Login_I")
    const passwordInput = Selector('#Password_I_CLND')
    const showpassbutton = Selector('#Password_B0')
    const rememberCheck = Selector('#RememberMe_S_D')
    const loginButton = Selector('#Button_CD')
    const enterpassword = Selector('#Password_I')  

export const logIn_Test_Cases = () => {

    fixture`Login page test cases`
    .page`http://localhost:58307/Dictionaries/Account/Login`
    .beforeEach(async t => {
        await t.setTestSpeed(0.8)
    })
    test('incorrect password', async t =>{
            const incorrectpass= Selector('#Password_EC')
            await t
            .typeText(username, 'admin')
            .click(passwordInput)
            .typeText(enterpassword, '123456')
            .click(showpassbutton)
            .click(rememberCheck)
            .click(loginButton)
            .expect(incorrectpass.innerText).contains('Incorrect Password')
        })   
    test('incorrect username', async t=> {
            const incorrectusername= Selector('#Login_EC')
            await t
            .typeText(username, 'Waleed')
            .click(passwordInput)
            .typeText(enterpassword, 'Qwe!23-2016')
            .click(showpassbutton)
            .click(rememberCheck)
            .click(loginButton)
            .expect(incorrectusername.innerText).contains('User Name Not Exist')
        })        
    test('LogIn successfully', async t => {
        await t.useRole(adminRole)
     })
}