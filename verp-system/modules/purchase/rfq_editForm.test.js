import { Selector } from 'testcafe';
import { admin_Role } from '../../common/helpers/roles.test.js';
import { open_Purchaasing_Dashboard, open_RFQ_EditForm , get_Formatted_Date } from '../../common/helpers/utils.test.js';
import { edit_form_Selctors, contractor_Selectors, item_Selectors, panel_Control_Selctors } from '../../common/helpers/selectors.js';

export const RFQ_Edit_Form_Test_Cases = () => {
    fixture`RFQ Edit Form Test Cases`
    .page`http://localhost:58307/Inventory/PurchaseDocuments/RequestForQuotationEditForm?PDTID=8`
    .skipJsErrors()
    .beforeEach(async t => { 
        await t.useRole(admin_Role); // Use the role
        await open_Purchaasing_Dashboard(t)  // Reuse the helper function to open the Purchase dashboard
        await open_RFQ_EditForm(t)
        //await t.setNativeDialogHandler(() => true) // Automatically accept geolocation requests,It ensures that the script waits for the handler to be set before moving on to the next line of code.
    })
       test('1. Open new edit form immediately', async t =>{
            // Validate fields and their default values
            const warehouse_Value = await edit_form_Selctors.warehouse_Field.value
            const currency_Value = await edit_form_Selctors.currency_Field.value
            const document_Date_Value = await edit_form_Selctors.document_Date_Field.value
            const deadline_Date_Value = await edit_form_Selctors.deadline_Field.value
            await t
                //.takeScreenshot({fullPage: true}) //take screenshoot to whole website 
                .expect(warehouse_Value).notEql('', 'Warehouse should contain defult value')
                .expect(currency_Value).notEql('', 'Currency should cotains the selected curruncy in the system')
                .expect(document_Date_Value).eql(get_Formatted_Date(), 'Document Date should contain today\'s date')
                .expect(deadline_Date_Value).eql(get_Formatted_Date(), 'Deadline should contain today\'s date')
                 // Check visibility of action buttons
                .wait(5000)
                .expect(edit_form_Selctors.save_Button.visible).ok('Save button should be visible')
                .expect(edit_form_Selctors.save_And_New.visible).ok('Save And New button should be visible')
                .expect(edit_form_Selctors.save_And_Print.visible).ok('Save And Print button should be visible')
                .expect(edit_form_Selctors.save_And_Exit.visible).ok('Save And Exit button should be visible')
                //.expect(edit_form_Selctors.save_And_Send.visible).ok('Save And Send button should be visible')
                //.expect(edit_form_Selctors.cancel.visible).ok('Cancel button should be visible')
                .expect(edit_form_Selctors.details.visible).ok('details should be displayed')
                .expect(edit_form_Selctors.ribbon_Status.visible).ok('Status should be "New"')

            // Log field values for debugging
            console.log('Warehouse:', warehouse_Value)
            console.log('Currency:', currency_Value)
            console.log('Document Date:', document_Date_Value)
            console.log('DeadLine Date:', deadline_Date_Value)
        })
        test('2. Add rows into detils', async t => {
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
        test('3. create a contreactor successfully', async t =>{
            const cont_Name_Value = Array.from({ length: 6 }, () => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join('');
            const code_Value='123'
            const tax_Numb_Value = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString() // Generate a random value
            const expected_Prefix = '+962'
            const phone_Numb_Value = `7${Math.floor(100000000 + Math.random() * 900000000)}`; // Random 10-digit phone number starting with '7'
            const email_Value = `${cont_Name_Value}@example.com`.toLowerCase(); // Random email using contractor name
            await t
                .click(contractor_Selectors.add_Contractor)
                .expect(panel_Control_Selctors.panel_Control.exists).ok('The External Edit form should display the "Create Contractor" option.')
                .typeText(contractor_Selectors.con_Name, cont_Name_Value)
                .click(panel_Control_Selctors.panel_Control)
                .expect(contractor_Selectors.con_Name2.value).eql(cont_Name_Value,' The English name should be filled automatically with the value of the entered name.')
                .typeText(contractor_Selectors.code, code_Value)
                .typeText(contractor_Selectors.tax_number,tax_Numb_Value)
                .expect(contractor_Selectors.prefix.value).eql(expected_Prefix, 'Prefix should contain the default value')
                .typeText(contractor_Selectors.phone_Number,phone_Numb_Value)
                .typeText(contractor_Selectors.email,email_Value)
                .click(panel_Control_Selctors.save_Panel_Button)
                .wait(1000)
                .expect(panel_Control_Selctors.success_Message.visible).ok('Should display success message')
                .wait(2000)
            const contractor_Value = await contractor_Selectors.contractor_Field.value
            await t
                .expect(contractor_Value).notEql('', 'contractor should contain the new contractor name')
            console.log('Supplier Contractors: ', contractor_Value)
        })
        test('4. display error message when create a contractor', async t=>{
            await t
            .click(contractor_Selectors.add_Contractor)
            .expect(panel_Control_Selctors.panel_Control.exists).ok('The External Edit form should display the "Create Contractor" option.')
            .click(panel_Control_Selctors.save_Panel_Button)
            .expect(panel_Control_Selctors.alert_Message_Display.exists).ok('Display alert messages: "Name Is Required, English Name Is Required, Mobile Number Is Required, Code Is Required, Tax Number Is Duplicate')
        })
        test('5. create item and display it in details', async t=>{
            const item_Name_Value = `${Math.random().toString(36).substring(2, 5)}` // Generates a random string
            const expected_Symbol_Value = item_Name_Value.slice(0, 3).toUpperCase()
            await t
                .doubleClick(item_Selectors.item_Index0)
                .click(item_Selectors.create_Item_Image)
                .expect(panel_Control_Selctors.panel_Control.exists).ok('The External Edit form should display the "Create Item" option.')
                .click(item_Selectors.item_Name)
                .typeText(item_Selectors.item_Name, item_Name_Value)
                .click(panel_Control_Selctors.panel_Control)
                .expect(item_Selectors.item_Name2.value).eql(item_Name_Value,' The English name should be filled automatically with the value of the entered name.')
                .expect(item_Selectors.item_Sale_Name.value).eql(item_Name_Value,' The sales name should be filled automatically with the value of the entered name.')
                .expect(item_Selectors.item_Sale_Name2.value).eql(item_Name_Value,' The sales English name should be filled automatically with the value of the entered name.')
                .expect(item_Selectors.item_Symbol.value).eql(expected_Symbol_Value,' The symbol should be filled with the first three letters of the entered name in uppercase.')
                .click(panel_Control_Selctors.save_Panel_Button)
                .expect(panel_Control_Selctors.success_Message.visible).ok('Should display success message')
        })
        test('6. display error message when create an Item', async t=>{
            await t
            .doubleClick(item_Selectors.item_Index0)
            .click(item_Selectors.create_Item_Image)
            .click(panel_Control_Selctors.save_Panel_Button)
            .expect(panel_Control_Selctors.alert_Message_Display.exists).ok('Display alert messages: "Name Is Required, Name ENG Is Required. Sales Name Is Required. Sales English Name Is Required. Symbol Is Required.')
        })
        test('7. create a Draft RFQ document successfully', async t =>{
            const reference_Numb_Value = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString() // Generate a random value
            await t
                .skipJsErrors()
                .click(contractor_Selectors.list_Of_Contractors)
                .expect(contractor_Selectors.list_Visible.visible).ok('List of contractors should displayed')
                .click(contractor_Selectors.select_Contractor)
                .click(edit_form_Selctors.edit_Form)
                .click(edit_form_Selctors.branch_list)
                .expect(edit_form_Selctors.list_Visible.visible).ok('List of branches should displayed')
                .click(edit_form_Selctors.select_Branch)
                .click(edit_form_Selctors.edit_Form)
                .click(edit_form_Selctors.reference_Numb)
                .typeText(edit_form_Selctors.reference_Numb,reference_Numb_Value)
                .doubleClick(item_Selectors.item_Index0)
                .click(item_Selectors.item_List)
                .expect(item_Selectors.list_Visible.visible).ok('List of items should displayed')
                .click(item_Selectors.select_Item)
                .wait(5000)
                .click(edit_form_Selctors.save_Button)
                const postReloadElement = edit_form_Selctors.edit_Form
                await t
                    .expect(postReloadElement.exists)
                    .ok('Page should reload and display the expected element after saving')

        })
        test('8. adding a new request without filling the required field', async t =>{
            await t
                .click(edit_form_Selctors.save_Button)
                .expect(edit_form_Selctors.error_Alert.visible).ok(' Should display error List contains: Contractor Is Required, Reference Number Is Required, Item Is Required, Tax is required, Units OF Measurement Is Required.')



        })
    
}