(() => {
    // create run function
    function run() {
        const bodyElem = document.querySelector("body");
        const eyeElem = document.querySelectorAll("eye");

        function onMouseMove() {
            // check if the mouse moving
            console.log("Moved")
        }

        // for the body element addEventListener() to follow the move
        bodyElem.addEventListener("mousemove", onMouseMove)

    }
    run();
})();