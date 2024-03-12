(() => {
// create function that run the website
    // set up the timer value
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    // create countdown function 
    // first the function is going to show the current time
    function countDown() {
        const currentTime = new Date().getTime();
        // set new year eve date (time stamp) and time (24 hours clock")
        const newYearEve = new Date("December 31, 2024 23:59:59").getTime();
        // create new variable to calculate time left till new year
        const tillNewYear = newYearEve - currentTime;

        // console.log(tillNewYear);

        const daysEle = document.getElementById("days");
        daysEle.innerText = "Hello";

        console.log(daysEle);

    }

    function run() {
        countDown();

    }
    // call back function
    run();
})();
