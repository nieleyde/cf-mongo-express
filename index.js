var fs = require('fs');

// copy mongo express config into mongo express modile
fs.createReadStream('./config.default.js').pipe(fs.createWriteStream('./node_modules/mongo-express/config.default.js'));

// start mongo-express
var cmd = "node ./node_modules/mongo-express/app.js";

var spawnit = require('child_process');
var ls = spawnit.spawn('node',['./node_modules/mongo-express/app.js']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});

ls.on('error', (err) => {
    console.log(err);
});

