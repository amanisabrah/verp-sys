import { Selector } from "testcafe";

export const logIN_Selectors = {
    user_Name: Selector('#Login_I'),
    password: Selector('#Password_I_CLND'),
    enter_Password: Selector('#Password_I'),
    //show_Pass_Button: Selector('#Password_B0'),
    //remember_Me: Selector('#RememberMe_S_D'),
    log_In_Button: Selector('#Button_CD'),
    select_Company: Selector('.list-group-item.Company.noselect[data-id="1"]'),
  }
export const home_Page_Selectors={
    home_Page: Selector('#NavigationPaths a').withText('Home'),
    purchase_dashboard: Selector('#ContentBody a').withText('Purchasing')
}
export const general_Edit_Form_Selectors={
    purchase_Navigate_Bar: Selector('#CenterMenu_DXI3_T'),
    open_Edit_Form: Selector('#CenterMenu_DXI3i0_').find('.dxIcon_actions_add_16x16office2013.dxeButtonEditButton_AccMaterialCompact.add-button'),

}
export const edit_form_Selctors={
    //page_Title: Selector('#PageTitle'),
    //dates_Filter_Form: Selector('#DatesFilterForm_0_2'),
    edit_Form: Selector('#EditForm'),
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
    ribbon_Status: Selector('#ContentBody').find('.ribbon.dxpnlControl_AccMaterialCompact'),
    details: Selector('#RequestForQuotationDetailsFormLayoutItem'),
    add_Line: Selector('#RequestForQuotationGridViewBatch_DXCBtn0Img'),
    delete_line : Selector('#RequestForQuotationGridViewBatch_DXCBtn-2Img'),
    confirmation_Popup: Selector('#CustomAlertPopup_PWH-1'),
    confirm_Delete: Selector('#CustomAlertPopup_YES_CD'),
    branch_list: Selector('#INV_RFQ_BRAID_B-1'),
    list_Visible: Selector('#INV_RFQ_BRAID_DDD_L'),
    select_Branch: Selector('#INV_RFQ_BRAID_DDD_L_LBI0T1'),
    reference_Numb: Selector('#INV_RFQ_ReferenceNumber_I'),
    
}
export const panel_Control_Selctors={
    panel_Control: Selector('#PanelControl'),
    save_Panel_Button: Selector('#PanelControl_Save_CD'),
    success_Message : Selector('.alert.ui-pnotify-container.alert-success.ui-pnotify-shadow'),
    alert_Message_Display : Selector('div').withText('Alert').nth(11),
}

export const contractor_Selectors={
    contractor_Field: Selector('#INV_RFQ_Contractors_I'),
    add_Contractor: Selector('#INV_RFQ_Contractors_B0Img'),
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
    pause_Alert_Mess: Selector('.glyphicon.glyphicon-pause'),
    alert_Message: Selector('div').withText('Name Is Required').nth(2),
    list_Of_Contractors : Selector('#INV_RFQ_Contractors_B-1'),
    list_Visible: Selector('#INV_RFQ_Contractors_DDD_PWC-1'),
    select_Contractor: Selector ('#INV_RFQ_Contractors_DDD_gv_DXDataRow8').find('.dxgv').nth(2),

}
export const item_Selectors={
    item_Index0: Selector('#RequestForQuotationGridViewBatch_DXDataRow0').find('.dxgv.dx-ellipsis.dx-al').nth(0),
    create_Item_Image: Selector('#INV_RQD_ITMID_B0'),
    item_Name: Selector('#INV_ITM_Name_I'),
    item_Name2:Selector('#INV_ITM_Name2_I'),
    item_Sale_Name: Selector('#INV_ITM_SalesName_I'),
    item_Sale_Name2: Selector('#INV_ITM_SalesName2_I'),
    item_Symbol: Selector('#INV_ITM_Symbol_I'),
    item_List: Selector('#INV_RQD_ITMID_B-1'),
    list_Visible: Selector('#INV_RQD_ITMID_DDD_gv_DXMainTable'),
    select_Item: Selector('#INV_RQD_ITMID_DDD_gv_DXDataRow1').find('.dxgv').nth(1),

}
