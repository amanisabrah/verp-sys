import { Selector } from "testcafe"
import { adminRole } from "../../roles.test"  // Import the admin role from roles.test.js
import { open_Purchaasing_Dashboard, getDate } from "../../helpers.test"

const selectors={
    pageTitle: Selector('#PageTitle'),
    datesFilterForm: Selector('#DatesFilterForm_0_2'),
    navigatebar: Selector('#CenterMenu_DXI3_T'),
    rfqGridview: Selector('#CenterMenu_DXI3i0_T'),
    newform: Selector('#CenterMenu_DXI3i0_'),
    warehouseField: Selector('#INV_RFQ_WARID_I'),
    currencyField: Selector('#CURID_I'),
    documentDateField: Selector('#INV_RFQ_DocumentDate_I'),
    deadlineField: Selector('#INV_RFQ_Deadline_I'),
    saveButton: Selector('#RequestForQuotationEditFormToolbar_DXI0_T'),
    saveAndNew: Selector('#RequestForQuotationEditFormToolbar_DXI1_T'),
    saveAndPrint: Selector('#RequestForQuotationEditFormToolbar_DXI2_T'),
    saveAndExit: Selector('#RequestForQuotationEditFormToolbar_DXI3_T'),
    saveAndSend: Selector('#RequestForQuotationEditFormToolbar_DXI4_T'),
    cancel: Selector('#RequestForQuotationEditFormToolbar_DXI5_T'),
    details: Selector('#RequestForQuotationDetailsFormLayoutItem')
}

export const RFQ_Test_Cases = () => {
    fixture`RFQ Test Cases`
    .page`http://localhost:58307/Dictionaries/Account/Login`
    .skipJsErrors()
    .beforeEach(async t => {
        await t.useRole(adminRole)
        await open_Purchaasing_Dashboard(t)  // Reuse the helper function to open the Purchase dashboard
        await t
       .hover(selectors.navigatebar)
       .setNativeDialogHandler(() => true); // Automatically accept geolocation requests,It ensures that the script waits for the handler to be set before moving on to the next line of code.
    })
    test('Open the grid view for RFQ', async t => {
        await t
        .setTestSpeed(0.5)
        .click(selectors.rfqGridview)
        .expect(selectors.pageTitle.innerText).contains('Request For Quotations')
        .expect(selectors.datesFilterForm.visible).ok('Dates Filter Form should be visible')// if the test is stopped should display the message ('Dates Filter Form should be visible')
        //display the toolbar
    })

    test('open new edit form immediately', async t =>{
        await t
        .setTestSpeed(0.5)
        .click( selectors.newform.find('[title="New"].menu-button'))//should open new edit form for the RFQ
        .navigateTo('http://localhost:58307/Inventory/PurchaseDocuments/RequestForQuotationEditForm?PDTID=8')
        .wait(5000)// Wait for the form to load

        // Validate fields and their default values
        const warehouseValue = await selectors.warehouseField.value
        const currencyValue = await selectors.currencyField.value
        const documentDateValue = await selectors.documentDateField.value
        const deadlineDateValue = await selectors.deadlineField.value

        await t
        .expect(warehouseValue).notEql('', 'Warehouse should contain defult value')
        .expect(currencyValue).notEql('', 'Currency should cotains the selected curruncy in the system')
        .expect(documentDateValue).eql(getDate(), 'Document Date should contain today\'s date')
        .expect(deadlineDateValue).eql(getDate(), 'Deadline should contain today\'s date')
         // Check visibility of action buttons
        .expect(selectors.saveButton.visible).ok('Save button should be visible')
        .expect(selectors.saveAndNew.visible).ok('Save And New button should be visible')
        .expect(selectors.saveAndPrint.visible).ok('Save And Print button should be visible')
        .expect(selectors.saveAndExit.visible).ok('Save And Exit button should be visible')
        .expect(selectors.saveAndSend.visible).ok('Save And Send button should be visible')
        .expect(selectors.cancel.visible).ok('Cancel button should be visible')
        .expect(selectors.details.visible).ok('details shoe be displayed')

        // Log field values for debugging
        console.log('Warehouse:', warehouseValue)
        console.log('Currency:', currencyValue)
        console.log('Document Date:', documentDateValue)
        console.log('DeadLine Date:', deadlineDateValue)

  })
}