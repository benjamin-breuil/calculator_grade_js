// Choice of ssemestre

var myChoice = document.getElementById('semestre-c-de-base');
myChoice.onchange = (event) => {
    var choice = event.target.value;
    console.log(choice);
}


function addNoteInObject(id) {
let note = document.getElementById("notes" + id).valueAsNumber
var myChoice = document.getElementById('semestre-c-de-base');
myChoice.onchange = (event) => {
    var choice = event.target.value;
    if (id === 0 || id === 1 || id === 4) {
        stockNote.branche[id].notes[0].push(note)
    } else {
        stockNote.branche[id].notes[choice].push(note)
    }
    console.log(choice);
}
console.log(stockNote)
}





if (id === 0 || id === 1 || id === 4) {
stockNote.branche[id].notes[0][rIndex - 1] = notes
} else {
stockNote.branche[id].notes[choice][rIndex - 1] = notes
}




if (id === 0 || id === 1 || id === 4) {
stockNote.branche[id].notes[0].splice(rIndex - 1, 1)
} else {
stockNote.branche[id].notes[choice].splice(rIndex - 1, 1)
}




function name(x, y) {
document.getElementsByTagName('select')[y].onchange = function() {
    let choice = this.selectedIndex;
    if (id === 0 || id === 1 || id === 4) {
        stockNote.branche[id].notes[0].push(note)
    } else if (id === x){
        stockNote.branche[id].notes[choice].push(note)
    }
    console.log(choice);
}
}




document.getElementsByTagName('select')[0].onchange = function() {
var choice = this.selectedIndex;
console.log(choice);
}
















// Filtre depends des semestre