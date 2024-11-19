import { $ } from '@wdio/globals';

class AddBackpack {
    get continueShopping () {
        return $('button[name="continue-shopping"]');
    }
    get addBackpackAgain () {
        return $('button[id="add-to-cart-sauce-labs-backpack"]');
    }
    get backToCart () {
        return $('div[id="shopping_cart_container"]');
    }
    async select () {
        await this.continueShopping.click();
        await this.addBackpackAgain.click();
        await this.backToCart.click();
    }
    get flashAlert () {
        return $('a[id="item_4_title_link"]');
    }
}

export default new AddBackpack();