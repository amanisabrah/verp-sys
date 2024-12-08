import { Role } from 'testcafe';
///////////defina a Role to skip login in each test/export:to make functions, variables, or constants available to other files or modules.
import { logIN_Selectors } from './selectors';

export const admin_Role = Role('http://localhost:58307/Dictionaries/Account/Login', async t => {
    await t    
    .typeText(logIN_Selectors.user_Name,'admin')
    .click(logIN_Selectors.password)
    .typeText(logIN_Selectors.enter_Password,'Qwe!23-2016')
    //.click(logIN_Selectors.show_Pass_Button)
    //.click(logIN_Selectors.remember_Me)
    .click(logIN_Selectors.log_In_Button)
    .skipJsErrors()
    .expect(logIN_Selectors.select_Company.visible).ok({ timeout: 5000 })
    .click(logIN_Selectors.select_Company)
    .skipJsErrors(false)
}, { preserveUrl: true })


