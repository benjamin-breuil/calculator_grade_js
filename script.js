let rIndex
let choice
let stockNote = {
    names: 'Notes',
    branche: [
        {
            name: 'ecolepro',
            notes: [
                allSemestre = []
            ],
            modules: [
                modules = []
            ]
        },

        {
            name: 'coursinter',
            notes: [
                allSemestre = []
            ],
            modules: [
                modules = []
            ]
        },

        {
            name: 'mathAnglais',
            notes: [
                semestre_math_1 = [],
                semestre_math_2 = [],
                semestre_math_3 = [],
                semestre_anglais_1 = [],
                semestre_anglais_2 = [],
                semestre_anglais_3 = [],
                semestre_anglais_4 = [],
                semestre_anglais_5 = []
            ],


            modules: [
                branche_semestre_math_1 = [],
                branche_semestre_math_2 = [],
                branche_semestre_math_3 = [],
                branche_semestre_anglais_1 = [],
                branche_semestre_anglais_2 = [],
                branche_semestre_anglais_3 = [],
                branche_semestre_anglais_4 = [],
                branche_semestre_anglais_5 = []
            ],

        },

        {
            name: 'cultureG',
            notes: [
                semestre_cultureG_1 = [],
                semestre_cultureG_2 = [],
                semestre_cultureG_3 = [],
                semestre_cultureG_4 = [],
                semestre_cultureG_5 = [],
                semestre_cultureG_6 = [],
                semestre_cultureG_7 = [],
                semestre_cultureG_8 = []
            ],

            modules: [
                branche_semestre_cultureG_1 = [],
                branche_semestre_cultureG_2 = [],
                branche_semestre_cultureG_3 = [],
                branche_semestre_cultureG_4 = [],
                branche_semestre_cultureG_5 = [],
                branche_semestre_cultureG_6 = [],
                branche_semestre_cultureG_7 = [],
                branche_semestre_cultureG_8 = [],
            ]
        },

        {
            name: 'tpi',
            notes: [
                allSemestre = []
            ],
            modules: [
                modules = []
            ]
        }
    ]
}

window.addEventListener('load', () => {
    eventSemestre()
    choice = -1
})


moyennes()

function eventSemestre() {
    document.getElementById("modules3").value = "-1"
    document.getElementById("modules2").value = "-1"
}

for (var i = 0; i <= 4; i++) {
    allFunction(i);
}

function allFunction(index) {
    if (index === 0) {
        addRow(0), editRow(0), removeRow(0)
    } if (index === 1) {
        addRow(1), editRow(1), removeRow(1)
    } if (index === 2) {
        addRow(2), editRow(2), removeRow(2), chooseIndex(2), deleteTable(2)
    } if (index === 3) {
        addRow(3), editRow(3), removeRow(3), chooseIndex(3), deleteTable(3)
    } if (index === 4) {
        addRow(4), editRow(4), removeRow(4)
    }
}

function addNoteInObject(id) {
    let note = document.getElementById("notes" + id).valueAsNumber
    let modules = document.getElementById("modules" + id).value

    chooseIndex(id)

    if (!isNaN(note)) {
        if (id === 0 || id === 1 || id === 4) {
            stockNote.branche[id].notes[0].push(note)
            stockNote.branche[id].modules[0].push(modules)
            //            localStorage.setItem('notes', stockNote.branche[id].notes[0])
        } else {
            stockNote.branche[id].notes[choice].push(note)
            stockNote.branche[id].modules[choice].push(modules)

            //            localStorage.setItem('notes', stockNote.branche[id].notes[choice])
        }
    } else {
        return
    }
}

function addRow(id) {
    const button = document.getElementById('button' + id)

    button.addEventListener('click', function () {
        let table = document.getElementById("table-" + id),
            notes = document.getElementById("notes" + id).valueAsNumber
        if (id === 0 && !isNaN(notes) || id === 1 && !isNaN(notes) || id === 4 && !isNaN(notes)) {
            modules = document.getElementById("modules" + id).value
            let newRow = table.insertRow(table.length),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1)
            cell1.innerHTML = modules
            cell2.innerHTML = notes
        } else if (id === 0 || id === 1 || id === 4) {
            alert("Rentrez une note valide")
        }

        if (id === 2 && choice != -1 || id === 3 && choice != -1) {
            if (isNaN(notes)) {
                alert("Rentrez une note valide")
            } else {
                if (choice === 0 || choice === 1 || choice === 2) {
                    let newRow = table.insertRow(table.length),
                        cell1 = newRow.insertCell(0),
                        cell2 = newRow.insertCell(1),
                        modules = document.getElementById('modules' + id).value
                    cell1.innerHTML = modules
                    cell2.innerHTML = notes
                } else {
                    let newRow = table.insertRow(table.length),
                        cell1 = newRow.insertCell(0),
                        cell2 = newRow.insertCell(1),
                        modules = document.getElementById('modules' + id).value
                    cell1.innerHTML = modules
                    cell2.innerHTML = notes
                }
            }
        } else if (id === 2 || id === 3) {
            alert("Choisis un semestre valide")
        }



        chooseIndex(id)
        randomIndexFunction(table, id)
        addNoteInObject(id)
        moyennes()
        // Storage Item
    })
}

