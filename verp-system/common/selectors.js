import { Selector } from "testcafe";

export const logIN_Selectors = {
    user_Name: Selector('#Login_I'),
    password: Selector('#Password_I_CLND'),
    enter_Password: Selector('#Password_I'),
    show_Pass_Button: Selector('#Password_B0'),
    remember_Me: Selector('#RememberMe_S_D'),
    log_In_Button: Selector('#Button_CD'),
    select_Company: Selector('.list-group-item.Company.noselect[data-id="1"]'),
  }
export const general_Edit_Form_Selectors={
    page_Title: Selector('#PageTitle'),
    dates_Filter_Form: Selector('#DatesFilterForm_0_2'),
    navigate_Bar: Selector('#CenterMenu_DXI3_T'),
    new_Form: Selector('#CenterMenu_DXI3i0_')
}
export const edit_form_Selctors={
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

export const contractor_Selectors={
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
    alert_Message_Display : Selector('div').withText('Alert').nth(11),
    pause_Alert_Mess: Selector('.glyphicon.glyphicon-pause'),
    alert_Message: Selector('div').withText('Name Is Required').nth(2)
}
