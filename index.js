function getNoteId(){
    let noteObject = getExistingNotes()
    if (!noteObject){
        return 1
    }
    const keysArray = Object.keys(noteObject)
    const numberKeys = keysArray.map((key) => Number(key))
    console.log(numberKeys)
    
    return Math.max(...numberKeys) +1
}
// get the existing note

function getExistingNotes() {
    let notes = localStorage.getItem("note")
    if (!notes){
        return null 
    }
    return JSON.parse(notes)
    
    
}