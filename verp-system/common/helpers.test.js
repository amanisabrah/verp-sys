import { Selector } from "testcafe";

export const open_Purchaasing_Dashboard = async (t) => {
    const purchaseURL = 'http://localhost:58307/Inventory/Home/PurchaseDashboardView'
        await t.navigateTo(purchaseURL)
}
export const logIN_Selectors = {
    user_Name: Selector('#Login_I'),
    password: Selector('#Password_I_CLND'),
    enter_Password: Selector('#Password_I'),
    show_Pass_Button: Selector('#Password_B0'),
    remember_Me: Selector('#RememberMe_S_D'),
    log_In_Button: Selector('#Button_CD'),
    select_Company: Selector('.list-group-item.Company.noselect[data-id="1"]'),
  };

export const get_Formatted_Date = () => {
    const today = new Date();
    return today.toLocaleDateString('en-GB').replace(/\//g, '-'); // Format as DD-MM-YYYY
}

