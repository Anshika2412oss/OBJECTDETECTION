img="";
status ="";
objects=[];
function preload(){
    img= loadImage('Idkk.jpg');
}

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCanvas(VIDEO);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects "
}
function modelLoaded(){
    console.log("Model Loaded");
    status= true;
   
}

function gotResult(error, results){
    objects= results;
        if (error){
        console.log(error);
    }
    console.log(results);
    objects= results;
    }
function draw(){
    image(video, 0, 0, 380, 380);
    if(status!=""){
        r= random(255);
        g= random(255);
        b= random(255);
        objectDetector.detect(video,gotResult)
        
        for(var i=0; i <objects.length; i++){
            document.getElementById("number_of_objects").innerHTML = "Status: OBJECT DETECTED"
            fill(r, g, b );
            percent= floor(objects[i].confidence * 100);
            text(objects[i].label +" "+ percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke(r, g, b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height )
        }
    }
    

}
