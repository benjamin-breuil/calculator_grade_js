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

function addNoteInObject(id){
    let note = document.getElementById("notes" + id). valueAsNumber
//    grades.push(note)
    stockNote.branche[id].notes.push(note)

    console.log(stockNote)
}

function addRow(id){
    let table = document.getElementById("table" + id),
        newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        notes = document.getElementById("notes" + id). valueAsNumber
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
        notes = document.getElementById("notes" + id). valueAsNumber
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



// moyenne de toute les branches avant pondérations

// moyenne école pro
  
  function moyennePRO() {
    let allPRO = stockNote.branche[0].notes,
        sum = 0;
  
    for (const item of allPRO) {
      sum += item;
    }

    // TEST
    
    console.log("somme pro" + " " + sum);
    console.log("moyenne pro" + " " + sum/allPRO.length)

    let reponse = sum/allPRO.length

//    document.getElementById("averageINFO").innerText = reponse

    return sum/allPRO.length
  }
  
// moyenne cours inter

  function moyenneINTER() {
    let allINTER = stockNote.branche[1].notes,
    sum = 0;

    for (const item of allINTER) {
    sum += item;
    }

    // TEST

    console.log("somme inter" + " " + sum);
    console.log("moyenne inter" + " " + sum/allINTER.length)

    let reponse = sum/allINTER.length
    document.getElementById("averageINFO").innerText = reponse

    return sum/allINTER.length
  }
  
  // pondération cours inter + cours pro

  function ponderationINFO(){
    let pond = 0.8
    let proPOND = moyennePRO() * pond

    console.log("pondération de moyenne inter et moyenne pro" + "   " + proPOND)
    return proPOND

  }