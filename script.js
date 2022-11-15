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
removeRow(0), removeRow(1), removeRow(2), removeRow(3), removeRow(4)

function addNoteInObject(id) {
    let note = document.getElementById("notes" + id).valueAsNumber

    stockNote.branche[id].notes.push(note)

    console.log(stockNote)
}

function addRow(id) {
    const button = document.getElementById('button' + id)

    button.addEventListener('click', function () {
        let table = document.getElementById("table" + id),
            newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            notes = document.getElementById("notes" + id).valueAsNumber
        modules = document.getElementById("modules" + id).value
        cell1.innerHTML = modules
        cell2.innerHTML = notes

        randomIndexFunction(table, id)
        addNoteInObject(id)
        moyennes()
        // Moyenne branches
    })
}

function editRow(id) {
    const button = document.getElementById('buttonEdit' + id)
    button.addEventListener('click', function () {
        let table = document.getElementById("table" + id),
            modules = document.getElementById("modules" + id).value,
            notes = document.getElementById("notes" + id).valueAsNumber
        randomIndexFunction(table, id)

        stockNote.branche[id].notes[rIndex - 1] = notes


        table.rows[rIndex].cells[0].innerHTML = modules;
        table.rows[rIndex].cells[1].innerHTML = notes;
        moyennes()

        // Moyenne branches
    })
}

function removeRow(id) {
    const button = document.getElementById('buttonREM' + id)
    button.addEventListener('click', function () {
        let table = document.getElementById("table" + id)

        randomIndexFunction(table, id)

        stockNote.branche[id].notes.splice(rIndex - 1, 1)

        table.deleteRow(rIndex)
        document.getElementById("notes" + id).value = "";
        document.getElementById("modules" + id).value = "";
        moyennes()
    })

}

function randomIndexFunction(tables, ids) {
    for (var i = 1; i < tables.rows.length; i++) {
        tables.rows[i].onclick = function () {
            rIndex = this.rowIndex
            document.getElementById("modules" + ids).value = this.cells[0].innerHTML
            document.getElementById("notes" + ids).value = this.cells[1].innerHTML
            let currentRow = rIndex
            console.log("curreeent row " + rIndex)
            console.log(rIndex)
            Array.from(this.parentElement.children).forEach(function(el){
                el.classList.remove('selected-row')
            })
            this.classList.add('selected-row')
        }
    }

    return rIndex
}

function moyennes() {

    let notesPRO = stockNote.branche[0].notes,
        notesINTER = stockNote.branche[1].notes

    // MOYENNE COMPÉTENCES EN INFORMATIQUES

    let notesINFO,
        sumPRO = average(notesPRO),
        sumINTER = average(notesINTER)

    if (sumPRO === undefined || isNaN(sumPRO) || sumPRO === 0) {
        notesINFO = sumINTER
    } else if (sumINTER === undefined || isNaN(sumINTER) || sumINTER === 0) {
        notesINFO = sumPRO
    } else {
        notesINFO = roundNumber((pond(sumPRO, 0.8)) + pond(sumINTER, 0.2), 10)
    }

    redBlackGreen(notesINFO, "averageINFO")


    // CALCUL NOTE FINALES

    let noteFinales

    if (noteFinales >= 4) {
        document.getElementById("chiffreRE").style.background = "green"

        document.getElementById("textRE").style.background = "green"
        document.getElementById("re").innerHTML = "Réussie"
    } else {
        document.getElementById("chiffreRE").style.background = "darkred"


        document.getElementById("textRE").style.background = "darkred"
        document.getElementById("re").innerHTML = "Échec"
    }

    document.getElementById("cfc").innerHTML = noteFinales


}

function roundNumber(number, precision) {
    return Math.round(number * precision) / precision
}

function average(array) {
    let branche = 0
    for (const item of array) {
        branche += item;
    }
    return branche / array.length
}

function pond(number, pondNum) {
    return number * pondNum
}

function redBlackGreen(notes, id){

    if (notes === 4) {
        document.getElementById(id).innerHTML = notes
        document.getElementById(id).style.color = "black"
    } else if(notes < 4){
        document.getElementById(id).innerHTML = notes
        document.getElementById(id).style.color = "darkred"
    } else if (notes > 4) {
        document.getElementById(id).innerHTML = notes
        document.getElementById(id).style.color = "green"
    }
}

// TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST 
function pondTEST(array) {
    let sum = 0
    let sumPond = 0
    for (const i of array) {
        sum = i[0] * i[1]
//        sumPond = i[1] + i[1]
        console.log(sum)
    }
    
    return sum
}
