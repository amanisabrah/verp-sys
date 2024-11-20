import { Selector } from "testcafe"
import { adminRole } from "../../roles.test"  // Import the admin role from roles.test.js
import { open_Purchaasing_Dashboard, getDate } from "../../helpers.test"

const general_Selectors={
    page_Title: Selector('#PageTitle'),
    dates_Filter_Form: Selector('#DatesFilterForm_0_2'),
    navigate_bar: Selector('#CenterMenu_DXI3_T'),
    rfq_Gridview: Selector('#CenterMenu_DXI3i0_T'),
    new_form: Selector('#CenterMenu_DXI3i0_')
}
const edit_form_Selctors={
    warehouse_Field: Selector('#INV_RFQ_WARID_I'),
    currency_Field: Selector('#CURID_I'),
    document_Date_Field: Selector('#INV_RFQ_DocumentDate_I'),
    deadline_Field: Selector('#INV_RFQ_Deadline_I'),
    save_Button: Selector('#RequestForQuotationEditFormToolbar_DXI0_T'),
    save_And_New: Selector('#RequestForQuotationEditFormToolbar_DXI1_T'),
    save_And_Print: Selector('#RequestForQuotationEditFormToolbar_DXI2_T'),
    save_And_Exit: Selector('#RequestForQuotationEditFormToolbar_DXI3_T'),
    save_And_Send: Selector('#RequestForQuotationEditFormToolbar_DXI4_T'),
    cancel: Selector('#RequestForQuotationEditFormToolbar_DXI5_T'),
    details: Selector('#RequestForQuotationDetailsFormLayoutItem'),
    add_Line: Selector('#RequestForQuotationGridViewBatch_DXCBtn0Img'),
    delete_line : Selector('#RequestForQuotationGridViewBatch_DXCBtn-2Img'),
    confirmation_Popup: Selector('#CustomAlertPopup_PWH-1'),
    confirm_Delete: Selector('#CustomAlertPopup_YES_CD'),
    contractor_Field: Selector('#INV_RFQ_Contractors_I')
}

