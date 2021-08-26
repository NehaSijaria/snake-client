
const { connect } = require('./client')

console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", key => handleUserInput(key));
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
// \u0003 maps to ctrl+c input
if (key === '\u0003') {
  process.exit();
}
};