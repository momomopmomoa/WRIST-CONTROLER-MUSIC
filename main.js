var song1 = "music.mp3";
var song2 = "Harry-Potter-Theme.mp3";
RightWristX = 0;
RightWristY = 0;
LeftWristX = 0;
LeftWristY = 0;

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

function modalLoaded(){
    console.log('POSENET IS INITIALIZED')
}

function gotPoses(results){
    console.log(results.length);
    if(results.length > 0){
        console.log(results);
        RightWristX = results[0].pose.rightwrist.x;
        RightWristY = results[0].pose.rightwrist.y;
        LeftWristX = results[0].pose.leftwrist.x;
        LeftWristY = results[0].pose.leftwrist.y;
    }
}

function draw(){
    image(video, 0, 0, 600, 500);
}