function editRow(id) {
    const button = document.getElementById('buttonEdit' + id)
    button.addEventListener('click', function () {
        let table = document.getElementById("table-" + id),
            modules = document.getElementById("modules" + id).value,
            notes = document.getElementById("notes" + id).valueAsNumber
        randomIndexFunction(table, id)

        //-------------------------------------------------------------
        chooseIndex(id)
        if (id === 0 || id === 1 || id === 4) {
            stockNote.branche[id].notes[0][rIndex - 1] = notes
        } else {
            stockNote.branche[id].notes[choice][rIndex] = notes
        }
        //--------------------------------------------------------------

        table.rows[rIndex].cells[0].innerHTML = modules;
        table.rows[rIndex].cells[1].innerHTML = notes;
        moyennes()

        // Moyenne branches
    })
}

function removeRow(id) {
    const button = document.getElementById('buttonREM' + id)
    button.addEventListener('click', function () {
        let table = document.getElementById("table-" + id)

        randomIndexFunction(table, id)

        // -------------------------------------
        chooseIndex(id)

        if (id === 0 || id === 1 || id === 4) {
            stockNote.branche[id].notes[0].splice(rIndex - 1, 1)
            stockNote.branche[id].modules[0].splice(rIndex - 1, 1)

        } else {
            stockNote.branche[id].notes[choice].splice(rIndex - 1, 1)
            stockNote.branche[id].modules[choice].splice(rIndex - 1, 1)

        }
        // -------------------------------------------------

        table.deleteRow(rIndex)
        moyennes()
    })

}

function randomIndexFunction(tables, ids) {
    for (var i = 0; i < tables.rows.length; i++) {
        tables.rows[i].onclick = function () {
            rIndex = this.rowIndex
            document.getElementById("modules" + ids).value = this.cells[0].innerHTML
            document.getElementById("notes" + ids).value = this.cells[1].innerHTML
            console.log("curreeent row " + rIndex)
            Array.from(this.parentElement.children).forEach(function (el) {
                el.classList.remove('selected-row')
            })
            this.classList.add('selected-row')
        }
    }
    return rIndex
}

function redBlackGreen(notes, id) {

    if (notes === 4.5) {
        document.getElementById(id).innerHTML = notes
        document.getElementById(id).style.color = "black"
    } else if (notes < 4.5) {
        document.getElementById(id).innerHTML = notes
        document.getElementById(id).style.color = "darkred"
    } else if (notes > 4.5) {
        document.getElementById(id).innerHTML = notes
        document.getElementById(id).style.color = "green"
    }
}

function chooseIndex(id) {
    id
    if (id = 2) {
        selected = document.getElementsByTagName('select')[0].onchange = function () {
            choice = this.selectedIndex - 1;
            console.log("choice " + choice);
            return choice
        }
    } if (id = 3) {
        selected = document.getElementsByTagName('select')[1].onchange = function () {
            choice = this.selectedIndex - 1;
            console.log("choice " + choice);
            return choice
        }
    }
    choice
    return choice
}

function deleteTable(index) {
    let selector = document.querySelectorAll(".select");
    for (const iterator of selector) {
        iterator.addEventListener("change", function (e) {
            //            let index = e.target.id.split("-")[1]
            chooseIndex(index)
            let table = document.getElementById("table-" + index)
            let rowLength = table.rows.length;
            for (var i = 1; i <= rowLength; i++) {
                table.deleteRow(0);
            }
            //Adds the stored notes in table
            //            let semestre = e.target.value;
            let rightNote = stockNote.branche[index].notes[choice]

            let branches = stockNote.branche[index].modules[choice][0]


            for (const grade of rightNote) {
                let row = table.insertRow(0)
                let cell1 = row.insertCell(0)
                let cell2 = row.insertCell(1)
                randomIndexFunction(table, index)
                cell2.innerHTML = grade
                cell1.innerHTML = branches
            }


        });
    }
}

// TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST 


function ss() {
    console.log(stockNote)
}



// Notes : J'aurai du commencé par lister toute les fonctionnalités ect mal organisé

// ------MOYENNES-------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------MOYENNES--------------------------------
// ---------------------MOYENNES----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------MOYENNES---

