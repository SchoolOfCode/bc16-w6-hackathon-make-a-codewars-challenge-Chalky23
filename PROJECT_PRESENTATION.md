# Fix the Depth Checker!

## Story

The Navy of Atlantis needs your help! The depth checking software for their submarines is broken, and you need to fix it for them.

The depth sensor for each submarine is on the keel (the bottom) of the boat. The distance from bottom to top of the boat is 20m. Help the crew of the submarine understand where they are based on the input of data from the depth sensor.

The input to depthCheck is the distance in metres from the surface of the water. Output a string which satisfies the following:

The crew are expecting to be told:

- "submarine is surfaced" when the top of the boat is exactly on the surface.
- "submarine is dived" when they are below the surface to a depth of 100m.
- "at periscope depth" in addition to the previous message when they are between 21 and 40m.
- "submarine is deep dived" when they are below a normal dive down to a depth of 500m.
- "depth sensor is broken" if the depth sensor tells them anything else.

## Plan

THURSDAY

- Install the dependencies/dev:

-- vitest
-- package.json
-- type of module
-- script for testing
-- set up import and exports

- come up with theme of problem.
- disney ideate how to develop this.
- could we incorporate TDD to help plan the way forward?
- create a few mvps on way to solution.
- complete plan for how to achieve those mvps individually.

FRIDAY

- set up skeleton test.
- review plan for mvps.
- ensure tests cover boundary value analysis.
- put this into practice.
- hold regular checkpoints with the team to check on progress.
- commit each hour or after a relevant feature/test has been implemented.

THEME/PROBLEM

- Submarine based
- Simple logic for working out where the boat is based on depth data.
- depth sensor is located on the keel (the bottom)
- height of the submarine is 20m
- return the location of the boat using pre-defined outcomes
- e.g. at 20m, "on the surface", at 100m, "underwater"
- input should never be above 20m, as this implies the boat is out of the water.

MVP 1

- inputs are 20m - 100m.
- if input is 20, the test should return "submarine is surfaced"
- if input is 21-100, the test should return "submarine is underwater"

MVP 2

- inputs are now 0-100m
- if input is less than 20, test should return "depth sensor is broken!"
- if input is 20, the test should return "submarine is surfaced"
- if input is 21-100, the test should return "submarine is underwater"

MVP 3

- inputs are now anything
- if input is outside of these parameters, should return an error message "depth sensor is broken!"
- if input is 20, the test should return "submarine is surfaced"
- if input is 21-40, the test should return "submarine is at periscope depth"
- if input is 41-100, the test should return "submarine is underwater"
- if input is 101-500, test should return "submarine is deep underwater"
