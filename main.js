
const circle = document.getElementById('circle');
const downarrowleft = document.getElementById('downarrowleft');
const downarrowright = document.getElementById('downarrowright');
const rotation = document.querySelector('rotation');

const mainpic = document.getElementById('mainpic');
const mainFood = document.getElementById('mainFood');

const imgpicc1 = document.getElementById('imgpicc1');
const imgpicc2 = document.getElementById('imgpicc2');
const imgpicc3 = document.getElementById('imgpicc3');
const imgpicc4 = document.getElementById('imgpicc4');
const imgpicc5 = document.getElementById('imgpicc5');
const imgpicc6 = document.getElementById('imgpicc6');
const imgpicc7 = document.getElementById('imgpicc7');
const imgpicc8 = document.getElementById('imgpicc8');

const shape = document.getElementById('shape');

const NumOne = document.getElementById('NumOne');
const Numtwo = document.getElementById('Numtwo');
const firstContent = document.getElementById('firstContent')


var imageCounter=0;
var imageArray=[
    "img/2-1.png",
    "img/03-1.png",
    "img/3-2.png" ,
    "img/04.png" ,
    "img/05-2.png",
    "img/8-2.png" ,
    "img/9-1.png" ,
    "img/1.png",
]

let clock = 0;
let food = 0;

downarrowright.addEventListener('click',rotateclockwise );
downarrowleft.addEventListener('click',rotateanti_clockwise);


function rotateclockwise(){
    clock += 45;
    food -= 45;
   
    circle.style.transform = 'rotate('+clock +'deg)';
    imgpicc1.style.transform = 'rotate('+food+'deg)';
    imgpicc2.style.transform = 'rotate('+food+'deg)';
    imgpicc3.style.transform = 'rotate('+food+'deg)';
    imgpicc4.style.transform = 'rotate('+food+'deg)';
    imgpicc5.style.transform = 'rotate('+food+'deg)';
    imgpicc6.style.transform = 'rotate('+food+'deg)';
    imgpicc7.style.transform = 'rotate('+food+'deg)';
    imgpicc8.style.transform = 'rotate('+food+'deg)';

    imageCounter = (imageCounter - 1 + imageArray.length) % imageArray.length;

    mainpic.src = imageArray[imageCounter];
    
    mainFood.classList.add('foodAnimationScale');
    mainpic.classList.add('foodAnimationRotate');

    setTimeout(function(){
        mainFood.classList.remove('foodAnimationScale');
        mainpic.classList.remove('foodAnimationRotate');
    },1000);

    
    shape.classList.toggle('is_active');
    downarrowleft.classList.toggle('button_Active');
    downarrowright.classList.toggle('button_Active');

    firstContent.classList.toggle('contentSize');
    setTimeout(function(){
        firstContent.classList.remove('contentSize');
    },1000);
    
    if (NumOne.style.display!=='none'){
        NumOne.style.display ='none';
        Numtwo.style.display = 'block';
    }
    else{
        NumOne.style.display ='block';
        Numtwo.style.display = 'none';
    }
   
}

function rotateanti_clockwise(){
    clock -= 45;
    food += 45;
    circle.style.transform = 'rotate('+clock +'deg)';
    imgpicc1.style.transform = 'rotate('+food+'deg)';
    imgpicc2.style.transform = 'rotate('+food+'deg)';
    imgpicc3.style.transform = 'rotate('+food+'deg)';
    imgpicc4.style.transform = 'rotate('+food+'deg)';
    imgpicc5.style.transform = 'rotate('+food+'deg)';
    imgpicc6.style.transform = 'rotate('+food+'deg)';
    imgpicc7.style.transform = 'rotate('+food+'deg)';
    imgpicc8.style.transform = 'rotate('+food+'deg)';
    
    imageCounter = (imageCounter + 1)% imageArray.length;
    mainpic.src = imageArray[imageCounter];
    
    mainFood.classList.add('foodAnimationScale');
    mainpic.classList.add('foodAnimationRotate');
    setTimeout(function(){
        mainFood.classList.remove('foodAnimationScale');
        mainpic.classList.remove('foodAnimationRotate');
    },1000);

    shape.classList.toggle('is_active');
    downarrowleft.classList.toggle('button_Active');
    downarrowright.classList.toggle('button_Active');

    firstContent.classList.toggle('contentSize');
    setTimeout(function(){
        firstContent.classList.remove('contentSize');
    },1000);
    
    if (NumOne.style.display!=='none'){
        NumOne.style.display ='none';
        Numtwo.style.display = 'block';
    }
    else{
        NumOne.style.display ='block';
        Numtwo.style.display = 'none';
    }
}








