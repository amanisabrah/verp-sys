import { Selector } from "testcafe"
import { adminRole } from "./roles"  // Import the admin role from roles.js

    const username= Selector ("#Login_I")
    const passwordInput = Selector('#Password_I_CLND')
    const showpassbutton = Selector('#Password_B0')
    const rememberCheck = Selector('#RememberMe_S_D')
    const loginButton = Selector('#Button_CD')
    const enterpassword = Selector('#Password_I')  

fixture`Open the Home-Page successfylly`
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
 

//Fixture for interacting with other dashboards
fixture`Open cards successfully`
    .page`http://localhost:58307/Dictionaries/Account/Login`
    .skipJsErrors()  // Globally ignoring JS errors
    .beforeEach(async t=> {
        await t.useRole(adminRole)
    })
    .afterEach(async t=> {
        const homeLink = Selector('#NavigationPaths').find('a').withText('Home')
        await t.click(homeLink)
    })
    const dashboardTests =[
        {name: 'POS', URL:'http://localhost:58307/Inventory/Dictionary/PointOfSales?action=AddNew'},
        {name: 'Financial', URL:'http://localhost:58307/Accounting/Accountancy/FinancialDashboardsView'},
        {name: 'HR', URL:'http://localhost:58307/HRMS/Dictionary/HumanResourcesManagementDashboardsView'},
        {name: 'BI Dashboards', URL:'http://localhost:58307/DSS/Dictionary/DashboardsAndReportsView'},
        //{name: 'Time Management Dashboards View', URL:'http://localhost:58307/Attendance/Home/TimeManagementDashboardsView'},
        {name: 'Inventory', URL:'http://localhost:58307/Inventory/Home/InventoryDashboardView'},
        {name: 'Work Flow', URL:'http://localhost:58307/WorkFlow/Dictionary/WorkFlowDiagrams'},
        {name: 'Configurations', URL:'http://localhost:58307/Dictionaries/Settings/Settings'},
        {name: 'Sales', URL:'http://localhost:58307/Inventory/Home/SalesDashboardView'},
        {name: 'Purchasing', URL:'http://localhost:58307/Inventory/Home/PurchaseDashboardView'},
        {name: 'Approval', URL:'http://localhost:58307/HRMS/Approval/Approval'},
    ]
    dashboardTests.forEach(dashboard => {
        test(dashboard.name, async t => {
            await t.navigateTo(dashboard.URL);
        });
    });
