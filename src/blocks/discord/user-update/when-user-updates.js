import * as Blockly from "blockly";

const blockName = "when_user_update";

const blockData = {
    "message0": "When user is updated %1 %2",
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
    const code = `s4d.client.on('userUpdate', (oldUser, newUser) => {\n${statements}\n});\n`;
    return code;
};