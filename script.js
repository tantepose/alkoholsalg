// get deviating dates from calendar.js
const { closed_dates, limited_dates } = require("./calendar.js")

// object for storing the actual text to display
const info = {
    closed: {
        headline: "Alkoholsalg stengt.",
        info_wine: "Polet stengt.", 
        info_beer: "Ølsalg stengt."
    },
    limited: {
        headline: "Alkoholsalg begrensa.",
        info_wine: "Polet åpent fra rundt 10:00 til 14:00.",
        info_beer: "Ølsalg åpent fra rundt 10:00 til 15:00."
    },
    normal: {
        headline: "Alkoholsalg åpent.",
        info_wine: "Polet åpent fra rundt 10:00 til 18:00.",
        info_beer: "Ølsalg åpent fra rundt 10:00 til 18:00."
    }
}

// define a day
function day () {
    this.dateObject = new Date ()
    
    this.date = function () {
        return this.dateObject.getDate() + "/" + (this.dateObject.getMonth() + 1)
    }

    this.day = function () {
        return this.dateObject.getDay()
    }

    this.status = function () {
        return getStatus(this)
    }
}

// checking date against calendar and weekdays
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

// make today
const today = new day
console.log("🍷 Todays headline: " + info[today.status()].headline + "\n")

// make tomorrow
const tomorrow = new day
tomorrow.dateObject.setDate(tomorrow.dateObject.getDate() + 1) // make tomorrow actually tomorrow
console.log("🍷 Tomorrow's headline: " + info[tomorrow.status()].headline + "\n")

// make day after tomorrow
const day_after_tomorrow = new day
day_after_tomorrow.dateObject.setDate(day_after_tomorrow.dateObject.getDate() + 2) // make day_after_tomorrow actually day_after_tomorrow
console.log("🍷 Day after tomorrow's headline: " + info[day_after_tomorrow.status()].headline + "\n")