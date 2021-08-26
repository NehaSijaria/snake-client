// establishes a connection with the game server

const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
  });
  conn.on("connect", () => {
    // Send Snake name to server
    conn.write("Name: NSS");
    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log('Server says: ', data);

  });
  conn.on('end', () =>{
    console.log('All the sssnakes are belong to usssss')
    process.exit()
  });
  return conn;
};


module.exports = { connect };