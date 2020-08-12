const notes = require('./notes')

const chalk = require('chalk')

const yargs = require('yargs')
const { describe } = require('yargs')
const { argv } = require('process')


// const command = process.argv[2]

//Customize yargs version
yargs.version('1.1.0')





// Create add command
yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
          title: {
              describe: 'Note title',
              demandOption: true,
              type: 'string'
          },
          body: {
              describe:'Get me body',
              demandOption:true,
              type: 'string',

          }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

// Create remove command

yargs.command(
    {
        command: 'remove',
        description: 'Remove a new note',
        builder: {
            title:{
                describe:'Define title',
                demandOption:true,
                type:'string'
            }
        },
        handler(argv){
            notes.removeNotes(argv.title)
        }

    }
)

yargs.command(
    {
        command: 'list',
        description: 'list the notes',
        handler(){
            notes.listNotes()
        }
    }
)

yargs.command({
    command: 'read',
    description: 'read the note',
    builder: {
        title:{
            describe:'Note to Read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readList(argv.title)
    }
})

yargs.parse()
// console.log(yargs.argv)
// if(command === 'add'){
//     console.log('Adding note!')
// } 

// else if(command === 'remove'){
//     console.log('Removing note!')
// }

