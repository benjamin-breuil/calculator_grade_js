// add Row
let rIndex, table = document.getElementById("table")
let grades = []
let allGrades = [[],[],[],[],[]]

function getValue(){
    let note = document.getElementById("notes").value
    grades.push(note)
    allGrades[0].push(grades)

// TEST
 
    console.log(grades)
    console.log(note)
    console.log(allGrades)
}

function addRow(){

    let newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        notes = document.getElementById("notes").value,
        modules = document.getElementById("modules").value


    cell1.innerHTML = modules
    cell2.innerHTML = notes

    console.log(notes + "  " + modules)

    // call the function to set the evvent to the new row

    selectRow()
    getValue()
}

// Display Selected row data into input

function selectRow(){
    for(var i = 0; i < table.rows.length; i++){
        table.rows[i].onclick = function()
        {
            rIndex = this.rowIndex
            document.getElementById("modules").value = this.cells[0].innerHTML
            document.getElementById("notes").value = this.cells[1].innerHTML
            console.log(rIndex)
        }
    }
}

function editRow(){
    let modules = document.getElementById("modules").value,
          notes = document.getElementById("notes").value
    table.rows[rIndex].cells[0].innerHTML = modules;
    table.rows[rIndex].cells[1].innerHTML = notes;
}

function removeRow(){
    table.deleteRow(rIndex)
}