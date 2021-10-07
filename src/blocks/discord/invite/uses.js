import Blockly from "blockly/core";


const blockName = "inv_uses";

const blockData = {
    "message0": "invite uses",
    "colour": "#5BA58C",
    "output": "Number",
    "tooltip": "In invite create/delete",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["invite.uses", Blockly.JavaScript.ORDER_NONE];
    return code;
};