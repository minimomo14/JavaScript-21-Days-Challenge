(() => {
// create function that run the website
    // set up the timer value
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    // create function setInnerText() take id and text in the params
    function setInnerText(id, text) {
        const element = document.getElementById(id);
        element.innerText = text;
    }

    // create countdown function 
    // first the function is going to show the current time
    function countDown() {
        const currentTime = new Date().getTime();
        // set new year eve date (time stamp) and time (24 hours clock")
        const newYearEve = new Date("December 31, 2024 23:59:59").getTime();
        // create new variable to calculate time left till new year
        const tillNewYear = newYearEve - currentTime;

        // console.log(tillNewYear);

        // const days = document.getElementById("days");
        // days.innerText = Math.floor(tillNewYear / DAY);
        setInnerText("days", Math.floor(tillNewYear / DAY));

        // const hours = document.getElementById("hours");
        // hours.innerText = Math.floor(tillNewYear % DAY / HOUR);
        setInnerText("hours", Math.floor(tillNewYear % DAY / HOUR));

        // const minutes = document.getElementById("minutes");
        // minutes.innerText = Math.floor(tillNewYear % HOUR / MINUTE);
        setInnerText("minutes", Math.floor(tillNewYear % HOUR / MINUTE));

        // const seconds = document.getElementById("seconds");
        // seconds.innerText = Math.floor(tillNewYear % MINUTE / SECOND);
        setInnerText("seconds", Math.floor(tillNewYear % MINUTE / SECOND));

    }

    function run() {
        countDown();
        //  to run the countdown function when run function called it'll run every milliseconds as we set the SECOND at the beginning. 
        setInterval(countDown, SECOND);

    }
    // call back function
    run();
})();
