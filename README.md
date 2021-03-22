# Programming exercise

The exercise is written in client-side JavaScript and the browser console is used.

### Assumptions made
- It is assumed that the `stdin` is given in one string with both header and commands to initiate the simulation.
- No negative integers are accepted as input.
- It is not assumed that the header/commands given as input always are correct, but it is assumed that the critera of comma-separated input is met.
- If the header or a command is invalid, the simulation is stopped and `[-1,-1]` is returned.
- If the object has fallen off the table, all following commands are ignored and `[-1,-1]` is returned.

### How to run the simulation
- In the browser console, call the `runSimulation` function with a string of commaseparated integers as input, i.e. `runSimulation('4,4,2,2,1,4,1,3,2,3,2,4,1,0​')`.
- Test cases are included in `testSimulation.js` and can be run by calling `runTestSimulations()`.
