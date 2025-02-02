import Blockly from "blockly/core";

const blockName = "s4d_inv_date";

const blockData = {
    "message0": "%1 of invite",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "Create Date",
                    "CD"
                ],
                [
                    "Expire Date",
                    "ED"
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
    if(searchType === "CD"){
        const code = ["invite.createdAt", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "ED"){
        const code = ["invite.expiresAt", Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};