export const RFQ_Test_Cases = () => {
    fixture`RFQ Test Cases`
    .page`http://localhost:58307/Dictionaries/Account/Login`
    .skipJsErrors()
    .beforeEach(async t => {
        await t.useRole(adminRole)
        await open_Purchaasing_Dashboard(t)  // Reuse the helper function to open the Purchase dashboard
        await t
            .setTestSpeed(0.5)
            .hover(general_Selectors.navigate_bar)
            .setNativeDialogHandler(() => true)// Automatically accept geolocation requests,It ensures that the script waits for the handler to be set before moving on to the next line of code.
            .click( general_Selectors.new_form.find('[title="New"].menu-button'))//should open new edit form for the RFQ
            .wait(1000)
            .navigateTo('http://localhost:58307/Inventory/PurchaseDocuments/RequestForQuotationEditForm?PDTID=8')
            .wait(10000)// Wait for the form to load
    })

        /*test('Open the grid view for RFQ', async t => {
        await t
            .setTestSpeed(0.5)
            .wait(1000)
            .click(general_Selectors.rfq_Gridview)
            .expect(general_Selectors.page_Title.innerText).contains('Request For Quotations')
            .expect(general_Selectors.dates_Filter_Form.visible).ok('Dates Filter Form should be visible')// if the test is stopped should display the message ('Dates Filter Form should be visible')
            //display the toolbar
        })*/
        test('1.Open new edit form immediately', async t =>{
            // Validate fields and their default values
            const warehouse_Value = await edit_form_Selctors.warehouse_Field.value
            const currency_Value = await edit_form_Selctors.currency_Field.value
            const document_Date_Value = await edit_form_Selctors.document_Date_Field.value
            const deadline_Date_Value = await edit_form_Selctors.deadline_Field.value
            await t
                .expect(warehouse_Value).notEql('', 'Warehouse should contain defult value')
                .expect(currency_Value).notEql('', 'Currency should cotains the selected curruncy in the system')
                .expect(document_Date_Value).eql(getDate(), 'Document Date should contain today\'s date')
                .expect(deadline_Date_Value).eql(getDate(), 'Deadline should contain today\'s date')
                 // Check visibility of action buttons
                .expect(edit_form_Selctors.save_Button.visible).ok('Save button should be visible')
                .expect(edit_form_Selctors.save_And_New.visible).ok('Save And New button should be visible')
                .expect(edit_form_Selctors.save_And_Print.visible).ok('Save And Print button should be visible')
                .expect(edit_form_Selctors.save_And_Exit.visible).ok('Save And Exit button should be visible')
                .expect(edit_form_Selctors.save_And_Send.visible).ok('Save And Send button should be visible')
                .wait(1000)
                .expect(edit_form_Selctors.cancel.visible).ok('Cancel button should be visible')
                .expect(edit_form_Selctors.details.visible).ok('details should be displayed')

            // Log field values for debugging
            console.log('Warehouse:', warehouse_Value)
            console.log('Currency:', currency_Value)
            console.log('Document Date:', document_Date_Value)
            console.log('DeadLine Date:', deadline_Date_Value)
        })  
        test('2.Add rows into detils', async t => {
            await t
                .expect(edit_form_Selctors.add_Line.visible).ok('+ icon should be displayed')
                .click(edit_form_Selctors.add_Line)
                .expect('#INV_RQD_ITMID_I').ok('system should add new line')
                const nodata= Selector('#RequestForQuotationGridViewBatch_DXEmptyRow td').withText('No data to display')
                await t
                .expect(edit_form_Selctors.delete_line.visible).ok('"-" icon should be displayed')
                .click(edit_form_Selctors.delete_line)
                .expect(edit_form_Selctors.confirmation_Popup.visible).ok('should display confirmation popup')
                .click(edit_form_Selctors.confirm_Delete) 
        })
        const contractor_Selectors={
            add_Contractor: Selector('#INV_RFQ_Contractors_B0Img'),
            panel_Control: Selector('#PanelControl'),
            con_Name : Selector('#ACC_CON_Name_I'),
            con_Name2 : Selector('#ACC_CON_Name2_I'),
            code :Selector ('#ACC_CON_Code_I'),
            tax_number: Selector('#Tax_Number_I'),
            prefix:Selector('#CountryPrefixPhoneNumber_CON_MobileNumber_I'),
            phone_Number: Selector('#PhoneNumber_CON_MobileNumber_I'),
            email: Selector('#ACC_CON_Email_I'),
            business_Type: Selector('#ACC_CON_CBTID_I'),
            clicnet_Category: Selector('#ACC_CON_GCCID_I'),
            city: Selector('#CITIDs_I'),
            save_Con: Selector('#PanelControl_SaveImg'),
            success_Message : Selector('.alert.ui-pnotify-container.alert-success.ui-pnotify-shadow'),

        }
        test('create a contreactor successfully', async t =>{
            const name_Value= 'Amani'
            const code_Value='123'
            const tax_Numb_Value= '564950'
            const expected_Prefix = '+962'
            const phone_Numb_Value='789552270'
            const email_Value='amani@vtech-sys.com'
            await t
                .click(contractor_Selectors.add_Contractor)
                .expect(contractor_Selectors.panel_Control.exists).ok('The External Edit form should display the "Create Contractor" option.')
                .typeText(contractor_Selectors.con_Name, name_Value)
                .click(contractor_Selectors.panel_Control)
                .expect(contractor_Selectors.con_Name2.value).eql(name_Value,' The English name should be filled automatically with the value of the entered name.')
                .typeText(contractor_Selectors.code, code_Value)
                .typeText(contractor_Selectors.tax_number,tax_Numb_Value)
                .expect(contractor_Selectors.prefix.value).eql(expected_Prefix, 'Prefix should contain the default value')
                .typeText(contractor_Selectors.phone_Number,phone_Numb_Value)
                .typeText(contractor_Selectors.email,email_Value)
                .click(contractor_Selectors.save_Con)
                .wait(1000)
                .expect(contractor_Selectors.success_Message.visible).ok('Should display success message')
                .wait(2000)
            const contractor_Value = await edit_form_Selctors.contractor_Field.value
            await t
                .expect(contractor_Value).notEql('', 'contractor should contain the new contractor name')
        })
    
}