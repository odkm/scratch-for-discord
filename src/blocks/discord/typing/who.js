import Blockly from "blockly/core";

const blockName = "s4d_type_who";

const blockData = {
    "message0": "%1 who started typing",
    "args0": [
        {
            "type": "field_dropdown",
            "name": "SEARCH_TYPE",
            "options": [
                [
                    "Member",
                    "MM"
                ],
                [
                    "User",
                    "UU"
                ]
            ]
        }
    ],
    "output": "Member",
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
    if(searchType === "MM"){
        const code = ["typing.member", Blockly.JavaScript.ORDER_NONE];
        return code;
    } else if(searchType === "UU"){
        const code = ["typing.user", Blockly.JavaScript.ORDER_NONE];
        return code;
    }
};

