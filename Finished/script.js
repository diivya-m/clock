
function updateClock() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");
    // console.log(timeElement, dateElement);

    const now = new Date()
    const hours = now.getHours() % 12 || 12;
    const minutes = now.getMinutes().toString().padStart(2, "0")
    /*we use this if the time is in single digit then screen will shrink
    so we 1st convert it to string "" then we add padding of whats
    max then if not that then add 0 at the begin hence we used padstart
    or we could also write this in switch case method converting 
    each case "1" to "01" or minutes<10 ? `0${minutes}` : `${minutes}`;*/
    const seconds = now.getSeconds().toString().padStart(2, "0")
    const ampm = now.getHours() <= 12 ? "AM" : "PM"

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    timeElement.textContent = `${hours} : ${minutes} : ${seconds} : ${ampm}`
    dateElement.textContent = now.toLocaleDateString(undefined, options)
}

setInterval(updateClock, 1000);
updateClock()