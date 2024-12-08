import { Selector } from 'testcafe'
import { logIN_Selectors } from './helpers/selectors'
import { admin_Role } from './helpers/roles.test'

export const logIn_Test_Cases = () => {
    fixture`Login page test cases`
    .page`http://localhost:58307/Dictionaries/Account/Login`
    .beforeEach(async t => {
        await t.setTestSpeed(0.8)
    })
   /* test('incorrect password', async t =>{
            const incorrectpass= Selector('#Password_EC')
            await t
            .typeText(logIN_Selectors.user_Name, 'admin')
            .click(logIN_Selectors.password)
            .typeText(logIN_Selectors.enter_Password, '123456')
            .click(logIN_Selectors.show_Pass_Button)
            .click(logIN_Selectors.remember_Me)
            .click(logIN_Selectors.log_In_Button)
            .expect(incorrectpass.innerText).contains('Incorrect Password')
        })   */
    /*test('incorrect username', async t=> {
            const incorrectusername= Selector('#Login_EC')
            await t
            .typeText(logIN_Selectors.user_Name, 'Waleed')
            .click(logIN_Selectors.password)
            .typeText(logIN_Selectors.enter_Password, 'Qwe!23-2016')
            .click(logIN_Selectors.show_Pass_Button)
            .click(logIN_Selectors.remember_Me)
            .click(logIN_Selectors.log_In_Button)
            .expect(incorrectusername.innerText).contains('User Name Not Exist')
        })    */
        test('LogIn successfully', async t => {
            await t.useRole(admin_Role)      
         })    
}