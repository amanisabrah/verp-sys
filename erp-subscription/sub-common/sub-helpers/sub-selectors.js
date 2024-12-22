import { Selector } from "testcafe";

export const landing_Page_Selectors = {
    user_Name : Selector('#dx_dx-25477e08-74ae-8258-ce3d-d20e4de3bc17_name'),
    phone_Key : Selector ('.dx-lookup-field'),
    phone_Number : Selector ('.dx-texteditor-input').nth(1),
    email : Selector ('#dx_dx-25477e08-74ae-8258-ce3d-d20e4de3bc17_email'),
    submit : Selector('div').withText('SUBMIT').nth(7),
    error_List : Selector ('.dx-overlay-content.dx-toast-content.dx-toast-error'),
    pause_Icon: Selector('.dx-icon.dx-icon-handlevertical').nth(1),
    error_List_Text: Selector('.dx-overlay-content.dx-toast-content.dx-toast-error').withText('Name Is Required').withText('Email Is Required')

}