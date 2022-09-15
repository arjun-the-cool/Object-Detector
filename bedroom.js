objects = [results];
status="";
function preload()
{
    img = "da coconut nut.jpg";
    img2 = loadImage('bathroom.png');
    img3 = loadImage('bedroom.png');
    img4 = loadImage('cabinet.png');
    img5 = loadImage('lobby.png');
    img6 = loadImage('kitchen.png');
}
function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";

}

function draw()
{
    image(img2, 0, 0, 640, 420);
    if(status != "")
    {
        for (i=0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FFOOOO");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
            document.getElementById("detect").innerHTML = "There are 2 object in this room out of which (null) have been detected."
        }
    }
}

function modelLoaded()
{
    console.log("M o d e l  L o a d e d !");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error) {
        console.log(error);
    }
    console.log(results);
}