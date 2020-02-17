const { exec, spawn } = require("child_process");

const jsonFilePath = "./config.json";

function runProgram(programs, index) {
  if (programs[index]) {
    const curentProgram = programs[index];
    const childProcess = exec(`node ${curentProgram.program_path}`, {
      detached: true
    });
    console.log(`started ${curentProgram.program_path}`, childProcess.pid);
    setTimeout(() => {
      console.log(`killed ${curentProgram.program_path}`, childProcess.pid);
      childProcess.kill("SIGINT");
      runProgram(programs, index + 1);
    }, curentProgram.max_run_time_secs * 1000);
  }
}

const config = require(jsonFilePath);
let instructions = config.run_these;
runProgram(instructions, 0);
