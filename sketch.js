var canvas;
var music;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = "purple";

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "black";

    //create box sprite and give velocity

    box = createSprite(Math.round((20,750)),100, 40,40);
    box.shapeColor = "white";
    box.velocityX = 5;
    box.velocityY = 8;

}

function draw() {
    background("aquamarine");
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);
    if(block1.isTouching(box)&&box.bounceOff(block1)){
        box.shapeColor="blue";
        music.play();
    }

    
    if(block3.isTouching(box)&&box.bounceOff(block3)){
        box.shapeColor="purple";
        music.play();
    }

    
    if(block4.isTouching(box)&&box.bounceOff(block4)){
        box.shapeColor="black";
     
        music.play();
    }
    
    
    if(block2.isTouching(box)){
        box.shapeColor="orange";
        box.setVelocity(0,0)
        music.stop();
    }

    //add condition to check if box touching surface and make it box

    drawSprites();
}
