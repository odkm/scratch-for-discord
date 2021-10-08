import Blockly from "blockly/core";


const blockName = "s4d_type_guild";

const blockData = {
    "message0": "typing server",
    "colour": "#5BA58C",
    "output": "Server",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["(typing.guild)", Blockly.JavaScript.ORDER_NONE];
    return code;
};