// add Row

function addRow(){

    let table = document.getElementById("table"),
    newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    notes = document.getElementById("notes").value,
    modules = document.getElementById("modules").value
    
    cell1.innerHTML = modules
    cell2.innerHTML = notes

    console.log(notes + "  " + modules)

    // call the function to set the evvent to the new row

    selectRow()
}

// Display Selected row data into input

function selectRow(){
    let rIndex, table = document.getElementById("table")
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


