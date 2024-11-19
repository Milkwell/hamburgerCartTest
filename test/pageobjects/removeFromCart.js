import { $ } from '@wdio/globals';

class ItemRemove {
    get removeJacket () {
        return $('button[name="remove-sauce-labs-fleece-jacket"]');
    }
    get removeBackpack () {
        return $('button[name="remove-sauce-labs-backpack"]');
    }
    async select () {
        await this.removeJacket.click();
        await this.removeBackpack.click();
    }
    get flashAlert () {
        return $('a[id="item_0_title_link"]');
    }
}

export default new ItemRemove();