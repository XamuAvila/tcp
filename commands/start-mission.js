const { PUSH_AIRCRAFT, SENSOR_CONFIG } = require("../constants/constants");
const { addSeconds, getDateNano } = require("../utils/time-utils");

const startMission = (client) => {
    //Must be the same message as the created aircraft after importing the aircraft on mission
    const now = new Date();
    client.write(`<event how="m-g-i-g-o" stale="${addSeconds(now, 10).toISOString()}" start="${now.toISOString()}"
          time="${now.toISOString()}" type="a-f-G-M-F-Q-r" uid="uas_id" version="2.0">
          <detail action="${PUSH_AIRCRAFT}">
              <aircraftCreate>
                  <additionalInformation>Mission related to AIS Observations around Peniche Coast</additionalInformation>
                  <initialLatitude>39.34877</initialLatitude>
                  <initialLongitude>-9.320605</initialLongitude>
                  <operator>Thales</operator>
                  <platformDesignation>AR5-Tester REPMUS4</platformDesignation>
                  <platformUuid>G-TEKR-Tester REPMUS4</platformUuid>
                  ${SENSOR_CONFIG}
                  <timestamp>${getDateNano()}</timestamp>
              </aircraftCreate>
          </detail>
      </event>
      `);
  }

  module.exports = startMission
