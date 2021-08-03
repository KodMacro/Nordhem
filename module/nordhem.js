import NHItemSheet from "./sheets/item-sheet.js";
import NHPlayerSheet from "./sheets/player-sheet.js";
Hooks.once("init", function(){
    console.log("test | Initializing Nordhem");

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("nordhem", NHPlayerSheet, { makeDefault: true });
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("nordhem", NHItemSheet, {makeDefault: true});
});
