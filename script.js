function updateUTCTime () {
    const uctTimeElement = document.getElementById('utcTime');
    const now = new Date();
    uctTimeElement.textContent = now.toUTCString();
}

setInterval(updateUTCTime, 1000);

updateUTCTime()