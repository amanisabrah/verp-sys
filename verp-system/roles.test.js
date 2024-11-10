import { Role, Selector } from 'testcafe';


///////////defina a Role to skip login in each test////////////
   //export:to make functions, variables, or constants available to other files or modules.
export const adminRole = Role('http://localhost:58307/Dictionaries/Account/Login', async t => {
    const username= Selector ("#Login_I")
    const passwordInput = Selector('#Password_I_CLND')
    const showpassbutton = Selector('#Password_B0')
    const rememberCheck = Selector('#RememberMe_S_D')
    const loginButton = Selector('#Button_CD')
    const enterpassword = Selector('#Password_I')  
    const selectcompany = Selector ('.list-group-item.Company.noselect[data-id="1"]')

    
    await t
    .click(username)
    .typeText(username, 'admin')
    .click(passwordInput)
    .typeText(enterpassword, 'Qwe!23-2016')
    .click(showpassbutton)
    .click(rememberCheck)
    .click(loginButton)
    .wait(1000)
    //navigateTo('http://localhost:58307/Home/CompanySelection')
    await t
    .skipJsErrors()
    .click(selectcompany)
    .navigateTo('http://localhost:58307/')
    .skipJsErrors(false) 
}, { preserveUrl: true })
