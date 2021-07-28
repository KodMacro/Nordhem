import FSItemSheet from "./module/sheets/myItemSheet.js";
Hooks.once("init", function(){
    console.log("test | Initializing Nordhem");

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("Nordhem", myItemSheet, {makeDefault: true});
});
