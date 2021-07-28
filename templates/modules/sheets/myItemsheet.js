export default class FSItemSheet extends ItemSheet{
    get template(){
        return `systems/mySystem/templates/sheets/${this.item.data.type}-sheet.html`;

    }
}
