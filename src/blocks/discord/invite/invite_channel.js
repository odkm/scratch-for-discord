import Blockly from "blockly/core";


const blockName = "s4d_inv_chnl";

const blockData = {
    "message0": "invite channel",
    "colour": "#5BA58C",
    "output": "Channel",
    "tooltip": "In invite create/delete",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    const code = ["(invite.channel)", Blockly.JavaScript.ORDER_NONE];
    return code;
};