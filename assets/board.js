var newcolor = false

var bg_red = 111;
var bg_green = 0;
var bg_blue = 222;

var brush_red = 255;
var brush_green = 255;
var brush_blue = 255;

var erase_red = 111;
var erase_green = 0;
var erase_blue = 222;

function setup(){
    can = createCanvas(windowWidth+100, windowHeight+100);
    can.position(0, 0);
    can.style("z-index", -7);

    label = createP("Stroke Weight slider");
    label.position(width/2 - 100, height-200);
    label.style("color", "white")
    diascroll = createSlider(1, 100, 50, 1);
    diascroll.position(width/2 - 100, height-150);

    background(bg_red, bg_green, bg_blue);
}

function draw(){
    if(newcolor){
        background(bg_red, bg_green, bg_blue);
        newcolor = false;
    }
    fill(brush_red, brush_green, brush_blue);
    noStroke()
    if(mouseIsPressed){
        ellipse(mouseX, mouseY, diascroll.value());
    }
}