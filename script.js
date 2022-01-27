// get deviating dates from calendar.js
const { closed_dates, limited_dates } = require("./calendar.js")

// define a day
function day () {
    this.dateObject = new Date ()
    
    this.date = function () {
        return this.dateObject.getDate() + "/" + (this.dateObject.getMonth() + 1)
    }

    this.day = function () {
        return this.dateObject.getDay()
    }

    this.status = undefined
}

// make today
const today = new day
today.status = getStatus(today)
console.log("🍷 Status for " + today.date() + ": " + today.status + "\n")

// make tomorrow
const tomorrow = new day
tomorrow.dateObject.setDate(tomorrow.dateObject.getDate() + 1) // make tomorrow actually tomorrow
tomorrow.status = getStatus(tomorrow)
console.log("🍷 Status for " + tomorrow.date() + ": " + tomorrow.status + "\n")

// make day after tomorrow
const day_after_tomorrow = new day
day_after_tomorrow.dateObject.setDate(day_after_tomorrow.dateObject.getDate() + 2) // make day_after_tomorrow actually day_after_tomorrow
day_after_tomorrow.status = getStatus(day_after_tomorrow)
console.log("🍷 Status for " + day_after_tomorrow.date() + ": " + day_after_tomorrow.status + "\n")

// functions
function getStatus (date) {
    console.log("🔍 Checking " + date.date() + " for abnormalities...")

    if (closed_dates.indexOf(date.date()) > -1) {
        console.log("🎯 Found date in closed_dates!")
        return "closed"
    } else if (limited_dates.indexOf(date.date()) > -1) {
        console.log("🎯 Found date in limited_dates!")
        return "limited"
    } else if (date.day() == 0) {
        console.log("🎯 Date not found, but is sunday!")
        return "closed"
    } else if (date.day() == 6) {
        console.log("🎯 Date not found, but is saturday!")
        return "limited"
    } else {
        console.log("🎯 Date not found, all normal!")
        return "normal"
    }
}