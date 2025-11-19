const { spawn } = require('child_process');
const path = require('path');

const npmProcess = spawn('npm', ['run', 'start'], {
  cwd: path.resolve(__dirname),
  stdio: 'inherit', // so you can see logs
  shell: true       // important on Windows
});

npmProcess.on('close', (code) => {
  console.log(`npm run start exited with code ${code}`);
});
