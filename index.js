// still figuring out why the return is 1
function getNoteId(){
    let noteObject = getExistingNotes()
    if (!noteObject){
        return 1
    }

    // also still figuring out how to describe this part 
    // it was explained but I forgot how to explain the way it relates to the rest of the app
    const keysArray = Object.keys(noteObject)
    const numberKeys = keysArray.map((key) => Number(key))
    console.log(numberKeys)

    return Math.max(...numberKeys) +1 // this part with the +1 adds a new key to match the new note value 
}
// getting the existing notes
// this function instructs the browser to retrieve the "note" from local storage  
function getExistingNotes() {
    let notes = localStorage.getItem("note")
    if (!notes){
        return null 
    }
    return JSON.parse(notes) // here we're returning the notes variable as JSON data / not to be confused with the "note" id from the textarea 
    
    
}