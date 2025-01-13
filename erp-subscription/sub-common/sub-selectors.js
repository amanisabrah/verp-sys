import { Selector } from "testcafe";

export const landing_Page_Selectors = {
    user_Name : Selector('#dx_dx-25477e08-74ae-8258-ce3d-d20e4de3bc17_name'),
    landing_Page: Selector('div').withText('Landing Page'),
    user_Name: Selector('input[placeholder="User Name"]'), // Using placeholder for stability
    phone_Key : Selector ('.dx-lookup-field'),
    phone_Number : Selector ('.dx-texteditor-input').nth(2),
    email : Selector ('input[placeholder="Email"]'),
    submit : Selector('div').withText('SUBMIT').nth(7),
    error_List : Selector ('.dx-overlay-content.dx-toast-content.dx-toast-error'),
    success_List: Selector('.dx-overlay-content.dx-toast-content.dx-toast-success'),
    pause_Icon: Selector('.dx-icon.dx-icon-handlevertical').nth(1),
    all_IsRequired: Selector('.dx-overlay-content.dx-toast-content.dx-toast-error').withText('Name Is Required').withText('Email Is Required'),
    email_IsRequired: Selector('.dx-overlay-content.dx-toast-content.dx-toast-error').withText('Email Is Required'),
    name_IsRequired: Selector('.dx-overlay-content.dx-toast-content.dx-toast-error').withText('Name Is Required'),
    invalid_Email: Selector('.dx-overlay-content.dx-toast-content.dx-toast-error').withText('Invalid Email'),
    email_Used: Selector('.dx-overlay-content.dx-toast-content.dx-toast-error').withText('Email Has Been Used Before'),
    phone_Used: Selector('.dx-overlay-content.dx-toast-content.dx-toast-error').withText('Phone Number Has Been Used Before'),
    success_Message: Selector('.dx-overlay-content.dx-toast-content.dx-toast-success').withText('Success!'),
    list_Of_Keys: Selector('.dx-lookup-search-wrapper'),
    search_bar: Selector('input[placeholder="Search"]'),
    languge: Selector ('.unauthenticated-container').find('> ng-component:nth(0) > div:nth(0)')
}