/* The Navy of Atlantis needs your help!
The depth checking software for their submarines is broken, and you need to fix it for them by writing the function depthCheck.

The depth sensor for each submarine is on the keel (the bottom) of the boat. The distance from bottom to top of the boat is 20m.
Help the crew of the submarine understand where they are based on the input of data from the depth sensor.

The input to depthCheck is the distance in metres from the surface of the water.
Return a string output to the crew which satisfies the following:

The crew are expecting to be told:
"submarine is surfaced" when the top of the boat is exactly on the surface.
"submarine is dived" when they are below the surface to a depth of 100m.
"at periscope depth" in addition to the previous message when they are between 21 and 40m.
"submarine is deep dived" when they are below a normal dive down to a depth of 500m.
"depth sensor is broken" if the depth sensor tells them anything else. */

export default function depthCheck(metres) {
  if (metres === 20) {
    return 'submarine is surfaced';
  }
  if (metres > 20 && metres <= 40) {
    return 'submarine is dived at periscope depth';
  }
  if (metres > 40 && metres <= 100) {
    return 'submarine is dived';
  }
  if (metres > 100 && metres <= 500) {
    return 'submarine is deep dived';
  } else return 'depth sensor is broken';
}
