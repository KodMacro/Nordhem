import { SheetHelper } from "./sheet-helper.js";

export default class NHPlayerSheet extends ActorSheet{
    get template(){
        return `systems/nordhem/templates/sheets/player-sheet.html`;

    }
    getData() {
        const context = super.getData();
        SheetHelper.getAttributeData(context.data);
        context.systemData = context.data.data;
        return context
    }
}
