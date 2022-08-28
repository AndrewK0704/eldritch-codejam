console.log('На выбор предоставляется четыре карты древнего +20');
console.log('На выбор предоставляется один уровнь сложности +5');

console.log('Итого: 25 баллов');

import difficulties from './data/difficulties.js';
import ancientsData from './data/ancients.js';

const azathoth = document.querySelector('.azathoth');
const cthulthu = document.querySelector('.cthulthu');
const iogSothoth = document.querySelector('.iogSothoth');
const shubNiggurath = document.querySelector('.shubNiggurath');

const medium = document.querySelector('.medium');
const shuffleButton = document.querySelector('.shuffle-button');
let indexAncients=0;

const green1 = document.querySelector('.green1');
const green2 = document.querySelector('.green2');
const green3 = document.querySelector('.green3');
const brown1 = document.querySelector('.brown1');
const brown2 = document.querySelector('.brown2');
const brown3 = document.querySelector('.brown3');
const blue1 = document.querySelector('.blue1');
const blue2 = document.querySelector('.blue2');
const blue3 = document.querySelector('.blue3');

let gr=0;
let br=0;
let bl=0;

let check=0;
let flagRepeat=0;

let arrGreen=[];
let arrBrown=[];
let arrBlue=[];

let stage1=[];
let stage2=[];
let stage3=[];

/*-------------------------------------------------------------------*/

azathoth.addEventListener('click', getAzathoth);
function getAzathoth(){
    azathoth.style.border = '2px solid red';
    cthulthu.style.border = 'none';
    iogSothoth.style.border = 'none';
    shubNiggurath.style.border = 'none';    
    indexAncients=1;
    medium.style.background='darkorange';
    shuffleButton.style.background='darkorange'; 
    
    green1.textContent='0';
    green2.textContent='0';
    green3.textContent='0';
    brown1.textContent='0';
    brown2.textContent='0';
    brown3.textContent='0';
    blue1.textContent='0';
    blue2.textContent='0';
    blue3.textContent='0';
}

cthulthu.addEventListener('click', getCthulthu);
function getCthulthu(){
    azathoth.style.border = 'none';
    cthulthu.style.border = '2px solid red';
    iogSothoth.style.border = 'none';
    shubNiggurath.style.border = 'none';
    indexAncients=2; 
    medium.style.background='darkorange'; 
    shuffleButton.style.background='darkorange';  

    green1.textContent='0';
    green2.textContent='0';
    green3.textContent='0';
    brown1.textContent='0';
    brown2.textContent='0';
    brown3.textContent='0';
    blue1.textContent='0';
    blue2.textContent='0';
    blue3.textContent='0';
}

iogSothoth.addEventListener('click', getIogSothoth);
function getIogSothoth(){
    azathoth.style.border = 'none';
    cthulthu.style.border = 'none';
    iogSothoth.style.border = '2px solid red';
    shubNiggurath.style.border = 'none';    
    indexAncients=3;
    medium.style.background='darkorange';
    shuffleButton.style.background='darkorange';

    green1.textContent='0';
    green2.textContent='0';
    green3.textContent='0';
    brown1.textContent='0';
    brown2.textContent='0';
    brown3.textContent='0';
    blue1.textContent='0';
    blue2.textContent='0';
    blue3.textContent='0';
}

shubNiggurath.addEventListener('click', getShubNiggurath);
function getShubNiggurath(){
    azathoth.style.border = 'none';
    cthulthu.style.border = 'none';
    iogSothoth.style.border = 'none';
    shubNiggurath.style.border = '2px solid red';   
    indexAncients=4; 
    medium.style.background='darkorange';
    shuffleButton.style.background='darkorange';

    green1.textContent='0';
    green2.textContent='0';
    green3.textContent='0';
    brown1.textContent='0';
    brown2.textContent='0';
    brown3.textContent='0';
    blue1.textContent='0';
    blue2.textContent='0';
    blue3.textContent='0';
}

medium.addEventListener('click', getMedium);
function getMedium(){
    if(indexAncients!==0){
        medium.style.background='red';
    }   
}

