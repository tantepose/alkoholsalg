// object for storing the actual text to display
// remember to point out that it varies from place to place etc etc
const info = {
    closed: {
        headline: "👎 stengt alkoholsalg",
        details_wine: "polet: stengt", 
        details_beer: "butikk: stengt"
    },
    limited: {
        headline: "🤏 begrensa alkoholsalg",
        details_wine: "polet: 10.00 ~ 16.00",
        details_beer: "butikk: 9.00 ~ 18.00"
    },
    normal: {
        headline: "👌 normalt alkoholsalg",
        details_wine: "polet: 10.00 ~ 18.00",
        details_beer: "butikk: 9.00 ~ 20.00"
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

// writing the HTML in each .item box' child elements
function writeHTML (element, content, currentDay) {
    const elements = document.getElementById(element).children
    elements["day-header"].children["day-name"].innerHTML = currentDay.dateObject.toLocaleDateString("no", { weekday: 'long' })
    elements["summary"].innerHTML = content.headline
    elements["details-wine"].innerHTML = content.details_wine
    elements["details-beer"].innerHTML = content.details_beer
}

// make and write today
const today = new day
writeHTML("today", today.status(), today)

// make and write tomorrow
const tomorrow = new day
tomorrow.dateObject.setDate(tomorrow.dateObject.getDate() + 1) // make tomorrow actually tomorrow
writeHTML("tomorrow", tomorrow.status(), tomorrow)

// make and write day after tomorrow
const day_after_tomorrow = new day
day_after_tomorrow.dateObject.setDate(day_after_tomorrow.dateObject.getDate() + 2) // make day_after_tomorrow actually day_after_tomorrow
writeHTML("dayafter", day_after_tomorrow.status(), day_after_tomorrow)