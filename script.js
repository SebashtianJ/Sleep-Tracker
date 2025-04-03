function sleepHours() {
    const points = document.getElementById("hours").value;

    if (points >= 8) {
        document.getElementById("hoursMsg").textContent = "You've been getting enough sleep.";
    } else {
        document.getElementById("hoursMsg").textContent = "You need more sleep.";
    }
}

function timeForBed() {
    const bedtime = document.getElementById("bedtime").value;

    if (bedtime > 10) {
        document.getElementById("bedtimeMsg").textContent = "Staying up late can have negative effects on you, you know. 🥱";
    } if (bedtime >= 7) {
        document.getElementById("bedtimeMsg").textContent = "That's great! Goodnight! 🌛";
    } else {
        document.getElementById("bedtimeMsg").textContent = "It's too early to go to bed!";
    }
}

function wakeTime() {
    const wakeUp = document.getElementById("wakeUpTime").value;

    if (wakeUp > 11) {
        document.getElementById("wakeTimeMsg").textContent = "Good afternoon... You woke up a little late. 😅";
    } if (wakeUp >= 6) {
        document.getElementById("wakeTimeMsg").textContent = "Good Morning! 🌞";
    } else {
        document.getElementById("wakeTimeMsg").textContent = "It's too early to wake up!";
    }
}