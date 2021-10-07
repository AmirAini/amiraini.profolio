
var progressBar = document.getElementById('progress-bar');
var container = document.getElementById('container');
var percentage = document.getElementById('percentage');
var section1 = document.getElementById('section1');
var section2 = document.getElementById('section2');


//declare all layers
var layer0 = document.getElementById('layer0');
var layer1 = document.getElementById('layer1');
var layer2 = document.getElementById('layer2');
var layer3 = document.getElementById('layer3');
var layer4 = document.getElementById('layer4');
var layer5 = document.getElementById('layer5');
var layer6 = document.getElementById('layer6');

var layer8 = document.getElementById('layer8');

//declare layer sizes 

var containerPos = {w:600, h:1200}
var layer0Pos = {x:0, y:0, w:3000, h:600};
var layer1Pos = {x:0, y:0, w:3000, h:600};
var layer2Pos = {x:0, y:0, w:3000, h:600};
var layer3Pos = {x:0, y:0, w:3000, h:600};
var layer4Pos = {x:0, y:0, w:3000, h:600};
var layer5Pos = {x:0, y:0, w:3000, h:600};
var layer6Pos = {x:0, y:0, w:3000, h:600};

var layer8Pos = {x:0, y:0, w:800, h:600};
var layer9Pos = {x:0, y:0, w:800, h:600};
var layer10Pos = {x:0, y:0, w:800, h:600};
var layer11Pos = {x:0, y:0, w:800, h:600};
var layer12Pos = {x:0, y:0, w:800, h:600};

//For Scroll Tracking 

window.addEventListener("scroll", onScroll);

function onScroll (evt) {
    console.log("window scroll y-axis: ", window.scrollY);
    var progressWidth = (window.scrollY / (container.scrollHeight - window.innerHeight)) * 100;
    //(current scroll / (total scroll space, not included viewing) - viewing)
    //formula

    progressBar.style.width = progressWidth + '%';

    if (scrollY + 100 >= section2.offsetTop){
        console.log("You are in section 2");
    } else if (scrollY < section2.offsetTop){
        console.log("you are in section 1");
    }
}




//For Mouse Tracking 

window.addEventListener("mousemove",onMouseMove);

function onMouseMove (evt) {
    var mouse = {x: evt.pageX - container.offsetLeft, y: evt.pageY - container.offsetTop};
    // console.log(`x: ${mouse.x}, y: ${mouse.y}`);

    layer0Pos.x = (-mouse.x*0.01) + (containerPos.w/2 - layer0Pos.w/2);
    layer0.style.left = layer0Pos.x + 'px';

    layer1Pos.x = (-mouse.x*0.05) + (containerPos.w/2 - layer1Pos.w/2);
    layer1.style.left = layer1Pos.x + 'px';

    layer2Pos.x = (-mouse.x*0.1) + (containerPos.w/2 - layer2Pos.w/2);
    layer2.style.left = layer2Pos.x + 'px';

    layer3Pos.x = (-mouse.x*0.3) + (containerPos.w/2 - layer3Pos.w/2);
    layer3.style.left = layer3Pos.x + 'px';

    layer4Pos.x = (-mouse.x*0.5) + (containerPos.w/2 - layer4Pos.w/2);
    layer4.style.left = layer4Pos.x + 'px';

    layer5Pos.x = (-mouse.x*0.7) + (containerPos.w/2 - layer5Pos.w/2);
    layer5.style.left = layer5Pos.x + 'px';

    layer6Pos.x = (-mouse.x*1.4) + (containerPos.w/2 - layer6Pos.w/2);
    layer6.style.left = layer6Pos.x + 'px';




    // Section 2
    layer8Pos.x = (-mouse.x *0.2) + (containerPos.w/2 - layer8Pos.w/2);
    layer8.style.left = layer8Pos.x + 'px';
    
    layer9Pos.x = (-mouse.x *0.4) + (containerPos.w/2 - layer9Pos.w/2);
    layer9.style.left = layer9Pos.x + 'px';
    
    layer10Pos.x = (-mouse.x *0.5) + (containerPos.w/2 - layer10Pos.w/2);
    layer10.style.left = layer10Pos.x + 'px';
    
    layer11Pos.x = (-mouse.x *0.7) + (containerPos.w/2) - layer11Pos.w/2;
    layer11.style.left = layer8Pos.x + 'px';

    
    layer12Pos.x = (-mouse.x *0.3) + (containerPos.w/2 - layer12Pos.w/2);
    layer12.style.left = layer8Pos.x + 'px';

}
