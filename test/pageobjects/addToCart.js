import { $ } from '@wdio/globals';

class Cart {
    get addBackpack () {
        return $('button[id="add-to-cart-sauce-labs-backpack"]');
    }
    get addBike () {
        return $('button[id="add-to-cart-sauce-labs-bike-light"]');
    }
    get addShirt () {
        return $('button[id="add-to-cart-sauce-labs-bolt-t-shirt"]');
    }
    get addJacket () {
        return $('button[id="add-to-cart-sauce-labs-fleece-jacket"]');
    }
    get addOnesie () {
        return $('button[id="add-to-cart-sauce-labs-onesie"]');
    }
    get addRedShirt () {
        return $('button[id="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    }
    get selectCart () {
        return $('div[id="shopping_cart_container"]');
    }
    async select () {
        await this.addBackpack.click();
        await this.addBike.click();
        await this.addShirt.click();
        await this.addJacket.click();
        await this.addOnesie.click();
        await this.addRedShirt.click();
        await this.selectCart.click();
    }
    get flashAlert1 () {
        return $('a[id="item_4_title_link"]');
    }
    get flashAlert2 () {
        return $('a[id="item_0_title_link"]');
    }
    get flashAlert3 () {
        return $('a[id="item_1_title_link"]');
    }
    get flashAlert4 () {
        return $('a[id="item_5_title_link"]');
    }
    get flashAlert5 () {
        return $('a[id="item_2_title_link"]');
    }
    get flashAlert6 () {
        return $('a[id="item_3_title_link"]');
    }
}

export default new Cart();