// this is where I will add all the hamburger menu stuff

import { $ } from '@wdio/globals';

class HamburgerMenu {
    get openMenu () {
        return $('div[class="bm-burger-button"]');
    }
    get selectReset () {
        return $('a[id="reset_sidebar_link"]');
    }
    get selectAllItems () {
        return $('a[id="inventory_sidebar_link"]')
    }
    async pick () {
        await this.openMenu.click();
        await this.selectReset.click();
        await this.selectAllItems.click();
    }
    get flashAlert () {
        return $('span[class="title"]');
    }
}

export default new HamburgerMenu();