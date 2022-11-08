// add Row
let grades = []
let allGrades = [[],[],[],[],[]]

function getValue(){
    let note = document.getElementById("notes" + id).value
    grades.push(note)
    allGrades[0].push(grades)

// TEST
 
    console.log(grades)
    console.log(note)
    console.log(allGrades)
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

    // call the function to set the evvent to the new row
    document.getElementById("notes" + id).value = "";
    document.getElementById("modules" + id).value = "";
    selectRow()
    getValue()
}

// Display Selected row data into input

function selectRow(id){
    let rIndex, table = document.getElementById("table" + id)
    for(var i = 0; i < table.rows.length; i++){
        table.rows[i].onclick = function()
        {
            rIndex = this.rowIndex
            document.getElementById("modules" + id).value = this.cells[0].innerHTML
            document.getElementById("notes" + id).value = this.cells[1].innerHTML
            console.log(rIndex)
        }
    }
}

function editRow(id){
    let rIndex, table = document.getElementById("table" + id),
        modules = document.getElementById("modules" + id).value,
        notes = document.getElementById("notes" + id).value
    table.rows[rIndex].cells[0].innerHTML = modules;
    table.rows[rIndex].cells[1].innerHTML = notes;
}

function removeRow(id){
    let rIndex, table = document.getElementById("table" + id)
    table.deleteRow(rIndex)
    document.getElementById("notes" + id).value = "";
    document.getElementById("modules" + id).value = "";
}



var liste = [2, 3, 4, 5, 6, 7]

