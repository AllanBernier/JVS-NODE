var args = process.argv.slice(2);

if (args.length >= 1){
  const { execFile } = require('child_process');
  const child = execFile(args[0], ['--version'], (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stdout);
  });   
}

