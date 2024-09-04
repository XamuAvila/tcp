const createAircraftPosition = (client) => {
  let count = 0;
  let lat = 39.54877;
  let long = -9.540605;
  let auxDate = Date.now() * 1000;
  while (count <= 1000) {
    // Create 1000 positions
    console.log("-------------");
    console.log(auxDate);
    console.log(lat);
    console.log(long);
    const text = `<event how="m-g-i-g-o" stale="2024-08-14T14:20:49.310Z" start="2024-08-14T14:20:34.310Z"
            time="2024-08-14T14:20:34.310Z" type="a-f-A-M-F-Q-r" uid="uas_id" version="2.0">
            <detail action="PUSH_AIRCRAFT_POSITION">
                <thalesKLV>
                    <latitude>${lat}</latitude>
                    <longitude>${long}</longitude>
                    <altitude>650</altitude>
                    <speedOverGround>25</speedOverGround>
                    <yaw>56</yaw>
                    <timestamp>${auxDate}</timestamp>
                </thalesKLV>
                <point lat="43.92141118828272" lon="8.846675096473973" hae="518.3703364614328" ce="9999999"
        le="9999999" />
            </detail>
        </event>`;
    client.write(text);
    lat += 0.001;
    long += 0.001;
    auxDate += 1000000; // A position must have at least 1 sec by difference from the last
    count++;
    console.log("-------------");
  }
};

module.exports = createAircraftPosition;
