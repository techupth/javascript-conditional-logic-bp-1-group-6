//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

lightBulbStatus === "On" 
? "On" 
: lightBulbStatus === "Off"
? "Off"
: console.log("Please choose the correct input (On/Off)");