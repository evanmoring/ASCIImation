
var textList =[]
const start = 36;
const end = 93;
const step = 4;
var animationCheck = true;
var newNum;
const animationFolder = 'demo/';
const msBetweenFrames = 200;

loadCounter = start
function load(i){
    console.log(i)
    let stringCounter = i.toString();
    while (3 > stringCounter.length){
        stringCounter = '0'+stringCounter
    }
    textFile = stringCounter+'.txt';
    var xhr=new XMLHttpRequest;
    xhr.open('GET',animationFolder+textFile);
    xhr.onload = addTxt
    xhr.send()  
}
function addTxt(){
    textList.push(this.response);
    if(textList.length>=((end-start)/4)){
        playFrame(0)
        
        }
    else{
        loadCounter += step;
        load(loadCounter);
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
        playFrame(newNum)
        document.getElementById('pauseButton').value = 'Pause'
    }
}