
import { general_Edit_Form_Selectors, home_Page_Selectors } from "./selectors";


    export const open_Purchaasing_Dashboard = async (t) => {
        const purchase_Dashboard_URL = 'http://localhost:58307/Inventory/Home/PurchaseDashboardView'
        const purchase_Edit_Form_URL= 'http://localhost:58307/Inventory/PurchaseDocuments/RequestForQuotationEditForm?PDTID=8'

        await t
            .wait(2000)
            .click(home_Page_Selectors.purchase_dashboard)            
            .navigateTo(purchase_Dashboard_URL)
            .hover(general_Edit_Form_Selectors.purchase_Navigate_Bar)
            .click(general_Edit_Form_Selectors.open_Edit_Form)
            .navigateTo(purchase_Edit_Form_URL)
    
            
    }

    export const open_RFQ_EditForm = async (t) =>{
        const edit_FormURL= 'http://localhost:58307/Inventory/PurchaseDocuments/RequestForQuotationEditForm?PDTID=8'
        await t
            .navigateTo(edit_FormURL)
            .wait(2000)// Wait for the form to load
    }   

    export const get_Formatted_Date = () => {
        const today = new Date();
        return today.toLocaleDateString('en-GB').replace(/\//g, '-'); // Format as DD-MM-YYYY
        }

