import { Selector } from "testcafe"
import { adminRole } from "../roles.test"  // Import the admin role from roles.test.js

export const homePage_Test_Cases = () =>{

    fixture`Open cards successfully`
    .page`http://localhost:58307/Dictionaries/Account/Login`
    .skipJsErrors()  // Globally ignoring JS errors
    .beforeEach(async t=> {
        await t.useRole(adminRole)
    })
    .afterEach(async t=> {
        const homeLink = Selector('#NavigationPaths').find('a').withText('Home')
        await t
        .setTestSpeed(0.9)
        .click(homeLink)
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

}