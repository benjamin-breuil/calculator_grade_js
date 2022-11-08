let grades = []
let allGrades = [[],[],[],[],[]]
let rIndex


function getValue(id){
    let note = document.getElementById("notes" + id).value
    grades.push(note)
    allGrades[id].push(grades)

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
    selectRow(id)
    getValue(id)

}

// Display Selected row data into input

function selectRow(id){
    let table = document.getElementById("table" + id)
    for(var i = 0; i < table.rows.length; i++){
        table.rows[i].onclick = function(){
            rIndex = this.rowIndex
            document.getElementById("modules" + id).value = this.cells[0].innerHTML
            document.getElementById("notes" + id).value = this.cells[1].innerHTML
            console.log(rIndex)
        }
    }
    // attention a voir //
    // attention
    for(var i = 1; i < table.rows.length; i++){
        table.rows[i].onclick = function(){
            rIndex = this.rowIndex
            this.classList.toggle("selected");
        }
    }

    // attention // 
    // attention //
}

function editRow(id){
    let table = document.getElementById("table" + id),
        modules = document.getElementById("modules" + id).value,
        notes = document.getElementById("notes" + id).value

    for(var i = 0; i < table.rows.length; i++){
        table.rows[i].onclick = function()
        {
            rIndex = this.rowIndex
            document.getElementById("modules" + id).value = this.cells[0].innerHTML
            document.getElementById("notes" + id).value = this.cells[1].innerHTML
            console.log(rIndex)
        }
    }

        // attention a voir //
    // attention
    for(var i = 1; i < table.rows.length; i++){
        table.rows[i].onclick = function(){
            rIndex = this.rowIndex
            this.classList.toggle("selected");
        }
    }

    // attention // 
    // attention //

    console.log(rIndex)
    table.rows[rIndex].cells[0].innerHTML = modules;
    table.rows[rIndex].cells[1].innerHTML = notes;
}

function removeRow(id){
    let table = document.getElementById("table" + id)

    for(var i = 0; i < table.rows.length; i++){
        table.rows[i].onclick = function()
        {
            rIndex = this.rowIndex
            document.getElementById("modules" + id).value = this.cells[0].innerHTML
            document.getElementById("notes" + id).value = this.cells[1].innerHTML
            console.log(rIndex)
        }
    }

        // attention a voir //
    // attention
    for(var i = 1; i < table.rows.length; i++){
        table.rows[i].onclick = function(){
            rIndex = this.rowIndex
            this.classList.toggle("selected");
        }
    }

    // attention // 
    // attention //

    table.deleteRow(rIndex)
    document.getElementById("notes" + id).value = "";
    document.getElementById("modules" + id).value = "";
}

