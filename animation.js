var counter=53
var plusMinus = 3
var textList =[]
const start = 36;
const end = 93;
const step = 4;
var animationCheck = true;
var newNum
const animationFolder = 'demo/'

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
        next(0)
        
        }
    else{
        loadCounter += step;
        load(loadCounter);
    }
    }

function next(i){    
    
    if(animationCheck){
       var pre=document.getElementById('animation');

    pre.innerHTML=textList[i];
    newNum = i+1
    if (newNum>=textList.length){
        newNum = 0;
    } 
    setTimeout(() => {  next(newNum); }, 200);
        }
    }
function animationPause(){
    if(animationCheck){
        animationCheck=false;
        document.getElementById('pauseButton').value = 'Play'
    }
    else{
        animationCheck=true;
        next(newNum)
        document.getElementById('pauseButton').value = 'Pause'
    }
}