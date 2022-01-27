// get deviating dates from calendar.js
const { closed_dates, limited_dates } = require("./calendar.js")

// define a day
const dayPrototype = {
    dateObject: new Date (),
    get date () {
        return this.dateObject.getDate() + "/" + (this.dateObject.getMonth() + 1)
    },
    get day () {
        return this.dateObject.getDay()
    },
    status: undefined
}

// make today
const today = Object.create(dayPrototype)
today.status = getStatus(today)
console.log(today + "\n")

// make tomorrow
const tomorrow = Object.create(dayPrototype)
tomorrow.dateObject.setDate(tomorrow.dateObject.getDate() + 1) // make tomorrow actually tomorrow
tomorrow.status = getStatus(tomorrow)
console.log(tomorrow + "\n")

// make day after tomorrow
const day_after_tomorrow = Object.create(dayPrototype)
day_after_tomorrow.dateObject.setDate(day_after_tomorrow.dateObject.getDate() + 2) // NOT WORKING: make day_after_tomorrow actually day_after_tomorrow
day_after_tomorrow.status = getStatus(day_after_tomorrow)
console.log(day_after_tomorrow)

// functions
function getStatus (date) {
    console.log("🔍 Checking " + date.date + " for abnormalities...")

    if (closed_dates.indexOf(date.date) > -1) {
        console.log("🎯 Found date in closed_dates!")
        return "closed"
    } else if (limited_dates.indexOf(date.date) > -1) {
        console.log("🎯 Found date in limited_dates!")
        return "limited"
    } else if (date.day == 0) {
        console.log("🎯 Date not found, but is sunday!")
        return "closed"
    } else if (date.day == 6) {
        console.log("🎯 Date not found, but is saturday!")
        return "limited"
    } else {
        console.log("📂 Date not found, all normal!")
        return "normal"
    }
}

