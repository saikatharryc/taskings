var mongoose = require('mongoose');
const config = require("./config");

var connection = mongoose.connection;

connection
  .on('error', (err) => {
    console.log({ "hiiii": err });
    // Do nothing for now
  })
  .on('disconnected', reConnect)
  .once('open', listen)

function listen() {
  console.log('Data Base Connected')
  console.log(connection.readyState)
};

function connect() {
  const options = { server: { socketOptions: { keepAlive: 1 } } }
  const connection = mongoose.connect(config.db.uri, options)

  return connection.connection
}

function reConnect() {
  if (mongoose.connection.readyState == 0) {
    console.log(mongoose.connection.readyState)
    // connect();
  } else {
    // DO nothing. 
    console.log('I am already Connected')
  }
}

connect();
module.exports = exports = mongoose;