var song1 = "music.mp3";
var song2 = "Harry-Potter-Theme.mp3";

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("Harry-Potter-Theme.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 500);
}