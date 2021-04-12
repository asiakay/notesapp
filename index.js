// updated 4/12/21 -  The purpose of the getNoteId() is to return the next number in the sequence of notes
// the return is 1 because it is attached to the if statement that states, it there is no existing noteObject (!noteObject)
// then the newly created/ first / only noteObject is assigned a value of 1 
function getNoteId(){
    let noteObject = getExistingNotes()
    if (!noteObject){
        return 1
    }

    // big thanks to my code mentor and mozilla docs for helping me understand and describe this part 
    // "Object.keys()": method that returns an array of the given parameter, in this case (noteObject). 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
    // "Object.keys(noteObject)": cycles through the sequence of properties contained /defined within the object. 
    // In the case of our (noteObject), their are two properties, 1) the number of the note = [id], and the textarea contents = "note"
    // the reason why Object.keys() method is used on noteObject is because it turns both [id] and "note" properties into string data types
    const keysArray = Object.keys(noteObject)

// that process of converting the noteObject properties is stored in 
// "const keysArray = Object.keys(noteObject)"

    // The map() method creates a new array populated with 
    // the results of calling a provided function on 
    // every element in the calling array.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 
    // When used as a function, Number(value) converts a string or other value to the Number type. 
    
// This part of code has to do with returning the highest / most recent number added to the array
    
    const numberKeys = keysArray.map((key) => Number(key))
    console.log(numberKeys)

    return Math.max(...numberKeys) +1 // this part with the +1 adds a new key to match the new note value 
}
// getting the existing notes
// this function instructs the browser to retrieve the "note" from local storage  
// "The getItem() method of the Storage interface, when passed a key name, will return that key's value"
function getExistingNotes() {
    let notes = localStorage.getItem("note")
    if (!notes){
        return null 
    }
    return JSON.parse(notes) // here we're returning the notes variable as JSON data / not to be confused with the "note" id from the textarea 
    
    
}

// Storage.getItem() https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem
// Additional Resources

// Mozilla Web Storage Demo https://mdn.github.io/dom-examples/web-storage/
// https://html.spec.whatwg.org/multipage/webstorage.html