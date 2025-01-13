import { landing_Page_Selectors } from "../sub-common/sub-selectors.js"


export const enter_Phone_And_Code  = async (t, phone, code) => {
    await t
        .click(landing_Page_Selectors.phone_Key)
        .expect(landing_Page_Selectors.list_Of_Keys.visible).ok('The list of phone codes should be visible')
        .typeText(landing_Page_Selectors.search_bar, code)
        .wait(1000)
        .pressKey('tab')
        .pressKey('enter')
        .click(landing_Page_Selectors.phone_Number)
        .typeText(landing_Page_Selectors.phone_Number, phone);
}