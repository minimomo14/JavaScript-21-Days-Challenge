( () => {
    // set up function to get id element value from canvas
    function setup() {
        const canvas = document.getElementById("falling-snow");
        // set window size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        return {
            canvas,
            canvasContext: canvas.getContext("2d"),
            numberOfSnowFlakes: 250
        }
    }
    // create random function which takes (min, max) to randomly create snow in different sizes.
    function random(min, max) {
        return Math.floor(Math.random() * (max - min +1)) + min;
    }
    // to create snowflakes using the function drawingSnowFlakes();
    function createSnowFlakes(canvas, numberOfSnowFlakes) {
        return [...Array(numberOfSnowFlakes)].map(() => {
            return {
                x: random(0, canvas.width),
                y: random(0, canvas.height),
                opacity: random(0.5, 1),
                radius: random(2, 4),
                speedX: random(-5, 5),
                speedY: random(1, 3)

            }
        });
        // console.log(snow);
    };
    // now is time to actually drawing on canvas that we're already been setup by create function call drawingSnowFlakes();
    // drawingSnowFlakes take 2 param (canvasContext, snow)
    function drawingSnowFlakes(canvasContext, snow) {
        canvasContext.beginPath();
        canvasContext.arc(snow.x, snow.y, snow.radius, 0, Math.PI * 2);
        canvasContext.fillStyle = `rgba(255, 255, 255, ${snow.opacity})`;
        canvasContext.fill();
    };

    // create function moveSnowFlakes() take snow in the param
    function moveSnowFlakes(canvas, snow){
        snow.x += snow.speedX;
        snow.y += snow.speedY;

        if(snow.x > canvas.width) {
            snow.x = 0;
        } else if (snow.x < 0) {
            snow.x = canvas.width;
        }

        if(snow.y > canvas.height) {
            snow.y = 0;
        } else if (snow.y  < 0) {
            snow.y = canvas.height;
        }
    }


    // first create function call run 
    function run() {
       const {canvas, canvasContext, numberOfSnowFlakes } =  setup();
       const snow = createSnowFlakes(canvas, numberOfSnowFlakes);
      
       setInterval(() => {
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        snow.forEach((snow) => drawingSnowFlakes(canvasContext, snow));
        snow.forEach((snow) => moveSnowFlakes(canvas, snow));
       }, 50)
    
       createSnowFlakes(canvas, numberOfSnowFlakes);
       drawingSnowFlakes(canvasContext, snow[0]);
    };
    run();
})();