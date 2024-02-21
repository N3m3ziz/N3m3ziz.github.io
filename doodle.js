var tl = gsap.timeline({onComplete: createDoodle});

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createDoodle(){

var widthLeft = randomIntFromInterval(50,250);
var widthRight = 600 - widthLeft;

for (let i = 0; i < 3; i++) {
	var pointX = randomIntFromInterval(0,700);
	var pointY = randomIntFromInterval(0,700);
	var pointXa = randomIntFromInterval(0,700);
	var pointYa = randomIntFromInterval(700,0);
	curve [i] = "M" + widthLeft  + ",300 C" + pointX + "," + pointY + " " + pointXa + ","+ pointYa + " " + widthRight + ",300";
}

// Animate 
tl.to('#curve', 	{delay:0.5, duration: 1,attr: { d: curve[0]}, ease: "power3.inOut"});
tl.to('#curve1', 	{duration: 1,attr: { d: curve[1]},  ease: "power3.inOut"}, "<");
tl.to('#curve2', 	{duration: 1,attr: { d: curve[2]},  ease: "power3.inOut"}, "<");
}

createDoodle();