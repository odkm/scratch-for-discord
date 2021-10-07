import Blockly from "blockly/core";


const blockName = "inv_temp";

const blockData = {
    "message0": "is invite temperory?",
    "colour": "#5BA58C",
    "output": "String",
    "tooltip": "Whether or not this invite only grants temporary membership",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["invite.temperory", Blockly.JavaScript.ORDER_NONE];
    return code;
};