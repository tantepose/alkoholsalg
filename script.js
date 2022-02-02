// get deviating dates from calendar.js
// const { closed_dates, limited_dates } = require("./calendar.js")

// object for storing the actual text to display
// remember to point out that it varies from place to place etc etc
const info = {
    closed: {
        headline: "👎 Stengt alkoholsalg.",
        details_wine: "Polet: stengt", 
        details_beer: "Ølsalg: stengt"
    },
    limited: {
        headline: "🤏 Begrensa alkoholsalg. ",
        details_wine: "Polet: 10:00 - 15:00",
        details_beer: "Ølsalg: 9:00 - 18:00"
    },
    normal: {
        headline: "👌 Normalt alkoholsalg. ",
        details_wine: "Polet: 10:00 - 18:00",
        details_beer: "Ølsalg: 9:00 - 20:00"
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
        return info["closed"]
    } else if (limited_dates.indexOf(date.date()) > -1) {
        console.log("🎯 Found date in limited_dates!")
        return info["limited"]
    } else if (date.day() == 0) {
        console.log("🎯 Date not found, but is sunday!")
        return info["closed"]
    } else if (date.day() == 6) {
        console.log("🎯 Date not found, but is saturday!")
        return info["limited"]
    } else {
        console.log("🎯 Date not found, all normal!")
        return info["normal"]
    }
}

function writeHTML (element, content) {
    document.getElementById(element).children["summary"].innerHTML = content.headline
    document.getElementById(element).children["details-wine"].innerHTML = content.details_wine
    document.getElementById(element).children["details-beer"].innerHTML = content.details_beer
}

// make today
const today = new day
console.log("🍷 Todays headline: " + today.status().headline + "\n")
writeHTML("today", today.status())

// make tomorrow
const tomorrow = new day
tomorrow.dateObject.setDate(tomorrow.dateObject.getDate() + 1) // make tomorrow actually tomorrow
console.log("🍷 Tomorrow's headline: " + tomorrow.status().headline + "\n")
writeHTML("tomorrow", tomorrow.status())

// make day after tomorrow
const day_after_tomorrow = new day
day_after_tomorrow.dateObject.setDate(day_after_tomorrow.dateObject.getDate() + 2) // make day_after_tomorrow actually day_after_tomorrow
console.log("🍷 Day after tomorrow's headline: " + day_after_tomorrow.status().headline + "\n")
writeHTML("dayafter", day_after_tomorrow.status())