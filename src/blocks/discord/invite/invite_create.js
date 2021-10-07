import * as Blockly from "blockly";

const blockName = "s4d_on_cinvite";

const blockData = {
    "message0": "%{BKY_ON_Invite_C} %1 %2",
    "colour": "#F5AB1A",
    "args0": [
        {
            "type": "input_dummy"
        },
        {
            "type": "input_statement",
            "name": "STATEMENTS"
        }
    ]
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function(block) {
    const statements = Blockly.JavaScript.statementToCode(block, "STATEMENTS");
    const code = `s4d.client.on('inviteCreate', async (invite) => {\n${statements}\n});\n`;
    return code;
};
