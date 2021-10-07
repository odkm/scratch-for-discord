import * as Blockly from "blockly/core";


const blockName = "s4d_set_category";

const blockData = {
    "message0": "%{BKY_C_CATEG}",
    "args0": [
        {
            "type": "input_value",
            "name": "CHANNEL",
            "check": ["Channel"]
        },
        {
            "type": "input_value",
            "name": "CATEGORY",
            "check": "String"
        },
       {
         "type": "input_value",
         "name": "PERMS",
         "check": ["Boolean"]
       },
    ],
    "colour": "#4C97FF",
    "previousStatement": null,
    "nextStatement": null,
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const categ = Blockly.JavaScript.valueToCode(block, "CATEGORY", Blockly.JavaScript.ORDER_ATOMIC);
    const channel = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
      const perms = Blockly.JavaScript.valueToCode(block, "PERMS", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${channel}.setParent(${categ}, { lockPermissions: ${perms} })\n`
    return code;
};
