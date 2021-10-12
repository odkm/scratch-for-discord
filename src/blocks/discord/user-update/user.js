import Blockly from "blockly/core";

const blockName = "s4d_newuser";

const blockData = {
    "message0": "User",
    "colour": "#187795",
    "output": "Member",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["newUser", Blockly.JavaScript.ORDER_NONE];
    return code;
};

