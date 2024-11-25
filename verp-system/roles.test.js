import { Role, Selector } from 'testcafe';
///////////defina a Role to skip login in each test/export:to make functions, variables, or constants available to other files or modules.
const logIN_Selectors={
    user_Name: Selector ("#Login_I"),
    enter_Password : Selector('#Password_I'),  
    show_Pass_Button : Selector('#Password_B0'),
    remember_Me : Selector('#RememberMe_S_D'),
    log_In_Button : Selector('#Button_CD'),
    select_Company : Selector ('.list-group-item.Company.noselect[data-id="1"]'),
}
export const adminRole = Role('http://localhost:58307/Dictionaries/Account/Login', async t => {
    await t    
    .typeText(logIN_Selectors.user_Name, 'admin')
    .typeText(logIN_Selectors.enter_Password, 'Qwe!23-2016')
    .click(logIN_Selectors.show_Pass_Button)
    .click(logIN_Selectors.remember_Me)
    .click(logIN_Selectors.log_In_Button)
    .skipJsErrors()
    .expect(logIN_Selectors.select_Company.visible).ok({ timeout: 5000 })
    .click(logIN_Selectors.select_Company)
    .navigateTo('http://localhost:58307/')
    .skipJsErrors(false) 
}, { preserveUrl: true })
