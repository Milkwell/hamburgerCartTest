import { $ } from '@wdio/globals';

class AddRemove {
    get backToShop () {
        return $('button[id="add-to-cart-sauce-labs-backpack"]');
    }
    get addBike () {
        return $('a[class="shopping_cart_link"]');
    }
    get toCart () {
        return $('');
    }
    async select () {
        await this.addItem.click();
        await this.selectCart.click();
    }
}

export default AddRemove();