shuffleButton.addEventListener('click', getShuffleButton);
function getShuffleButton(){
    if(indexAncients!==0 &&  medium.style.background==='red'){
        shuffleButton.style.background='red';

        green1.textContent=ancientsData[indexAncients-1].firstStage.greenCards;
        green2.textContent=ancientsData[indexAncients-1].secondStage.greenCards;
        green3.textContent=ancientsData[indexAncients-1].thirdStage.greenCards;
        brown1.textContent=ancientsData[indexAncients-1].firstStage.brownCards;
        brown2.textContent=ancientsData[indexAncients-1].secondStage.brownCards;
        brown3.textContent=ancientsData[indexAncients-1].thirdStage.brownCards;
        blue1.textContent=ancientsData[indexAncients-1].firstStage.blueCards;
        blue2.textContent=ancientsData[indexAncients-1].secondStage.blueCards;
        blue3.textContent=ancientsData[indexAncients-1].thirdStage.blueCards;

        gr=ancientsData[indexAncients-1].firstStage.greenCards+ancientsData[indexAncients-1].secondStage.greenCards+ancientsData[indexAncients-1].thirdStage.greenCards;
        br=ancientsData[indexAncients-1].firstStage.brownCards+ancientsData[indexAncients-1].secondStage.brownCards+ancientsData[indexAncients-1].thirdStage.brownCards;
        bl=ancientsData[indexAncients-1].firstStage.blueCards+ancientsData[indexAncients-1].secondStage.blueCards+ancientsData[indexAncients-1].thirdStage.blueCards;

        flagRepeat=0;
        arrGreen=[];
        check=0;
        for(let i=0; i<gr; ){
            flagRepeat=0;
            if(arrGreen.length!==0){
                check=getRandomNum(18);
                for(let j=0;j<arrGreen.length; j++){
                    if(check===arrGreen[j]){
                        flagRepeat=1;
                    }
                }
                if (flagRepeat!==1){
                    arrGreen[i]=check;
                    i++;
                }
            } else {
                arrGreen[i]=getRandomNum(18);
                i++;
            }
        }

        flagRepeat=0;
        arrBrown=[];
        check=0;
        for(let i=0; i<br; ){
            flagRepeat=0;
            if(arrBrown.length!==0){
                check=getRandomNum(21);
                for(let j=0;j<arrBrown.length; j++){
                    if(check===arrBrown[j]){
                        flagRepeat=1;
                    }
                }
                if (flagRepeat!==1){
                    arrBrown[i]=check;
                    i++;
                }
            } else {
                arrBrown[i]=getRandomNum(21);
                i++;
            }
        }

        flagRepeat=0;
        arrBlue=[];
        check=0;
        for(let i=0; i<bl; ){
            flagRepeat=0;
            if(arrBlue.length!==0){
                check=getRandomNum(12);
                for(let j=0;j<arrBlue.length; j++){
                    if(check===arrBlue[j]){
                        flagRepeat=1;
                    }
                }
                if (flagRepeat!==1){
                    arrBlue[i]=check;
                    i++;
                }
            } else {
                arrBlue[i]=getRandomNum(12);
                i++;
            }
        }        
     

        console.log(arrGreen)
        console.log(arrBrown)
        console.log(arrBlue)


        stage1=[];
        flagRepeat=0;
        check=0;

        stage1=setStage(ancientsData[indexAncients-1].firstStage.greenCards, gr, arrGreen);
        stage1=stage1.concat(setStage(ancientsData[indexAncients-1].firstStage.brownCards, br, arrBrown));
        stage1=stage1.concat(setStage(ancientsData[indexAncients-1].firstStage.blueCards, bl, arrBlue));

        function setStage(valueStage, valueFull, arrColor){
            let arrStage=[];
            flagRepeat=0;
            check=0;

            if(valueStage!==0){ 
                for(let i=0; i<valueStage; ){
                    flagRepeat=0;
                    if(arrStage.length!==0){
                        check=getRandomNum(valueFull)-1;
                        for(let j=0;j<arrStage.length; j++){
                            if(arrStage[j]===arrColor[check]){
                                flagRepeat=1;
                            }
                        }
                        if (flagRepeat!==1){
                            arrStage[i]=arrColor[check];
                            i++;
                        }
                    } else {
                        arrStage[i]=arrColor[getRandomNum(valueFull)-1];
                        i++;
                    }
                }   
            }
            
            return arrStage;  

        }
        console.log(stage1)
    }


}

function getRandomNum(max) {
    return Math.floor(Math.random() * max)+1;
}

