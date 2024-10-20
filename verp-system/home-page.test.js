import { Role, Selector } from "testcafe"

fixture`Open the Home-Page successfylly`
    .page`http://localhost:58307/Dictionaries/Account/Login`
    //.before(async t =>{test setup goes here, axait runDatabaseReset(), await seedTestData()})
    .beforeEach(async t => {
        //run befor each test 
        await t.setTestSpeed(0.8)
    })
    //.after(async t =>{ cleaning test data, Logging and sending data tp monitoring systems})
    //.afterEach(async t => { runs after each test    })
        const username= Selector ("#Login_I")
        const passwordInput = Selector('#Password_I_CLND')
        const showpassbutton = Selector('#Password_B0')
        const rememberCheck = Selector('#RememberMe_S_D')
        const loginButton = Selector('#Button_CD')
        const enterpassword = Selector('#Password_I')  
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
    test('LogIn successfully', async t=>{
//      const companypageload = Selector ('.nologin-bg')
        await t
        .click(username)
        .typeText(username, 'admin')
        .click(passwordInput)
        .typeText(enterpassword, 'Qwe!23-2016')
        .click(showpassbutton)
        .click(rememberCheck)
        .click(loginButton)
//      .expect(companypageload.exists).ok()
        .navigateTo('http://localhost:58307/Home/CompanySelection')
      
        const selectcompany = Selector ('.list-group-item.Company.noselect[data-id="1"]')
        await t
        .skipJsErrors()
        .click(selectcompany)
        .navigateTo('http://localhost:58307/')
        .skipJsErrors(false) 
    })    


//Fixture for interacting with other dashboards
fixture`Open cards successfully`
    .page`http://localhost:58307/`
    .skipJsErrors()  // Globally ignoring JS errors
    .afterEach(async t => {
        await t
        .navigateTo('http://localhost:58307/')
    });
    test('POS', async t => {
        await t
        .navigateTo('http://localhost:58307/Inventory/Dictionary/PointOfSales?action=AddNew')
    });
    test('Financial', async t => {
        await t
        .navigateTo('http://localhost:58307/Accounting/Accountancy/FinancialDashboardsView')
    });
    test('HR', async t =>{
        await t
        .navigateTo('http://localhost:58307/HRMS/Dictionary/HumanResourcesManagementDashboardsView')
    });
    test('BI Dashboards', async t =>{
        await t
        .navigateTo('http://localhost:58307/DSS/Dictionary/DashboardsAndReportsView')
    });
   /* test('Time Management Dashboards View', async t => {
    const TMS = Selector('#CenterMenu_DXI3_T').find(':containsExcludeChildren(Time Management)')
    await t
    .navigateTo('http://localhost:58307/Attendance/Home/TimeManagementDashboardsView')
    }); */
   test('Inventory', async t =>{
        await t
        .navigateTo('http://localhost:58307/Inventory/Home/InventoryDashboardView')
    });
    test('Work Flow', async t =>{
        await t
        .navigateTo('http://localhost:58307/WorkFlow/Dictionary/WorkFlowDiagrams')
    });
    test('Configurations', async t =>{
        await t
        .navigateTo('http://localhost:58307/Dictionaries/Settings/Settings')
    });
    test('Sales', async t =>{
        await t
        .navigateTo('http://localhost:58307/Inventory/Home/SalesDashboardView')
    });
    test('Purchasing', async t =>{
        await t
        .navigateTo('http://localhost:58307/Inventory/Home/PurchaseDashboardView')
    });
    test('Approval', async t =>{
        await t
        .navigateTo('http://localhost:58307/HRMS/Approval/Approval')
    });

