var rl = require("readline").createInterface(process.stdin);
var inputList = [];

rl.on("line", (line) => {
    inputList.push(line);
}).on("close", () => {
    let inputNumber = inputList[0];
    let outputStr;
    for (let line = 1; line <= inputNumber; line++) {
        outputStr = "";
        for (let seq = 0; seq < line; seq++) {
            outputStr = outputStr.concat("", "*");
        }
        console.log(outputStr);
    }
});

// 8
//JS 
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********