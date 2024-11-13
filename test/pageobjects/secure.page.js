import { $ } from '@wdio/globals'
import Page from './page.js';

class SecurePage extends Page {

    get flashAlert () {
        return $('span[class="title"]');
    }
}

export default new SecurePage();
