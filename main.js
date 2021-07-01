const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas')
var blw;
var blh;
var plx = 100;
var ply = 750;

function player_update(){
    fabric.Image.fromURL("Pose-Thor-PNG.png",function(Img){
    player_object = Img;

    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
    blo.scaleToWidth(blw);
    blo.scaleToHeight(blh);
    blo.set({
        top:ply,
        left:plx
    });
    canvas.add(blo);
    });
}