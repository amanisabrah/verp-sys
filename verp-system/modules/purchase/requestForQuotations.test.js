//purpose of the helper file is to contain reusable functions (e.g., navigating to a dashboard), not user authentication logic.

import { Selector } from "testcafe"
import { adminRole } from "../../roles.test"  // Import the admin role from roles.test.js
import { open_Purchaasing_Dashboard, getDate } from "../../helpers.test"

export const RFQ_Test_Cases = () => {
    const pageTitle = Selector('#PageTitle')
    const datesFilterForm = Selector('#DatesFilterForm_0_2')
    const navigatebar= Selector('#CenterMenu_DXI3_T')
    const rfqGridview = Selector('#CenterMenu_DXI3i0_T')
    const newform = Selector ('#CenterMenu_DXI3i0_')
    const warehouseField = Selector('#INV_RFQ_WARID_I')
    const currencyField = Selector('#CURID_I')
    const documentDateField = Selector('#INV_RFQ_DocumentDate_I')
    const deadlineField = Selector('#INV_RFQ_Deadline_I')
    const saveButton = Selector('#RequestForQuotationEditFormToolbar_DXI0_T')
    const saveAndNew = Selector('#RequestForQuotationEditFormToolbar_DXI1_T')
    const saveAndPrint = Selector('#RequestForQuotationEditFormToolbar_DXI2_T')
    const saveAndExit = Selector('#RequestForQuotationEditFormToolbar_DXI3_T')
    const saveAndSend = Selector('#RequestForQuotationEditFormToolbar_DXI4_T')
    const cancel = Selector('#RequestForQuotationEditFormToolbar_DXI5_T')

    
    fixture`RFQ Test Cases`
    .page`http://localhost:58307/Dictionaries/Account/Login`
    .skipJsErrors()
    .beforeEach(async t => {
        await t.useRole(adminRole)
        await open_Purchaasing_Dashboard(t)  // Reuse the helper function to open the Purchase dashboard
        // Set a handler for native dialogs
       await t.setNativeDialogHandler(() => true); // Automatically accept geolocation requests,It ensures that the script waits for the handler to be set before moving on to the next line of code.
    })
  test('Open the grid view for RFQ', async t => {
        await t
        .setTestSpeed(0.1)
        .hover(navigatebar)
        .click(rfqGridview)
        .expect(pageTitle.innerText).contains('Request For Quotations')
        .expect(datesFilterForm.visible).ok('Dates Filter Form should be visible')// if the test is stopped should display the message ('Dates Filter Form should be visible')
        //display the toolbar
    })

    test('open new edit form immediately', async t =>{
        await t
        .hover(navigatebar)
        .click(newform.find('[title="New"].menu-button'))//should open new edit form for the RFQ
        .expect(warehouseField.value).notEql('', 'Warehouse should contain defult value')
        .expect(currencyField.value).notEql('', 'Currency should cotains the selected curruncy in the system')
        .expect(documentDateField.value).eql(getDate(), 'Document Date should contain today\'s date')
        .expect(deadlineField.value).eql(getDate(), 'Deadline should contain today\'s date')
        .expect(saveButton.visible).ok('Save button should be visible')
        .expect(saveAndNew.visible).ok('Save And New button should be visible')
        .expect(saveAndPrint.visible).ok('Save And Print button should be visible')
        .expect(saveAndExit.visible).ok('Save And Exit button should be visible')
        .expect(saveAndSend.visible).ok('Save And Send button should be visible')
        .expect(cancel.visible).ok('Cancel button should be visible')

  })



}