function moyennes() {
    // MOYENNE COMPÉTENCES EN INFORMATIQUES

    let notesINFO = noteFinal(0, 1, 0, 0, 5, 0.8, 0.2, 1)

    redBlackGreen(notesINFO, "averageINFO")

    // Compétence de base élargie

    let semestreB1 = noteFinal(2, 2, 0, 3, 2, 1, 1, 2)
    let semestreB2 = noteFinal(2, 2, 1, 4, 2, 1, 1, 2)
    let semestreB3 = noteFinal(2, 2, 2, 5, 2, 1, 1, 2)
    let semestreB4 = roundNumber(average(stockNote.branche[2].notes[6]), 2)
    let semestreB5 = roundNumber(average(stockNote.branche[2].notes[7]), 2)


    let notesBASE = [semestreB1, semestreB2, semestreB3, semestreB4, semestreB5];
    let finalGrade = roundNumber(calculateFinalGrade(notesBASE),2) ;




    redBlackGreen(finalGrade, "averageBASE")


    console.log("notes finales base élargie " + finalGrade)

        // Moyenne culture G 

        let semestreG1 = roundNumber(average(stockNote.branche[3].notes[0]),2)
        let semestreG2 = roundNumber(average(stockNote.branche[3].notes[1]),2) 
        let semestreG3 = roundNumber(average(stockNote.branche[3].notes[2]),2) 
        let semestreG4 = roundNumber(average(stockNote.branche[3].notes[3]),2)
        let semestreG5 = roundNumber(average(stockNote.branche[3].notes[4]),2)  
        let semestreG6 = roundNumber(average(stockNote.branche[3].notes[5]),2) 
        let semestreG7 = roundNumber(average(stockNote.branche[3].notes[6]),2) 
        let semestreG8 = roundNumber(average(stockNote.branche[3].notes[7]),2) 


        var notesG = [semestreG1, semestreG2, semestreG3, semestreG4, semestreG5, semestreG6, semestreG7, semestreG8];
        var finalGradeCG = roundNumber(calculateFinalGrade(notesG),2) ;

        redBlackGreen(finalGradeCG, "averageCG")
        console.log(semestreG1 + " raaaaaat")


        // TPI NOTE

        let noteTPI = stockNote.branche[4].notes[0]

        redBlackGreen(noteTPI, "averageTPI")
    // CALCUL NOTE FINALES

    let allNote = roundNumber((pond(finalGradeCG, 0.2) + pond(finalGrade, 0.1) + pond(notesINFO, 0.3) + pond(noteTPI,0.4)),10)
    let noteFinale = allNote

    if (noteFinale >= 4) {
        document.getElementById("chiffreRE").style.background = "green"

        document.getElementById("textRE").style.background = "green"
        document.getElementById("re").innerHTML = "Réussie"
    } else {
        document.getElementById("chiffreRE").style.background = "darkred"


        document.getElementById("textRE").style.background = "darkred"
        document.getElementById("re").innerHTML = "Échec"
    }

    document.getElementById("cfc").innerHTML = noteFinale


}

function pond(number, pondNum) {
    return number * pondNum
}

function roundNumber(number, precision) {

    if (isNaN(number)) {
        number = null
        return number
    } else {
        return Math.round(number * precision) / precision
    }


}

function average(array) {
    let branche = 0
    for (const item of array) {
        branche += item;
    }
    return branche / array.length
}

function noteFinal(branche1, branche2, note1, note2, averages, pond1, pond2, division) {
    let notesFinal,
        sum1 = roundNumber(average(stockNote.branche[branche1].notes[note1]), averages),
        sum2 = roundNumber(average(stockNote.branche[branche2].notes[note2]), averages)



    if (sum2 === undefined || isNaN(sum2) || sum2 === 0 || sum2 === null) {
        notesFinal = sum1
    } else if (sum1 === undefined || isNaN(sum1) || sum1 === 0 || sum1 === null) {
        notesFinal = sum2
    } else {
        notesFinal = (roundNumber(pond(sum1, pond1), averages) + roundNumber(pond(sum2, pond2), averages)) / division
    }

    if (isNaN(notesFinal) || notesFinal === 0) {
        notesFinal = null

    }

    return notesFinal
}


function finleee(array) {
    let branche = 0
    for (const item of array) {
        branche += item;
    }

    return branche 
}



function calculateFinalGrade(grades) {
    // Assigner la valeur zéro à la note finale
    let finalGrade = 0;
    
    // Compter le nombre de notes non nulles et non non définies
    let count = 0;
    
    // Parcourir chaque note dans le tableau de notes
    for (var i = 0; i < grades.length; i++) {
      // Si la note est non nulle et non définie, ajouter la note à la note finale et incrémenter le compteur
      if (grades[i] != 0 && grades[i] != undefined && grades[i] != null) {
        finalGrade += grades[i];
        count++;
      }
    }
    
    // Si le compteur est supérieur à zéro, calculer la moyenne des notes non nulles et non définies et retourner la valeur
    // Sinon, retourner zéro
    return count > 0 ? finalGrade / count : 0;
  }