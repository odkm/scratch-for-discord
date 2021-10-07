import Blockly from "blockly/core";

const blockName = "s4d_inv_max";

const blockData = {
    "message0": "%1 of invite",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "Max Age",
                    "MA"
                ],
                [
                    "Max Uses",
                    "MU"
                ]
            ]
        }
    ],
    "output": "Date",
    "colour": "#5BA58C",
    "tooltip": "",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const searchType = block.getFieldValue("SEARCH_TYPE");
    if(searchType === "MA"){
        const code = ["invite.maxAge", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "MU"){
        const code = ["invite.maxUses", Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};

