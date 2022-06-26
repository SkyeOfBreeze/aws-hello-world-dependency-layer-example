const fs = require('fs-extra')
const cp = require('child_process');
cp.execSync('npm install') //ensures up to date
fs.copySync(`${__dirname}/package.json`, `${__dirname}/.aws-sam/build/DependencyLayer/nodejs/package.json`)
fs.copySync(`${__dirname}/node_modules`, `${__dirname}/.aws-sam/build/DependencyLayer/nodejs/node_modules`)
