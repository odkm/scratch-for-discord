import Blockly from "blockly/core";

const blockName = "s4d_thread_create";

const blockData = {
    "message0": "%{BKY_THREADC}",
    "args0": [
              {
            "type": "input_value",
            "name": "CHANNEL",
            "check": [ "Channel" ]
        },
        {
            "type": "input_value",
            "name": "NAME",
            "check": [ "String" ]
        },
              {
            "type": "field_dropdown",
            "name": "SEARCH",
            "options": [
                [
                    "1 hour",
                    "60"
                ],
                [
                    "24 hours",
                    "1440"
                ],
              [
                "3 days",
                "4320"
              ],
              [
                "1 week",
                "10080"
              ]
            ]
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
    const name = Blockly.JavaScript.valueToCode(block, "NAME", Blockly.JavaScript.ORDER_ATOMIC);
    const chnl = Blockly.JavaScript.valueToCode(block, "CHANNEL", Blockly.JavaScript.ORDER_ATOMIC);
    const searchType = block.getFieldValue("SEARCH");
    const code = `${chnl}.threads
    .create({
    name: ${name},
    autoArchiveDuration: ${searchType} })`
        return code;
  
};