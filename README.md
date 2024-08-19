# TCP Messages
## Repository containing samples and the flow

## Features

- Create an aircraft inside ATLAS
- Start a mission and receive video
- Update aircraft positions based on SpyC KLVs

## Installation

Requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start commanding.
```
npm install
```
Check the available commands 
```
createAircraft(client);
startMission(client);
createAircraftPosition(client);
```

You must pass the flag on the commands (example)
We currently have 3 commands:
 - createAircraft
 - startMission
 - createAircraftPosition
```
node commands.js FN=createAircraft
```

### You can also receive ATLAS KLVs through the TCP Server.

The TCP server will be constantly emiting ordered KLVs and each KLV has the video URL (that would probably be the same as the previous KLVs).

```
node serverListen.js
```
