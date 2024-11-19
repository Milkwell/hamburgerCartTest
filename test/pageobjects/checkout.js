import { $ } from '@wdio/globals';

class CheckOut {
    get selectCheckout () {
        return $('button[id="checkout"]');
    }
    get inputFirstName () {
        return $('#first-name');
    }
    get inputLastName () {
        return $('#last-name');
    }
    get inputCode () {
        return $('#postal-code');
    }
    get selectContinue () {
        return $('input[id="continue"]');
    }
    get selectFinish () {
        return $('button[id="finish"]');
    }
    async select (firstname, lastname, code) {
        await this.selectCheckout.click();
        await this.inputFirstName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputCode.setValue(code);
        await this.selectContinue.click();
        await this.selectFinish.click();
    }
    get flashAlert () {
        return $('h2[class="complete-header"]');
    }
}

export default new CheckOut();