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

// ADD ROW
addRow(0), addRow(1), addRow(2), addRow(3), addRow(4)
// EDIT ROW
editRow(0), editRow(1), editRow(2), editRow(3), editRow(4)
// REM. ROW
removeRow(0), removeRow(1), removeRow(2), removeRow(3),removeRow(4)

function addNoteInObject(id){
    let note = document.getElementById("notes" + id).valueAsNumber
//    grades.push(note)
    stockNote.branche[id].notes.push(note)

    console.log(stockNote)
}

function addRow(id){
    const button = document.getElementById('button' + id)

    button.addEventListener('click', function(){
    let table = document.getElementById("table" + id),
        newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        notes = document.getElementById("notes" + id). valueAsNumber
        modules = document.getElementById("modules" + id).value



        cell1.innerHTML = modules
        cell2.innerHTML = notes    

    randomIndexFunction(table, id)
    addNoteInObject(id)
    // Moyenne branches
})
}

function editRow(id){
    const button = document.getElementById('buttonEdit' + id)
    button.addEventListener('click', function(){
    let table = document.getElementById("table" + id),
        modules = document.getElementById("modules" + id).value,
        notes = document.getElementById("notes" + id). valueAsNumber
    randomIndexFunction(table, id)

    stockNote.branche[id].notes[rIndex - 1] = notes


    table.rows[rIndex].cells[0].innerHTML = modules;
    table.rows[rIndex].cells[1].innerHTML = notes;


    // Moyenne branches
})
}

function removeRow(id){
    const button = document.getElementById('buttonREM' + id)
    button.addEventListener('click', function(){
    let table = document.getElementById("table" + id)

    randomIndexFunction(table, id)

    stockNote.branche[id].notes.splice(rIndex - 1,1)

    table.deleteRow(rIndex)
    document.getElementById("notes" + id).value = "";
    document.getElementById("modules" + id).value = "";

})

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




function moyennes(){
    let notesPRO = stockNote.branche[0].notes,
        notesINTER = stockNote.branche[1].notes,
        sumPRO = 0,
        sumINTER = 0

    for (const item of notesPRO) {
        sumPRO += item;
    }

    for (const item of notesINTER) {
        sumINTER += item;
    }


    if (isNaN(notesPRO)) {
        sumPRO = 0
    } if(isNaN(notesINTER)){
        sumINTER = 0
    }

    sumPRO = Math.round(2*(sumPRO / notesPRO.length)) / 2
    sumINTER = Math.round(2*(sumINTER / notesINTER.length)) / 2

    console.log("sumPRO" + " " + sumPRO)
    console.log("sumINTER" + " " + sumINTER)

    let pondINFO = (sumPRO * 0.8) + (sumINTER * 0.2)
        
}
