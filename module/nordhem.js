import NHItemSheet from "./sheets/item-sheet.js";
Hooks.once("init", function(){
    console.log("test | Initializing Nordhem");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("nordhem", NHItemSheet, {makeDefault: true});
});
