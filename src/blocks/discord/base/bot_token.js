import * as Blockly from "blockly/core";

const blockName = "s4d_bot_token";

const blockData = {
    "message0": "bot token",
    "colour": "#5b67a5",
    "tooltip": "",
    "output": "String",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["s4d.client.token", Blockly.JavaScript.ORDER_NONE];
    return code;
};
