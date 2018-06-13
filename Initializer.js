var fs = require('fs');

var configPath = "./config.json";

console.log("Initiating creation process.");

if (!fs.existsSync(configPath)) { // config.json
    fs.writeFile(
        './config.json',
        '{\n  "token":"",\n  "prefix":""\n}',
        function (configLog) {
        console.log('+ "./config.json" was created.');
    });
}
