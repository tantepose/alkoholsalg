// all closed
// possibly excluding all sundays
 const closed_dates = [
    "1/1", //første nyttårsdag
    "14/4", // skjærtorsdag
    "15/4", // langfredag
    "17/4", //første påskedag
    "18/4", // andre påskedag
    "1/5", //første mai
    "17/5", //17 mai
    "5/6", //første pinsedag
    "6/6", //andre pinsedag
    "25/12", //første juledag
    "26/12" //andre juledag
]

// somewhat closed
// possibly excluding all saturdays
 const limited_dates = [
     "13/4", //før skjærtorsdag
     "16/4", //påskeaften
     "4/6", //pinseaften
     "24/12", //julaften
     "31/12", //nyttårsaften
]

// module.exports = { closed_dates, limited_dates }