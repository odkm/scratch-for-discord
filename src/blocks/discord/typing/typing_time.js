import Blockly from "blockly/core";

const blockName = "s4d_type_time";

const blockData = {
    "message0": "%1 of typing",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "Start Timestamp",
                    "TT"
                ],
                [
                    "Start Date",
                    "TA"
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
    if(searchType === "TA"){
        const code = ["typing.startedAt", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "TT"){
        const code = ["typing.startedTimestamp", Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};

