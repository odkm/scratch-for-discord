import Blockly from "blockly/core";

const blockName = "s4d_emoji_create";

const blockData = {
    "message0": "%{BKY_EMOJIS}",
    "args0": [
              {
            "type": "input_value",
            "name": "IN SERVER",
            "check": [ "Server" ]
        },
        {
            "type": "input_value",
            "name": "LINK",
            "check": [ "String" ]
        },
        {
            "type": "input_value",
            "name": "WITH NAME",
            "check": [ "String" ]
        }
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
    const url = Blockly.JavaScript.valueToCode(block, "LINK", Blockly.JavaScript.ORDER_ATOMIC);
    const name = Blockly.JavaScript.valueToCode(block, "WITH NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const guild = Blockly.JavaScript.valueToCode(block, "IN SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${guild}.emojis.create(${url}, ${name})`
    return code;
};