const notes = require('./notes')

const chalk = require('chalk')

const yargs = require('yargs')
const { describe } = require('yargs')


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
    handler:function(argv){
        console.log('Title:'+ argv.title)
        console.log('Body:'+argv.body)
    }
})

// Create remove command

yargs.command(
    {
        command: 'remove',
        description: 'Remove a new note',
        handler: function(){
            console.log('Removing the note')
        }

    }
)

yargs.command(
    {
        command: 'list',
        description: 'list the notes',
        handler: function(){
            console.log('Listing the notes!')
        }
    }
)

yargs.command({
    command: 'read',
    description: 'read the note',
    handler: function(){
        console.log('Reading the notes!')
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

