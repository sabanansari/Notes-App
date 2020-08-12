const fs = require('fs')
const chalk = require('chalk')

const getNotes=()=>{
    console.log(
        'Your notes...'
    )
}

const addNote=(title, body)=>{
       const notes = loadNotes()
       const duplicateNotes = notes.filter((note)=>note.title === title
       )

       if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
       saveNotes(notes)
       console.log(chalk.green.inverse('New note added!'))
       }else{
           console.log(chalk.red.inverse('Note title already exists!'))
       }
    
      
}

const removeNotes =(title)=>{

    const notes = loadNotes() 
    const checkNotes = notes.filter((note)=>note.title !== title
    )

    if(checkNotes.length === notes.length){
        console.log(chalk.red.inverse('Such note do not exists!'))
    }else{
           saveNotes(checkNotes)
           console.log(chalk.green.inverse('Note removed successfully'))
    }
}

const saveNotes = (notes)=>{
       const dataJSON = JSON.stringify(notes)
       fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes =()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
     const dataJSON = dataBuffer.toString()
     return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
     
}

const listNotes = ()=>{
        console.log(chalk.blue.bold.inverse('To Do List'))
        const notes = loadNotes()
        
        notes.forEach((note)=>{
            
            console.log(chalk.green.bold(note.title + "- " + note.body))
        })
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes:removeNotes,
    listNotes: listNotes
}