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
    document.getElementsByTagName('select')[y].onchange = function () {
        let choice = this.selectedIndex;
        if (id === 0 || id === 1 || id === 4) {
            stockNote.branche[id].notes[0].push(note)
        } else if (id === x) {
            stockNote.branche[id].notes[choice].push(note)
        }
        console.log(choice);
    }
}




document.getElementsByTagName('select')[0].onchange = function () {
    var choice = this.selectedIndex;
    console.log(choice);
}



let sems = document.getElementById("dropdown-" + index).value;
let tablo = document.getElementById(sems);

let row = tablo.insertRow(0);

let cell1 = row.insertCell(0);

cell1.innerHTML = grade;


if (!(id === 2 || id === 3)) {
} else if (id === 2) {
} else if (id === 3) {
}




if (!(id === 2 || id === 3)) {
    randomIndexFunction(table, id)
    let table = document.getElementById("table" + id),
        modules = document.getElementById("modules" + id).value,
        notes = document.getElementById("notes" + id).valueAsNumber
    table.rows[rIndex].cells[0].innerHTML = modules;
    table.rows[rIndex].cells[1].innerHTML = notes;
} else if (id === 2) {
    chooseIndex(id)
    console.log(choice)
    let semestre = document.getElementById("semestre" + choice)
    randomIndexFunction(semestre, choice)
    let modules = document.getElementById("modules" + id).value,
        notes = document.getElementById("notes" + id).valueAsNumber
    semestre.rows[rIndex].cells[0].innerHTML = modules;
    semestre.rows[rIndex].cells[1].innerHTML = notes;

} else if (id === 3) {
    chooseIndex(id)
    let semestre = document.getElementById("semestreG" + choice)
    randomIndexFunction(semestre, choice)
    let modules = document.getElementById("modules" + id).value,
        notes = document.getElementById("notes" + id).valueAsNumber
    semestre.rows[rIndex].cells[0].innerHTML = modules;
    semestre.rows[rIndex].cells[1].innerHTML = notes;

}




if (id === 2 && choice != -1 || id === 3 && choice != -1) {
    if (isNaN(notes)) {
        alert("Rentrez une note valide")
    } else {
        if (table === 2) {
            if (choice === 0 || choice === 1 || choice === 2) {
                let newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    modules = "Math"
                cell1.innerHTML = modules
                cell2.innerHTML = notes
            } else {
                let newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    modules = "Anglais"
                cell1.innerHTML = modules
                cell2.innerHTML = notes
            }
        } else {
            modules = document.getElementById("modules" + id).value
            let newRow = table.insertRow(table.length),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1)
            cell1.innerHTML = modules
            cell2.innerHTML = notes
        }
    }
} else if (id === 2 || id === 3) {
    alert("Choisis un semestre valide")
}


function eventSemestre() {
    document.getElementById("sem3").value = "-1"
    document.getElementById("modules2").value = "-1"
}



function changeTable(selectedID, id) {
    var select = document.getElementById("selectNumber");
    var options = ["ratio", "blaireau", "3", "4", "5"];

    for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
    }
}




function changeTable(id) {
    if (id === 0 || id === 1 || id === 4) {
        let options = stockNote.branche[id].notes[0],
            newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0)
        for (var i = 0; i < options.length; i++) {
            cell1.innerHTML = stockNote.branche[id].notes[0]
        }
    } else {
        let options = stockNote.branche[id].notes[choice],
            newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0)
        for (var i = 0; i < options.length; i++) {
            cell1.innerHTML = stockNote.branche[id].notes[choice]
        }
    }
}



function deleteTable() {
    let selector = document.querySelectorAll(".select");
    for (const iterator of selector) {
        iterator.addEventListener("change", function (e) {
            let index = e.target.id.split("-")[1];
            let table = document.getElementById("table" + index);
            let rowLength = table.rows.length;
            for (var i = 1; i <= rowLength; i++) {
                table.deleteRow(0);
            }
            //Adds the stored notes in table
            let semestre = e.target.value;
            let rightNote = Notes["table" + index][semestre]
            for (const grade of rightNote) {
                let row = table.insertRow(0);
                let cell1 = row.insertCell(0);
                cell1.innerHTML = grade;
            }
        });
    }
}

deleteTable() 

function deleteTable(index) {
    let selector = document.querySelectorAll(".select");
    chooseIndex(index)
    for (const iterator of selector) {
        iterator.addEventListener("change", function (e) {
        //    let index = e.target.id.split("-")[1];
            let table = document.getElementById("table-" + index);
            var rowLength = table.rows.length;
            for (var i = rowLength - 1; i > 1; i--) {
                table.deleteRow(i);
            }
            //Adds the stored notes in table
//            let semestre = e.target.value;
            let rightNote = stockNote.branche[index].notes[choice]
            for (const grade of rightNote) {
                let row = table.insertRow(0);
                let cell1 = row.insertCell(0);
                cell1.innerHTML = grade;
            }
        });
    }
}












function elseIfElseIfElse(un,deux,trois,quatre,cinq,six) {
    if (un === undefined || isNaN(un) || un === 0) {
        baseNote = roundNumber(((deux + trois + quatre + cinq) / 4), 2)
    } else if (un === undefined || isNaN(un) || un === 0) {
        baseNote = roundNumber(((trois + quatre + cinq) / 3), 2)
    } else if (un === undefined || isNaN(un) || un === 0){
        baseNote = roundNumber(((quatre + cinq) / 2), 2)
    } else if (un === undefined || isNaN(un) || un === 0){
        baseNote = roundNumber(((cinq) / 1), 2)
    } else {
        baseNote = six
    }
}

function nameF(un, deux, trois, quatre, cinq) {

    if (un === undefined || isNaN(un) || un === 0) {
        baseNote = roundNumber(((deux + trois + quatre + cinq) / 4), 2)
    } else if (un === undefined || isNaN(un) || un === 0 && deux === undefined || isNaN(deux) || deux === 0) {
        baseNote = roundNumber(((trois + quatre + cinq) / 3), 2)
    }

    return baseNote
}

function nameF(un, deux, trois, quatre, cinq) {

    if (un === undefined || isNaN(un) || un === 0) {
        baseNote = roundNumber(((deux + trois + quatre + cinq) / 4), 2)
    } 

    return baseNote
}