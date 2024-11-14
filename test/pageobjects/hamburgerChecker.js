import { $ } from '@wdio/globals'

class ShopPage {
    get flashAlert () {
        return $('span[class="title"]');
    }
}

export default new ShopPage();