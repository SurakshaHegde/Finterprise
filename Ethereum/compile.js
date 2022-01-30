const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');            //fs is file system, fs extra has extra methds to delete and add folder

const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);      //removes existing build folder

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;                   //complies contract

fs.ensureDirSync(buildPath);    //creates  build folder

// console.log(output);

for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]          // contracts will be in key value pairs in output. iterates and writes through all the contracts
    );
}

