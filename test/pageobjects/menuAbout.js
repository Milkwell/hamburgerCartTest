import { $ } from '@wdio/globals';

class MenuAbout {
    get inputUsername () {
        return $('#user-name');
    }
    get inputPassword () {
        return $('#password');
    }
    get btnSubmit () {
        return $('input[type="submit"]');
    }
    get openBurgerAgain () {
        return $('div[class="bm-burger-button"]');
    }
    get selectAbout () {
        return $('a[id="about_sidebar_link"]')
    }
    async select (username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
    await this.openBurgerAgain.click();
    await this.selectAbout.click();
    }
    get flashAlert () {
        return $('div[class="MuiBox-root css-lwb5go"]');
    }
}

export default new MenuAbout();