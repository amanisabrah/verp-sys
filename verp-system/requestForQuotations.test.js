//purpose of the helper file is to contain reusable functions (e.g., navigating to a dashboard), not user authentication logic.

import { Selector } from "testcafe"
import { adminRole } from "./roles.test"  // Import the admin role from roles.test.js
import { open_Purchaasing_Dashboard } from "./dashboardHelpers.test"

export const RFQ_Test_Cases = () => {
    fixture`RFQ Test Cases`
    .page`http://localhost:58307/Dictionaries/Account/Login`
    .skipJsErrors()
    .beforeEach(async t => {
        await t.useRole(adminRole)
    })

    test('Open Purchase Dashboard for RFQ', async t => {
        await open_Purchaasing_Dashboard(t)  // Reuse the helper function to open the Purchase dashboard
    })
}