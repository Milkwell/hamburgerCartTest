import { $ } from '@wdio/globals'

class AboutPage {
    get flashAlert () {
        return $('div[class="MuiBox-root css-lwb5go"]');
    }
}

export default new AboutPage();