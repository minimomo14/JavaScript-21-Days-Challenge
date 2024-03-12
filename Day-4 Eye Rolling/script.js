(() => {
    // create run function
    function run() {
        const bodyElem = document.querySelector("body");
        const eyeElem = document.querySelectorAll(".eye");

        function onMouseMove({pageX, pageY}) {
            // check if the mouse moving
            // console.log("Moved")
            eyeElem.forEach((eyeElem) => {
               const {left, top} = eyeElem.getBoundingClientRect();

               const eyeCenterX = left + eyeElem.offsetWidth / 2;
               const eyeCenterY = top + eyeElem.offsetHeight / 2;
            // calculate the radiant 
                const radian = Math.atan2(pageX - eyeCenterX, pageY - eyeCenterY);
            // then to find the angle (degree)
                const angle = radian * 180 / Math.PI * -1;
                console.log(angle)
            // use the angle value to set movement of the eyeballs
                eyeElem.style.transform = `rotate(${angle}deg)`;
            });
        }

        // for the body element addEventListener() to follow the move
        bodyElem.addEventListener("mousemove", onMouseMove);
    }
    run();
})();