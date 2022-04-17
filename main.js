//JS will be coded here
leftWristx = 0;
rightWrstx = 0;
difference = 0;
var nameorword = prompt("Please enter your name", "Harry Potter");
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);
    }
}

function draw() {
    background('#1c9c4f');
    document.getElementById("gapheightwidth").innerHTML = "The text size is " + difference + "px";
    textSize(difference);
    fill('#10d4e6');
    text(nameorword, 50, 400);
}