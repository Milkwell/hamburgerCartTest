import { $ } from '@wdio/globals'

class LogoutPage {
    get flashAlert () {
        return $('div[class="login_logo"]');
    }
}

export default new LogoutPage();