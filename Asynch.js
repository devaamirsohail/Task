const { exec } = require("child_process");

const jsonFilePath = "./config.json";

function secondProgram(filePath) {
  const config = require(filePath);
  let instructions = config.run_these;
  instructions.map(path => {
    let childProcess = exec(`node ${path.program_path}`, { detached: true });
    console.log(`started ${path.program_path}`, childProcess.pid);
    setTimeout(() => {
      console.log(`killed ${path.program_path}`, childProcess.pid);
      childProcess.kill("SIGINT");
    }, path.max_run_time_secs * 1000);
  });
}

secondProgram(jsonFilePath);
