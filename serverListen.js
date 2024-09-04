const net = require("net");
const fs = require("fs");
const createAircraftPosition = require("./commands/create-position");
const createAircraft = require("./commands/create-aircraft");
const startMission = require("./commands/start-mission");

const express = require("express");

const SERVER_PORT = 8087;
const SERVER_HOST = "localhost";

const app = express();

const clients = [];

const server = net.createServer(
  {
    host: SERVER_HOST,
    port: SERVER_PORT,
  },
  (socket) => {
    socket.on("data", (data) => {
      console.log(data.toString());
      // fs.writeFileSync(`./receivedKlvs/${Date.now()}-klv.xml`, data.toString());
    });

    socket.on("error", () => {
      console.log("error ocurred");
    });
  }
);

server.on("close", () => {
  console.log("client disconnected");
});

server.on("error", (err) => {
  console.log("error");
});

server.on("connection", (socket) => {
  console.log("client connected");
  clients.push(socket);
});

app.post("/createAircraft", (req, res) => {
  clients.forEach((client) => {
    console.log("emitting for client");
    createAircraft(client);
  });

  res.send(200);
});

app.post("/createPosition", (req, res) => {
  clients.forEach((client) => {
    console.log("emitting for client");
    createAircraftPosition(client);
  });

  res.send(200);
});

server.listen(SERVER_PORT, ()=>{
  console.log("tcp up");
})

const httpServer = app.listen(3001, () => {
  console.log("server up");
});
