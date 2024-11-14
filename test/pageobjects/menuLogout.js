import { $ } from '@wdio/globals';

class MenuLogout {
    get openBurger () {
        return $('div[class="bm-burger-button"]');
    }
    get selectLogout () {
        return $('a[id="logout_sidebar_link"]');
    }
    async select () {
        await this.openBurger.click();
        await this.selectLogout.click();
    }
}

export default new MenuLogout();