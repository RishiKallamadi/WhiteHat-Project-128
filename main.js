LeftWristX = 0
LeftWristY = 0
RightWristX = 0
RightWristY = 0

function preload() {
    HarryPotter = loadSound("music.mp3")
    PeterPan = loadSound("peter_pan.mp3")
}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw() {
    image(video, 0, 0, 500, 400)
}

function modelLoaded() {
    console.log("PoseNet Initialized!")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)

        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y
        console.log("Left Wrist Coordinates - " + leftWristX + ", " + leftWristY)

        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
        console.log("Right Wrist Coordinates - " + rightWristX + ", " + rightWristY)
    }
}