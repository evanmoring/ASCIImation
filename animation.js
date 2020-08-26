const start = 36;
const end = 93;
const step = 4;
const stepQuantity = Math.floor((end-start)/step);
var textList =new Array(stepQuantity)
var animationCheck = true;
var newNumber = 0;
const animationFolder = 'demo/';
const msBetweenFrames = 200;
var loadCounter = 0;

function load(){
    for(let i=0;i<stepQuantity;i++){
    console.log('i '+i)
    currentFrame = (start+i*step)
    let stringCounter = currentFrame.toString();
    while (3 > stringCounter.length){
        stringCounter = '0'+stringCounter
    }
    textFile = stringCounter+'.txt';
    var xhr=new XMLHttpRequest;
    xhr.open('GET',animationFolder+textFile);
    xhr.frameNumber = i
    xhr.onload = addTxt
    xhr.send() 
    } 

}
function addTxt(){

    textList[this.frameNumber]=(this.response);
    loadCounter +=1
    if (loadCounter == stepQuantity) {
        playFrame(newNumber)
    }
    }

function playFrame(i){    
    
    if(animationCheck){
       var pre=document.getElementById('animation');

    pre.innerHTML=textList[i];
    newNum = i+1
    if (newNum>=textList.length){
        newNum = 0;
    } 
    setTimeout(() => {  playFrame(newNum); }, msBetweenFrames);
        }
    }
function animationPause(){
    if(animationCheck){
        animationCheck=false;
        document.getElementById('pauseButton').value = 'Play'
    }
    else{
        animationCheck=true;
        playFrame(newNumber)
        document.getElementById('pauseButton').value = 'Pause'
    }
}