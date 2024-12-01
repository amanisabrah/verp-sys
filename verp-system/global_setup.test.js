import { admin_Role } from './common/helpers/roles.test';
import { Selector } from 'testcafe';

//Use the admin_Role to perform the login once.
fixture`Global Setup`
    .page`http://localhost:58307/Dictionaries/Account/Login` // System login page
    .before(async()  => {
        await useRole(admin_Role); // Login once
        await navigateTo('http://localhost:58307/');  // Dashboard URL
        await expect(Selector('body').exists).ok();  // Check if the page exists

    })
    .skipJsErrors(); // Ignore JavaScript errors globally
