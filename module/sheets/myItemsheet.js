export default class FSItemSheet extends ItemSheet{
    get template(){
        return `systems/nordhem/templates/sheets/${this.item.data.type}-sheet.html`;

    }
}
