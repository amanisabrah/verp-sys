import { Selector } from "testcafe";

export const landing_Page_Selectors = {
    user_Name : Selector('input[placeholder="Username"]'),
    landing_Page: Selector('div').withText('Landing Page'),
    phone_Key : Selector ('.dx-lookup-field'),
    phone_Number : Selector ('input[placeholder="User Phone"]'),
    email : Selector ('input[placeholder="Email"]'),
    submit : Selector('div').withText('SUBMIT').nth(7),
    error_List : Selector ('.dx-overlay-content.dx-toast-content.dx-toast-error'),
    success_List: Selector('.dx-overlay-content.dx-toast-content.dx-toast-success'),
    pause_Icon: Selector('.dx-icon.dx-icon-handlevertical').nth(1),
    all_IsRequired: Selector('.dx-overlay-content.dx-toast-content.dx-toast-error').withText('User Name Is Required').withText('Email Is Required'),
    email_IsRequired: Selector('.dx-overlay-content.dx-toast-content.dx-toast-error').withText('Email Is Required'),
    name_IsRequired: Selector('.dx-overlay-content.dx-toast-content.dx-toast-error').withText('User Name Is Required'),
    invalid_Email: Selector('.dx-overlay-content.dx-toast-content.dx-toast-error').withText('Invalid Email'),
    email_Used: Selector('.dx-overlay-content.dx-toast-content.dx-toast-error').withText('Email Has Been Used Before'),
    phone_Used: Selector('.dx-overlay-content.dx-toast-content.dx-toast-error').withText('Phone Number Has Been Used Before'),
    verylong_Phone_num: Selector('.dx-overlay-content.dx-toast-content.dx-toast-error').withText('Issue regarding the phone number'),
    success_Message: Selector('.dx-overlay-content.dx-toast-content.dx-toast-success').withText('Success!'),
    list_Of_Keys: Selector('.dx-lookup-search-wrapper'),
    search_bar: Selector('input[placeholder="Search"]'),
    confirmation: Selector('div').withText('Confirmation').nth(2),
    yes_Button:Selector('div').withText('YES').nth(8),
    no_Button:Selector('div').withText('NO').nth(8),
    languge: Selector('.dx-lookup-field'),
    next: Selector('div').withText('NEXT').nth(7),
    select_Lang_Card: Selector('.dx-card.content'),
}

export const Business_Info_Selectors = {
    business_Info_Form: Selector('.dx-card.content'),
    company_Name: Selector ('input[placeholder="Name"]'),//placeholder Name
    city: Selector('.dx-texteditor-input').nth(1),
    address: Selector('input[placeholder="Address"]'),
    postal_Code: Selector('input[placeholder="Postal Code"]'),
    default_Language_Code: Selector('div').withText('العربية').nth(22),
    company_Phone : Selector('input[placeholder="User Phone"]'),
    company_Mobile: Selector('input[placeholder="User Phone"]'),
    company_Size: Selector('.dx-lookup-field').nth(3),  // Click to open the dropdown
    company_Size_List: Selector('.dx-list-item'), // Target dropdown list items
    tax_Num: Selector('input[placeholder="Tax Number"]'),//placeholder Tax Number
    currency: Selector('input.dx-texteditor-input[role="combobox"]').withAttribute('readonly'),
    commercial_Reg_Num: Selector('input[placeholder="Registration Number"]') ,
    mobile_Code: Selector('.dx-lookup-field'),
    image_Container: Selector('.dx-button-content').nth(3) ,
    file_Input_Selector : Selector('input[type="file"]'),
    image_Container_After_Upload: Selector('.dx-button-content').nth(4) ,
    next:Selector('div').withText('NEXT').nth(8),
    previous: Selector('div').withText('PREVIOUS').nth(8),
}

export const Business_Settings_Selectors = {
    Business_Settings_Card: Selector('.dx-card.content'),

}

export const  Business_Type_Selectors={
    Business_Type_Card: Selector('.dx-card.content'),
    hospitality: Selector ('.card__body-cover'),
    retail: Selector('.card__body-cover').nth(1),
    hospitality_Checkmark: Selector('.card__body-cover').nth(0),
    retail_Checkmark: Selector('.card__body-cover').nth(1),
    next: Selector('div').withText('NEXT').nth(8),
    ///////
    busniess_Card: Selector('.card__body-cover'),
    shop_Business: Selector('.card__body-cover').nth(0),
    supermarket_Business: Selector('.card__body-cover').nth(1),
    roastery_Business: Selector('.card__body-cover').nth(2),
    chekmark: Selector('.card__body-cover-checkbox'),

}

export const Modules_Selectors= {
    Modules_Card: Selector('.dx-card.content'),
    POS: Selector('.card__body-cover'),
    POS_Chekmark: Selector('.card__body-cover-checkbox'),
    next: Selector('.dx-button-content').nth(2),

}

export const Business_Template_Selector= {
    business_Template_Card: Selector('.dx-card.content'),
    template: Selector ('.card__body-cover').nth(0),

}

export const Pre_Defined_Templates_Selectors={
    Pre_Defined_Templates_Card: Selector('.dx-card.content'),
    hyper_Market: Selector('.card__body-cover').nth(0),
    meat: Selector('.card__body-cover').nth(1),

}

export const POS_Menu_Selectors= {
    POS_Menu_Card: Selector('.dx-card.content'),
}

export const Locations_Selectors = { 
    locations_Card: Selector('.dx-card.content'),
}