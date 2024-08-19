const net = require("net");
const fs = require("fs");
const createAircraftPosition = require("./commands/create-position");
const createAircraft = require("./commands/create-aircraft");
const startMission = require("./commands/start-mission");

const SERVER_PORT = 8087;
const SERVER_HOST = "localhost";

const client = net.connect({
  host: SERVER_HOST,
  port: SERVER_PORT,
});

client.on("data", (data) => {
  //KLV Receive
  console.log(data.toString());
});

const foundCommand = process.argv.filter((el) => el.includes("FN"))[0];
const command = foundCommand.split("=")[1];

switch (command) {
  case "createAircraft":
    // Insert an aircraft on ATLAS
    createAircraft(client);
    break;
  case "startMission":
    // Must be called after the createAircraft, note that the body is the same
    startMission(client);
    break;
  case "createAircraftPosition":
    //  Contains a loop that will dispatch some positions to the specified TCP server
    createAircraftPosition(client);
    break;
  default:
    throw new Error("Command not found");
}
