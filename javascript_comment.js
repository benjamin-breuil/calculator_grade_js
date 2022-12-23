let rIndex
let choice
let stockNote


if (!localStorage.getItem('user')) {

    stockNote = {
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
                ], modules: [
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
    };

    localStorage.setItem('user', JSON.stringify(stockNote))
} else {
    stockNote = JSON.parse(localStorage.getItem('user'));
}
// Quand la page est chargé la variable choice est de -1  (choice c'est le choix du semestre)
choice = -1


// la valeur de base des semestres est -1 donc --> "choisir un semestre"
document.getElementById("modules3").value = "-1"
document.getElementById("modules2").value = "-1"


for (var i = 0; i <= 4; i++) {
    // function apellé pour remplacer le parametre index par i
    allFunction(i);
}

// Function avec dedans d'autre fonction
function allFunction(index) {
    // si index est égal à zéro les functions dans le if seront index de 0
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



moyennes()

localStorage.setItem('user', JSON.stringify(stockNote))


function addNoteInObject(id) {
    // Récupére l'inpute notes + id (id qui est dans la function allFunction)
    let note = document.getElementById("notes" + id).valueAsNumber
    // Récupére quel module est notés dans le input
    let modules = document.getElementById("modules" + id).value

    // Function choose index qui retourn "choice" pour les choix de semestre
    chooseIndex(id)

    // si la note n'est pas not a number
    if (!isNaN(note)) {
        // si l'ID est 0, 1 ou 4
        if (id === 0 || id === 1 || id === 4) {
            // Push la note dans le tableau note qui se trouve dans l'objet stocknote
            stockNote.branche[id].notes[0].push(note)

            // Push le modules dans le tableau modules qui se trouve dans l'objet stocknote
            stockNote.branche[id].modules[0].push(modules)

            // Quand l'utilisateur ajoute une note elle s'ajoute dans le locale storage
            localStorage.setItem('user', JSON.stringify(stockNote))

        } else {
            // Push la note dans note selon le choix du semestre dans l'objet stockNote
            stockNote.branche[id].notes[choice].push(note)

            // Push la branche dans note selon le choix du semestre dans l'objet stockNote
            stockNote.branche[id].modules[choice].push(modules)

            // Quand l'utilisateur ajoute une note elle s'ajoute dans le locale storage
            localStorage.setItem('user', JSON.stringify(stockNote))

        }

    } else {
        // si la note est not a number (pas un nombre) ce if else ne retourne rien 
        return
    }
}




function addRow(id) {
    // récupére le bouton ajouter selon l'ID 
    const button = document.getElementById('button' + id)
    // Au moment du clique sur le bouton une function se lance
    button.addEventListener('click', function () {
        // Récupére les table selon l'ID
        let table = document.getElementById("table-" + id),
            // récupére les notes selon l'ID ( récupére la note dans le input)
            notes = document.getElementById("notes" + id).valueAsNumber
        // si id est 0 ou 1 ou 4 et que notes est un nombre 
        if (id === 0 && !isNaN(notes) || id === 1 && !isNaN(notes) || id === 4 && !isNaN(notes)) {
            modules = document.getElementById("modules" + id).value
            let newRow = table.insertRow(table.length),
                cell1 = newRow.insertCell(0),
                cell2 = newRow.insertCell(1)
            cell1.innerHTML = modules
            cell2.innerHTML = notes
            // Si l'id est de 0 ou 1 ou 4
        } else if (id === 0 || id === 1 || id === 4) {
            alert("Rentrez une note valide")
        }
        // si l'id est de 2 ou 3 et que choice n'est pas -1
        if (id === 2 && choice != -1 || id === 3 && choice != -1) {
            // si notes n'est pas un nombre il y a une alerte qui demande de rentrer une note valide
            if (isNaN(notes)) {
                alert("Rentrez une note valide")
            } else {
                // déclaration de la variable newRow qui ajoute une ligne a partir de la derniere ligne de la table
                let newRow = table.insertRow(table.length),
                    // déclaration de la variable cell1 qui insert une cellule dans la colonne 1 (colonne 1 = 0 parce que sa commence toujurs par 0)
                    cell1 = newRow.insertCell(0),
                    // déclaration de la variable cell2 qui insert une cellule dans la colonne 2 (colonne 2 = 1 parce que sa commence toujurs par 0)
                    cell2 = newRow.insertCell(1),
                    // Récupére la valeur qui est noté dans l'input modules
                    modules = document.getElementById('modules' + id).value
                // rentre dans le document html le nom du modules
                cell1.innerHTML = modules
                // rentre dans le document html le nom du modules
                cell2.innerHTML = notes

            }
        } else if (id === 2 || id === 3) {
            alert("Choisis un semestre valide")
        }


        // quand la fonction addrow est appeller des modifications sont faites dans ces fonctions
        chooseIndex(id)
        randomIndexFunction(table, id)
        addNoteInObject(id)
        moyennes()
    })
}

function editRow(id) {
    // constante qui récupére le boutton edit selon l'id
    const button = document.getElementById('buttonEdit' + id)
    // au moment du clique sur le button la function se lance
    button.addEventListener('click', function () {
        // Récupére les table selon l'ID
        let table = document.getElementById("table-" + id),
            // récupére les modules selon l'ID ( récupére le module dans le input)
            modules = document.getElementById("modules" + id).value,
            // récupére les notes selon l'ID ( récupére la note dans le input)
            notes = document.getElementById("notes" + id).valueAsNumber
        randomIndexFunction(table, id)

        //-------------------------------------------------------------
        // Appelle la fonction chooseIndex pour rentrer une note selon le choix de semestre
        chooseIndex(id)
        /// si l'id est de 0,1 ou 4 la notes dois etre editer que dans notes car ces branches n'ont pas de semestre
        if (id === 0 || id === 1 || id === 4) {
            stockNote.branche[id].notes[0][rIndex - 1] = notes
            stockNote.branche[id].modules[0][rIndex - 1] = modules

            localStorage.setItem('user', JSON.stringify(stockNote))
        } else {
            // si l'id est autre que 0,1 et 4 edit les notes selon le choice (semestre) 
            stockNote.branche[id].notes[choice][rIndex] = notes
            stockNote.branche[id].modules[choice][rIndex - 1] = modules
            localStorage.setItem('user', JSON.stringify(stockNote))

        }
        //--------------------------------------------------------------
        // Change l'affichage dans le HTML
        table.rows[rIndex].cells[0].innerHTML = modules;
        table.rows[rIndex].cells[1].innerHTML = notes;
        // A chaque edit cela change la moyenne
        moyennes()
    })
}

function removeRow(id) {
    // Constante qui récupére un bouton remove selon l'ID
    const button = document.getElementById('buttonREM' + id)
    // Au clique sur le bouton cela lance une function
    button.addEventListener('click', function () {
        // Récupére une table selon l'ID
        let table = document.getElementById("table-" + id)
        // Peut récupérer une ligne d'une table selon l'ID
        randomIndexFunction(table, id)

        // -------------------------------------
        // Appelle la fonction chooseIndex pour rentrer une note selon le choix de semestre
        chooseIndex(id)
        // Si l'ID est de 0, 1 ou 4
        if (id === 0 || id === 1 || id === 4) {
            // Supprime la note selon la branche, (pas de semestre), le rIndex (Ligne du tableau)
            stockNote.branche[id].notes[0].splice(rIndex - 1, 1)
            // Supprime la note selon la branche, (pas de semestre), le rIndex (Ligne du tableau)
            stockNote.branche[id].modules[0].splice(rIndex - 1, 1)
        } else {
            // Suprime la note selon la branche, selon le semestre et selon le rIndex (Ligne du tableau)
            stockNote.branche[id].notes[choice].splice(rIndex - 1, 1)
            // S
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

// .toFixed(1)  limite le nombre décimal là a un 1


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
    let finalGrade = roundNumber(calculateFinalGrade(notesBASE), 2);




    redBlackGreen(finalGrade, "averageBASE")


    console.log("notes finales base élargie " + finalGrade)

    // Moyenne culture G 

    let semestreG1 = roundNumber(average(stockNote.branche[3].notes[0]), 2)
    let semestreG2 = roundNumber(average(stockNote.branche[3].notes[1]), 2)
    let semestreG3 = roundNumber(average(stockNote.branche[3].notes[2]), 2)
    let semestreG4 = roundNumber(average(stockNote.branche[3].notes[3]), 2)
    let semestreG5 = roundNumber(average(stockNote.branche[3].notes[4]), 2)
    let semestreG6 = roundNumber(average(stockNote.branche[3].notes[5]), 2)
    let semestreG7 = roundNumber(average(stockNote.branche[3].notes[6]), 2)
    let semestreG8 = roundNumber(average(stockNote.branche[3].notes[7]), 2)


    var notesG = [semestreG1, semestreG2, semestreG3, semestreG4, semestreG5, semestreG6, semestreG7, semestreG8];
    var finalGradeCG = roundNumber(calculateFinalGrade(notesG), 2);

    redBlackGreen(finalGradeCG, "averageCG")
    console.log(semestreG1 + " raaaaaat")


    // TPI NOTE

    let noteTPI = stockNote.branche[4].notes[0]

    redBlackGreen(noteTPI, "averageTPI")
    // CALCUL NOTE FINALES

    let allNote = roundNumber((pond(finalGradeCG, 0.2) + pond(finalGrade, 0.1) + pond(notesINFO, 0.3) + pond(noteTPI, 0.4)), 10)
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

