import Blockly from "blockly/core";

const blockName = "s4d_thread_delete";

const blockData = {
    "message0": "%{BKY_THREADD}",
    "args0": [
              {
            "type": "input_value",
            "name": "CHANNEL",
            "check": [ "Channel" ]
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
    const chnl = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const code = `${chnl}.threads.fetch(${id}).then(channel => channel.delete())`
    return code;
};