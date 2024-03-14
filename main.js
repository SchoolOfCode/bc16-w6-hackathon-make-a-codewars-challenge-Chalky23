// The Navy of Atlantis needs your help!
// The depth checking software for their submarines is broken, and you need to fix it for them by writing the function depthCheck.

// The depth sensor for each submarine is on the keel (the bottom) of the boat. The boat itself is 20m high.
// Help the crew of the submarine understand where they are based on the input of data from the depth sensor.

// The input to depthCheck is the distance in metres from the surface of the water.
// Return a string output to the crew which satisfies the following:

// MAKE DECISION ON WHICH OF THE BELOW. HELP FROM TEAM PLEASE! (I prefer second.)

// At 20m, tell the crew "submarine is surfaced".
// Between 21m and 100m, tell the crew "submarine is dived".
// If they are between 21m and 40m, you should also tell them they are "at periscope depth".
// Below 100m until 500m, tell the crew "submarine is deep dived".
// If the input doesn't satisfy these conditions, tell the crew "depth sensor is broken!".

// The crew are expecting to be told the following:
// "submarine is surfaced" when the top of the boat is exactly on the surface.
// "submarine is dived" when they are below the surface to a depth of 100m.
// "at periscope depth" in addition to the previous message when they are between 21 and 40m.
// "submarine is deep dived" when they are below a normal dive down to a depth of 500m.
// "depth sensor is broken" if the depth sensor tells them anything else.

export default function depthCheck() {
  // code here
}
