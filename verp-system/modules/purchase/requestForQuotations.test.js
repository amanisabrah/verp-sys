//purpose of the helper file is to contain reusable functions (e.g., navigating to a dashboard), not user authentication logic.

import { Selector } from "testcafe"
import { adminRole } from "../../roles.test"  // Import the admin role from roles.test.js
import { open_Purchaasing_Dashboard } from "../../helpers.test"

export const RFQ_Test_Cases = () => {
    const pageTitle = Selector('#PageTitle')
    const datesFilterForm = Selector('#DatesFilterForm_0_2')
    
    fixture`RFQ Test Cases`
    .page`http://localhost:58307/Dictionaries/Account/Login`
    .skipJsErrors()
    .beforeEach(async t => {
        await t.useRole(adminRole)
    })

    test('Open the grid view for RFQ', async t => {
        await open_Purchaasing_Dashboard(t)  // Reuse the helper function to open the Purchase dashboard
        await t
        .setTestSpeed(0.1)
        await t
        .hover('#CenterMenu_DXI3_T')
        .click('#CenterMenu_DXI3i0_T')
        .expect(pageTitle.innerText).contains('Request For Quotations')
        .expect(datesFilterForm.visible).ok('Dates Filter Form should be visible')// if the test is stopped should display the message ('Dates Filter Form should be visible')
    })


}