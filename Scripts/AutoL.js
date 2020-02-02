module = {
    name: "AutoL",
    description: "Automatically insults the player you killed.",
    category: "Player",
    version: 1.1,
    author: "Tsikyng Kirisame, CzechHek",
    values: [onlyPlayer],
    onAttack: function (event) {
        target = event.getTargetEntity();
    },
    onUpdate: function () {
        if (target && target.isDead && (target instanceof Java.type("net.minecraft.entity.player.EntityPlayer") || !onlyPlayer.get())) {
            mc.thePlayer.sendChatMessage("@L " + target.getName());
            target = null;
        }
    }
}

var target; onlyPlayer = bool("OnlyPlayer", true);
script.import("Core.lib");