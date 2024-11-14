import { $ } from '@wdio/globals';

class CartPage {
    get flashAlert () {
        return $('span[class="title"]');
    }
}

export default new CartPage();