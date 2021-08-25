const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log('HI. THIS IS MY SNAKE GAME WITH LIGHTHOUSE LABS');
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

console.log("Connecting ...");
connect();


