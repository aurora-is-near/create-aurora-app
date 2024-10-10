#!/usr/bin/env node
var shell = require('shelljs');
const { program } = require('commander');
var chalk = require('chalk');

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}

var node_version_string = shell.exec('node --version', {silent:true}).stdout;
var node_version =  parseInt(node_version_string.substring(1, 3));

if (node_version < 18) {
    shell.echo('Sorry, this script requires node >=18');
    shell.exit(1);
}

program
  .name('create-aurora-app')
  .description('Welcome to Aurora!\nLet\'s create your first app.\nPlease choose a type of an app you want to have below in Commands\n')
  .version('1.0.0');

program.command('dapp')
.description('Create a dApp on Aurora')
.argument('<project-name>', 'Project name')
.action((project) => {
    shell.mkdir(project);
    shell.cd(project);
    shell.exec(`git clone git@github.com:aurora-is-near/aurora-dapp-example.git .`);
    
    console.log(chalk.green("\nWe have installed the project!\n\nNow, please read more instructions here:"));
    console.log(chalk.blue("https://doc.aurora.dev/build-a-dapp/frontend/connect-wallet\n"));

    console.log(chalk.green("To run your project please install pnpm by following the instructions:"));
    console.log(chalk.blue("https://pnpm.io/installation"));
    console.log(chalk.green("and after that run: " + chalk.blue("pnpm install && pnpm run dev")));
});

program.command('contract')
.description('Create and deploy smart-contracts on Aurora')
.argument('<project-name>', 'Project name')
.action((project) => {
    shell.mkdir(project);
    shell.cd(project);
    shell.exec(`git clone git@github.com:aurora-is-near/aurora-examples.git .`);
    console.log(chalk.green("\nWe have installed the project!\n\nYou can read more details about the smart contracts inside this project and how to deploy them here:"));
    console.log(chalk.blue("https://doc.aurora.dev/build-a-dapp/contracts/counter\n"));
    console.log(chalk.green("To run your project please make sure that `yarn` is installed:"));
    console.log(chalk.blue("https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable"));
});

program.parse();