//This folder is for tests that apply across all modules or the system as a whole
import { Selector } from "testcafe";
import { admin_Role } from "../roles.test"; // Import the admin role from roles.test.js

const home_Page_Selectors={
    home_Link : Selector('#NavigationPaths').find('a').withText('Home')
}

export const homePage_Test_Cases = () =>{
    fixture`Open cards successfully`
    .page`http://localhost:58307/Dictionaries/Account/Login`
    .skipJsErrors()  // Globally ignoring JS errors
    .beforeEach(async t=> {
        await t.useRole(admin_Role)
    })
    .afterEach(async t=> {
        if (await home_Page_Selectors.home_Link.exists) {
            await t.click(home_Page_Selectors.home_Link); // Return to the homepage after each test
        }
    })
    const dashboard_Links =[
        {name: 'POS', URL:'/Inventory/Dictionary/PointOfSales?action=AddNew'},
        {name: 'Financial', URL:'/Accounting/Accountancy/FinancialDashboardsView'},
        {name: 'HR', URL:'/HRMS/Dictionary/HumanResourcesManagementDashboardsView'},
        {name: 'BI Dashboards', URL:'/DSS/Dictionary/DashboardsAndReportsView'},
        //{name: 'Time Management Dashboards View', URL:'/Attendance/Home/TimeManagementDashboardsView'},
        {name: 'Inventory', URL:'/Inventory/Home/InventoryDashboardView'},
        {name: 'Work Flow', URL:'/WorkFlow/Dictionary/WorkFlowDiagrams'},
        {name: 'Configurations', URL:'/Dictionaries/Settings/Settings'},
        {name: 'Sales', URL:'/Inventory/Home/SalesDashboardView'},
        {name: 'Purchasing', URL:'/Inventory/Home/PurchaseDashboardView'},
        {name: 'Approval', URL:'/HRMS/Approval/Approval'},
    ]
    dashboard_Links.forEach(({ name, URL }) => {
        test(name, async t => {
            const full_URL = `http://localhost:58307${URL}`
            try{
                await t.navigateTo(full_URL)
                await t.expect(Selector('body').exists).ok()// Ensure page has loaded
            } catch(error){
                console.error(`Failed to navigate to ${full_URL}:`, error)
                throw error
            }
        })
    })
}