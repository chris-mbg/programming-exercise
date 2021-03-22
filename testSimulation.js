
const testStdin = ["4,4,2,2,1,4,1,3,2,3,2,4,1,0", "3,3,3", "10,10,7,7,4,2,2,4,1,3,2,4,1,1,0"];
const testExpectedStdout = ["[0,1]", "[-1,-1]", "[-1,-1]"];

const runTestSimulations = () => {
  const testStdOut = []
  testStdin.forEach((stdin,i) => {
    console.log(`Test simulation ${i+1}: Input given: ${stdin}. Expected output: ${testExpectedStdout[i]}`);
    const output = runSimulation(stdin);
    testStdOut.push(output);
    console.log(`Output from test simulation ${i+1}: `, output)
  })
  return testStdOut;
}