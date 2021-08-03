import { ItemSheetHelper } from "./sheet-helper.js";

export default class NHPlayerSheet extends ActorSheet{
    get template(){
        return `systems/nordhem/templates/sheets/${this.actor.data.type}-sheet.html`;

    }
    getData() {
        const context = super.getData();
        ItemSheetHelper.getAttributeData(context.data);
        context.systemData = context.data.data;
        return context
    }
}
