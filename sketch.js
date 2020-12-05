//Create variables here
var dog,dogImage,dogImage1,database,foodstock,foods
function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png")
  dogImage1=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  database=firebase.database()
  dog=createSprite(250,300,150,150)
  dog.addImage(dogImage)
  dog.scale=0.15
  foodstock=database.ref('food')
  foodstock.on("value",readstock)
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writestock(foods)
dog.addImage(dogImage1)
}
  drawSprites();
  //add styles here
fill(255,255,254)
text("food remaining "+foods,170,200)
}
function writestock(x){
if(x<=0){
  x=0
}
else{
  x=x-1
}
database.ref('/').update({
  food:x
})
}

function readstock(data){
  foods=data.val()
}

