import { $ } from '@wdio/globals'
import Page from './startPage.js';

class SecurePage extends Page {
    get flashAlert () {
        return $('span[class="title"]');
    }
}

export default new SecurePage();
