import Blockly from "blockly/core";

const blockName = "s4d_emoji_delete";

const blockData = {
    "message0": "%{BKY_EMOJID}",
    "args0": [
              {
            "type": "input_value",
            "name": "SERVER",
            "check": [ "Server" ]
        },
        {
            "type": "input_value",
            "name": "ID",
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
    const id = Blockly.JavaScript.valueToCode(block, "ID", Blockly.JavaScript.ORDER_ATOMIC);
    const guild = Blockly.JavaScript.valueToCode(block, "SERVER", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${guild}.emojis.fetch(${id}).then(emoji => emoji.delete())`
    return code;
};