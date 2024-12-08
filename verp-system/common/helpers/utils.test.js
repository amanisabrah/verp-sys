
import { general_Edit_Form_Selectors, home_Page_Selectors } from "./selectors";

    export const open_Purchaasing_Dashboard = async (t) => {
        const purchase_Dashboard_URL = 'http://localhost:58307/Inventory/Home/PurchaseDashboardView'
        await t
            .click(home_Page_Selectors.purchase_dashboard)            
            .navigateTo(purchase_Dashboard_URL)
            .hover(general_Edit_Form_Selectors.purchase_Navigate_Bar)
    }

    export const open_RFQ_EditForm = async (t) =>{
        const edit_FormURL= 'http://localhost:58307/Inventory/PurchaseDocuments/RequestForQuotationEditForm?PDTID=8'
        await t
            .setNativeDialogHandler(() => true)
            .navigateTo(edit_FormURL)
    } 

    export const get_Formatted_Date = () => {
        const today = new Date();
        return today.toLocaleDateString('en-GB').replace(/\//g, '-'); // Format as DD-MM-YYYY
        }

