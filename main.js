function preload() {
    classifier = ml5.imageClassifier('DoodleNet')
}

function setup() {
    canvas = createCanvas(250, 250)
    background("lightgray")
    canvas.center()
    canvas.mouseReleased(classifyCanvas)
}

function draw() {
    strokeWeight(5);
    stroke("black")
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}



function classifyCanvas() 
{
classifier.classify(canvas, gotResult)
}

function Cc() {
    background('white')
}


function gotResult(error, result)
{
if(error == true)
{
console.log("seu desprovido de INTELIGENCIA🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬")
}
else{console.log("bem espertinho vc em??🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬")
console.log(result)}

var algo1 = result[0].label
var algo2 = result[0].confidence

document.getElementById("a1").innerHTML = algo1;
document.getElementById("a2").innerHTML = algo2.toFixed(2);


}





























































































