export const open_Purchaasing_Dashboard = async (t) => {
    const purchaseURL = 'http://localhost:58307/Inventory/Home/PurchaseDashboardView'
    await t.navigateTo(purchaseURL)
}