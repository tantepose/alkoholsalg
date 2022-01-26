// get deviating dates from calendar.js
const { closed_dates, limited_dates } = require("./calendar.js")

// define today
const today = {
    dateObject: new Date (),
    get date () {
        return this.dateObject.getDate() + "/" + (this.dateObject.getMonth() + 1)
    },
    get day () {
        return this.dateObject.getDay()
    },
    status: undefined
}

today.status = getStatus(today.date, today.day)

console.log(today)
console.log("\n")

// define tomorrow
const tomorrow = {
    dateObject: new Date (),
    get date () {
        return this.dateObject.getDate() + "/" + (this.dateObject.getMonth() + 1)
    },
    get day () {
        return this.dateObject.getDay()
    },
    status: undefined
}
tomorrow.dateObject.setDate(tomorrow.dateObject.getDate()+1)

tomorrow.status = getStatus(tomorrow.date, tomorrow.day)

console.log(tomorrow)

// functions

function getStatus (date, day) {
    console.log("🔍 Checking " + date + " for abnormalities...")

    if (closed_dates.indexOf(date) > -1) {
        console.log("🎯 Found date in closed_dates!")
        return "closed"
    } else if (limited_dates.indexOf(date) > -1) {
        console.log("🎯 Found date in limited_dates!")
        return "limited"
    } else if (day == 0) {
        console.log("🎯 Date not in calendar, but is sunday!")
        return "closed"
    } else if (day == 6) {
        console.log("🎯 Date not in calendar, but is saturday!")
        return "limited"
    } else {
        console.log("🤷‍♀️ Date all normal!")
        return "normal"
    }
}

