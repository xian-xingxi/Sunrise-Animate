// Draw Sunrise

// Setup Canvas
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.height = 400;
cnv.width = 400;

//Global Variables
let leftCloudX = 135;
let rightCloudX = 175;
let sunY = 300;
let sunRadius = 15;
let sunGreen = 0;

let frameCount = 0;

// Main Program Loop
requestAnimationFrame(animate);
function animate() {
    // Updates Variables
    frameCount++;

    // Run After Frames
    if (frameCount >= 60) {
        // Sun Rises
        if (sunY >= 100) {
            sunY--;
        }
        if (sunRadius <= 25) {
            sunRadius += 0.05;
        }
    }
    if (frameCount >= 45) {
        sunGreen++;
    }
    if (frameCount >= 120) {
        // Left Cloud move off screen
        leftCloudX--;
    }
    if (frameCount >= 125) {
        // Right Cloud move off screen
        rightCloudX++;
    }

    // Blue Sky
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 400, 300);

    // Sun
    ctx.fillStyle = "rgb(255," + sunGreen + ", 0)";
    ctx.beginPath();
    ctx.arc(200, sunY, sunRadius, 0, 2 * Math.PI);
    ctx.fill();

    // Green Grass
    ctx.fillStyle = "green";
    ctx.fillRect(0, 300, 400, 100);

    // Cloud Image
    ctx.drawImage(cloud, leftCloudX, 120); // Left Cloud
    ctx.drawImage(cloud, rightCloudX, 100); // Right Cloud

    requestAnimationFrame(animate);
}