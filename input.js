const { connect } = require("./client");
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", key => handleUserInput(key));
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
// \u0003 maps to ctrl+c input
// console.log('key pressed');
if (key === '\u0003') {
  process.exit();
}
if (key === 'w') {
  console.log('w:' , key);
  connection.write("Move: up");
}
if (key === 'a') {
  console.log('a:' , key);
  connection.write("Move: left");
}
if (key === 's') {
  console.log('s:' , key);
  connection.write("Move: down");
}
if (key === 'd') {
  console.log('d:' , key);
  connection.write("Move: right");
}
};

module.exports = { setupInput }