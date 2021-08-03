import { SheetHelper } from "./sheet-helper.js";

export default class NHItemSheet extends ItemSheet{
    get template(){
        return `systems/nordhem/templates/sheets/${this.item.data.type}-sheet.html`;

    }
    getData() {
        const context = super.getData();
        SheetHelper.getAttributeData(context.data);
        context.systemData = context.data.data;
        return context
    }
}
