let grades = []
let rIndex
let stockNote = {
    names: 'Notes',
    branche: [
        {
            name: 'ecolepro',
            notes: []
        },

        {
            name: 'coursinter',
            notes: []
        },

        {
            name: 'mathAnglais',
            notes: []
        },

        {
            name: 'cultureG',
            notes: []
        },

        {
            name: 'tpi',
            notes: []
        }
    ]
}

function moyenneINFO(){
    let allPRO = stockNote.branche[0].notes,
        allInter = stockNote.branche[1].notes

    console.log(allPRO)
    
}

function addNoteInObject(id){
    let note = document.getElementById("notes" + id).value
//    grades.push(note)
    stockNote.branche[id].notes.push(note)

    console.log(stockNote)
}

function addRow(id){
    let table = document.getElementById("table" + id),
        newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        notes = document.getElementById("notes" + id).value,
        modules = document.getElementById("modules" + id).value


    cell1.innerHTML = modules
    cell2.innerHTML = notes

    console.log(notes + "  " + modules)
    randomIndexFunction(table, id)
    addNoteInObject(id)
}


// Display Selected row data into input

function editRow(id){
    let table = document.getElementById("table" + id),
        modules = document.getElementById("modules" + id).value,
        notes = document.getElementById("notes" + id).value
    randomIndexFunction(table, id)

    stockNote.branche[id].notes[rIndex - 1] = notes


    table.rows[rIndex].cells[0].innerHTML = modules;
    table.rows[rIndex].cells[1].innerHTML = notes;


    console.log(stockNote)
}

function removeRow(id){
    let table = document.getElementById("table" + id)

    randomIndexFunction(table, id)

    stockNote.branche[id].notes.splice(rIndex - 1,1)

    table.deleteRow(rIndex)
    document.getElementById("notes" + id).value = "";
    document.getElementById("modules" + id).value = "";

    console.log(stockNote)
}

function changeBackgroundRow(tables){

    let tbl = tables

    for(var i = 1; i < tbl.rows.length; i++){
        tbl.rows[i].onclick = function(){
            rIndex = this.rowIndex
            this.classList.toggle("selected");
        }
    }
}

function randomIndexFunction(tables, ids){
    for(var i = 0; i < tables.rows.length; i++){
        tables.rows[i].onclick = function()
        {
            rIndex = this.rowIndex
            document.getElementById("modules" + ids).value = this.cells[0].innerHTML
            document.getElementById("notes" + ids).value = this.cells[1].innerHTML
            console.log(rIndex)
        }
    }

    return rIndex
}



// let allInput = document.getElementsByClassName('redIfFalseNumber')

// allInput.addEventListener('input', function(e){
//    let note = allInput
//    if (note < 1 || note > 6) {
//        this.classList.toggle("false")
//    } else {
//        this.classList.toggle("true")
//    }
// })