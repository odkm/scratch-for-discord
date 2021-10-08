import Blockly from "blockly/core";


const blockName = "s4d_type_chnl";

const blockData = {
    "message0": "typing channel",
    "colour": "#5BA58C",
    "output": "Channel",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["(typing.channel)", Blockly.JavaScript.ORDER_NONE];
    return code;
};