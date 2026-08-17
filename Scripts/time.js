document.addEventListener("DOMContentLoaded", () => {
const dateTimeOutput = document.getElementById("dateTime");

function addOrdinalSuffix(day) {
    if (day >= 11 && day <= 13) {
    return `${day}th`;
    }

    switch (day % 10) {
    case 1:
        return `${day}st`;

    case 2:
        return `${day}nd`;

    case 3:
        return `${day}rd`;

    default:
        return `${day}th`;
    }
}

function updateDateAndTime() {
    const now = new Date();

    const weekday = now.toLocaleDateString("en-GB", {
    weekday: "long"
    });

    const day = addOrdinalSuffix(now.getDate());

    const month = now.toLocaleDateString("en-GB", {
    month: "long"
    });

    const year = now.getFullYear();

    const time = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
    });

    dateTimeOutput.innerText =
    `${weekday}, ${day} ${month} ${year} | ${time}`;
}

updateDateAndTime();

setInterval(updateDateAndTime, 1000);
});
