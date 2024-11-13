import { $ } from '@wdio/globals';

class Cart {
    get addItem () {
        return $('button[id="add-to-cart-sauce-labs-backpack"]');
    }
    get selectCart () {
        return $('a[class="shopping_cart_link"]');
    }
    async select () {
        await this.addItem.click();
        await this.selectCart.click();
    }
}

export default new Cart();