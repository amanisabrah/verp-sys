import { Selector } from "testcafe";

export const open_Purchaasing_Dashboard = async (t) => {
    const purchaseURL = 'http://localhost:58307/Inventory/Home/PurchaseDashboardView'
        await t.navigateTo(purchaseURL)
    }


export const get_Formatted_Date = () => {
    const today = new Date();
    return today.toLocaleDateString('en-GB').replace(/\//g, '-'); // Format as DD-MM-YYYY
    }

