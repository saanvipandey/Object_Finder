status = "";

function setup()
{
    canvas = createCanvas(600, 250);
    canvas.position(390, 320);
    video = createCapture(VIDEO);
    video.size(600, 250);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    
}