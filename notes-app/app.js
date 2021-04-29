
//we need fs modules and we need to require it

// const fs = require('fs')
//
//
// //if the file does not exist, it will be created
// fs.writeFileSync('notes.txt', 'This file was created by Node.js!');
// fs.appendFileSync('notes.txt', ' data to append')

// const name = require('./utils.js');

//all the required files has their own scope, thats why we need exporting
// console.log(name);

const add = require('./utils');

const sum = add(4,-2);

console.log(sum);

const validator = require('validator');


const getNotes = require('./notes');

//console.log(getNotes());

console.log(validator.isEmail('g@gmail.com'));

const chalk = require('chalk');

console.log(chalk.red('Hello') + ' World' + chalk.red('!'));
console.log("change")

console.log(process.argv);// this gets the arguments from the command line
console.log(process.argv[2]);

const command = process.argv[2];

const notes = require('./notes');



if(command === 'add'){
    console.log('Adding note!');
}

const yargs = require('yargs');
console.log(yargs.argv,"yargs");

//we would like to add,remove,read, list notes

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption:true, //title is required
            type:'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler (argv) {
        notes.addNote(argv.title,argv.body)
        console.log('Title:' + argv.title)
        console.log('Body' + argv.body)
    }
});

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler () {
        console.log('removing the note');
    }
});

yargs.command({
    command: 'list',
    describe: 'listing notes',
    handler: function () {
        console.log('removing the note');
    }
});

yargs.command({
    command: 'read',
    describe: 'reading a note',
    handler: function () {
        console.log('removing the note');
    }
});

yargs.command({
    command: 'remove',
    describe: 'delete a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption:true, //title is required
            type:'string'
        }
    },
    handler:function (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler:function () {
        notes.listNotes()
    }
});

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption:true, //title is required
            type:'string'
        }
    },
    handler:function (argv) {
        notes.readNote(argv.title)
    }
});

yargs.parse()

//we need node app.js add --title="Buy" --body="the body" command to add a note
