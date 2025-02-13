import { Business_Info_Selectors, landing_Page_Selectors, Business_Settings_Selectors, Business_Type_Selectors, 
    Modules_Selectors, Business_Template_Selector, Pre_Defined_Templates_Selectors, POS_Menu_Selectors,
    Locations_Selectors, What_InEach_Loc_Selectors,  
    POS_Info_Selectors} from "../sub-common/sub-selectors.js"
import { enter_Phone_And_Code  } from "../sub-common/sub-helpers.js"
const imagePath = 'C:\\Users\\USER\\Pictures\\vtech logo.png';

const login_And_Navigate_To_BusinessInfo = async t => {
    const randomUsername = `Amani${Math.floor(1000 + Math.random() * 9000)}`; // Generate a username starting with "Amani"
    const randomEmail = `amani${Date.now()}@test.com`; // Generate a unique email
    const randomPhone = `789${Math.floor(1000000 + Math.random() * 1000000)}`; // Generate a random phone number
    const code = '962'; // Country code
    await t
        .click(landing_Page_Selectors.user_Name)
        .typeText(landing_Page_Selectors.user_Name, randomUsername ,{ paste: true })
    await enter_Phone_And_Code(t, randomPhone, code)
    await t
        .click(landing_Page_Selectors.email)
        .typeText(landing_Page_Selectors.email, randomEmail ,{ paste: true })
        .click(landing_Page_Selectors.submit)
        .expect(landing_Page_Selectors.select_Lang_Card.visible).ok()
        .click(landing_Page_Selectors.next)
        .expect(Business_Info_Selectors.business_Info_Form.visible).ok()
        .click(Business_Info_Selectors.business_Info_Form)

    return { randomUsername, randomEmail, randomPhone }
}

// Reusable function for filling Business Information and Business Settings
const fillBusinessInfoAndSettings = async t => {
    await t
        .click(Business_Info_Selectors.company_Name)
        .typeText(Business_Info_Selectors.company_Name, "Vtech", { paste: true })
        .click(Business_Info_Selectors.postal_Code)
        .typeText(Business_Info_Selectors.postal_Code, "12ABC", { paste: true })
        .click(Business_Info_Selectors.company_Size)
        .wait(500)
        .click(Business_Info_Selectors.company_Size_List.withText("11_20"))
        .click(Business_Info_Selectors.tax_Num)
        .typeText(Business_Info_Selectors.tax_Num, "6598652", { paste: true })
        .hover(Business_Info_Selectors.image_Container)
        .setFilesToUpload(Business_Info_Selectors.file_Input_Selector, imagePath)
        .click(Business_Info_Selectors.next)
        .expect(Business_Settings_Selectors.Business_Settings_Card.visible).ok('Business Settings card should be displayed')
        .click(Business_Info_Selectors.next)
        .expect(Business_Type_Selectors.Business_Type_Card.visible).ok('Business Type card should be displayed')
}

export const Submit_Company_Test_Cases = () => {
    let testData
    fixture`location_Stage_Test_Cases`
    .page`http://localhost:4200/#/landing-page`
    .beforeEach(async t => {
        await t.eval(() => document.body.style.zoom = '90%')
        await t.resizeWindow(1920,945)
        testData = await login_And_Navigate_To_BusinessInfo(t)//// Generate new data before each test
        await t.setTestSpeed(0.8)
    })

    test('1- Submit_Company', async t => {
        await fillBusinessInfoAndSettings(t)
        await t
            .expect(Business_Type_Selectors.hospitality_Checkmark.exists)
            .ok('Hospitality should have a checkmark')            
        // Click on Retail to select it
            .click(Business_Type_Selectors.retail)
            .expect(Business_Type_Selectors.retail_Checkmark.exists).ok('Retail should now have a checkmark')
            .hover(Business_Type_Selectors.next)
            .click(Business_Type_Selectors.next)
            .expect(Modules_Selectors.Modules_Card.visible).ok('Modules card should be displayed')
        await t.
            expect(Modules_Selectors.POS.visible).ok("Only POS should displayed")
        await t 
            .expect(Modules_Selectors.POS_Chekmark.exists).ok('POS should have a checkmark')
            .click(Modules_Selectors.next)
            .expect(Business_Type_Selectors.busniess_Card.visible).ok('This card contains examples of the retail business type')
            .click(Business_Type_Selectors.supermarket_Business)
            .wait(500)
            .click(Modules_Selectors.next)
            .expect(Business_Template_Selector.business_Template_Card.visible).ok('Business Template card should be displayed and cotains two options: template and manule')
            .click(Business_Template_Selector.template)
            .click(Modules_Selectors.next)
            .expect(Pre_Defined_Templates_Selectors.Pre_Defined_Templates_Card.visible).ok('Pre-Defined Templates card should be displayed')
            .click(Pre_Defined_Templates_Selectors.hyper_Market)
            .click(Modules_Selectors.next)
            .expect(POS_Menu_Selectors.POS_Menu_Card.visible).ok('POS_Menu card should be displayed')
            .click(Business_Type_Selectors.next)
            .expect(Locations_Selectors.locations_Card.visible).ok('Locations card should be displayed')
            //.hover(Locations_Selectors.add_Location)
            //.click(Locations_Selectors.add_Location)
            .expect(Locations_Selectors.location_Box_Input.exists).ok('Location field should be displayed')
            .click(Business_Info_Selectors.next)
            .expect(What_InEach_Loc_Selectors.What_InEach_Location_Card.visible).ok('What InEach Location Card should be displayed')
            .hover(What_InEach_Loc_Selectors.pos_Button)
            .click(What_InEach_Loc_Selectors.pos_Button)
            .expect(What_InEach_Loc_Selectors.pos_Box_Input.exists).ok('pos should be added when click on the pos button')
            .click(Business_Info_Selectors.next)
            .expect(POS_Info_Selectors.POS_Info_Card.exists).ok('POS Info Card should be displayed')

    })
}