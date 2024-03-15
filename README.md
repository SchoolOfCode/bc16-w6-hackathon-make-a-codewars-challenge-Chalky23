# Fix the Depth Checker!

## Story

The Navy of Atlantis needs your help! The depth checking software for their submarines is broken, and you need to fix it for them.

The depth sensor for each submarine is on the keel (the bottom) of the boat. The distance from bottom to top of the boat is 20m. Help the crew of the submarine understand where they are based on the input of data from the depth sensor.

The input to depthCheck is the distance in metres from the surface of the water. Output a string (lower case, no punctuation) which satisfies the following:

The crew are expecting to be told:

- "submarine is surfaced" when the top of the boat is exactly on the surface.
- "submarine is dived" when they are below the surface to a depth of 100m.
- "at periscope depth" in addition to the previous message when they are between 21 and 40m.
- "submarine is deep dived" when they are below a normal dive down to a depth of 500m.
- "depth sensor is broken" if the depth sensor tells them anything else.

## Instructions

- Clone down the repo.
- Use 'npm install'.
- Once installed, write your function in main.js to solve the problem.
- To run the tests, simply use 'npm t'.
- Happy hacking!
