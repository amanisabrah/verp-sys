import { Selector } from 'testcafe';
import { admin_Role } from '../../common/helpers/roles.test.js';
import { open_Purchaasing_Dashboard, open_RFQ_EditForm , get_Formatted_Date } from '../../common/helpers/utils.test.js';
import { general_Edit_Form_Selectors, edit_form_Selctors, contractor_Selectors } from '../../common/helpers/selectors.js';

export const RFQ_Edit_Form_Test_Cases = () => {
    fixture`RFQ Edit Form Test Cases`
    .page`http://localhost:58307/Inventory/PurchaseDocuments/RequestForQuotationEditForm?PDTID=8`
    .skipJsErrors()
    /*.before(async () => {
        await useRole(admin_Role)
        await open_Purchaasing_Dashboard()  // Reuse the helper function to open the Purchase dashboard
        await open_RFQ_EditForm()
        t.setNativeDialogHandler(() => true) // Automatically accept geolocation requests,It ensures that the script waits for the handler to be set before moving on to the next line of code.
    })*/
    .beforeEach(async t => {
        //await useRole(admin_Role)
        await open_Purchaasing_Dashboard(t)  // Reuse the helper function to open the Purchase dashboard
        await open_RFQ_EditForm(t)
        t.setNativeDialogHandler(() => true) // Automatically accept geolocation requests,It ensures that the script waits for the handler to be set before moving on to the next line of code.
       })
    .afterEach(async t => {
        await open_RFQ_EditForm(t)
    })
        test('1.Open new edit form immediately', async t =>{
            // Validate fields and their default values
            const warehouse_Value = await edit_form_Selctors.warehouse_Field.value
            const currency_Value = await edit_form_Selctors.currency_Field.value
            const document_Date_Value = await edit_form_Selctors.document_Date_Field.value
            const deadline_Date_Value = await edit_form_Selctors.deadline_Field.value
            await t
                .expect(warehouse_Value).notEql('', 'Warehouse should contain defult value')
                .expect(currency_Value).notEql('', 'Currency should cotains the selected curruncy in the system')
                .expect(document_Date_Value).eql(get_Formatted_Date(), 'Document Date should contain today\'s date')
                .expect(deadline_Date_Value).eql(get_Formatted_Date(), 'Deadline should contain today\'s date')
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

        test('create a contreactor successfully', async t =>{
            const name_Value= 'Amani'
            const code_Value='123'
            const tax_Numb_Value = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString() // Generate a random value
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
                console.log('Supplier Contractors:', contractor_Value)
        })
        test('display error message when create a contractor', async t=>{
            await t
            .click(contractor_Selectors.add_Contractor)
            .expect(contractor_Selectors.panel_Control.exists).ok('The External Edit form should display the "Create Contractor" option.')
            .click(contractor_Selectors.save_Con)
            .expect(contractor_Selectors.alert_Message_Display.exists).ok('Display alert messages: "Name Is Required, English Name Is Required, Mobile Number Is Required, Code Is Required, Tax Number Is Duplicate"')
            //.click(contractor_Selectors.pause_Alert_Mess)
           // const alert_Message_Value= await contractor_Selectors.alert_Message.value
            //console.log('Alert:',alert_Message_Value)

        })
    
}