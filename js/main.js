// Q'oshimcha box
const elLeftBtn = document.getElementById('id-btnleft');
const elLeftBtnBox = document.getElementById('id-btnleftbox');


//raqamlar idlari

const elZero = document.getElementById('id-zero');
const elOne = document.getElementById('id-one');
const elTwo = document.getElementById('id-two');
const elThree = document.getElementById('id-three');
const elFouth = document.getElementById('id-fouth');
const elFive = document.getElementById('id-five');
const elSix = document.getElementById('id-six');
const elSeven = document.getElementById('id-seven');
const elEight = document.getElementById('id-eight');
const elNine = document.getElementById('id-nine');


// amallar idlari

const elPlus = document.getElementById('id-plus');
const elMinus = document.getElementById('id-minus');
const elMultiply = document.getElementById('id-multiply');
const elDivede = document.getElementById('id-devide');
const elSin = document.getElementById('id-sin');
const elCos = document.getElementById('id-cos');
const elTan = document.getElementById('id-tan');
const elPi = document.getElementById('id-pi');
const elLog = document.getElementById('id-log');
const elBrOpen = document.getElementById('id-bropen');
const elBrClose = document.getElementById('id-brclose');
const elSqrt = document.getElementById('id-sqrt');
const elPow = document.getElementById('id-pow');
const elPercent = document.getElementById('id-percent');
const elDot = document.getElementById('id-dot');
const elRemoveAll = document.getElementById('id-removeall');
const elRemove = document.getElementById('id-remove');
const elResult = document.getElementById('id-result');


// output
const elOutput = document.querySelector('p');


// qo'shimcha box

let elCount = 0;
elLeftBtn.addEventListener('click', function() {
  if(elCount == 0){
    elLeftBtnBox.style.right = '0';
    elLeftBtn.style.right = '300px'
    elCount++;
  }
  else {
    elLeftBtnBox.style.right = '-295px';
    elLeftBtn.style.right = '5px'
    elCount = 0;
  }
});



// raqamlarni olish

elZero.addEventListener('click', number);
elOne.addEventListener('click', number);
elTwo.addEventListener('click', number);
elThree.addEventListener('click', number);
elFouth.addEventListener('click', number);
elFive.addEventListener('click', number);
elSix.addEventListener('click', number);
elSeven.addEventListener('click', number);
elEight.addEventListener('click', number);
elNine.addEventListener('click', number);


//amallar

elMinus.addEventListener('click', number);
elPlus.addEventListener('click', number);
elDivede.addEventListener('click', number);
elMultiply.addEventListener('click', number);
elDot.addEventListener('click', number);
elRemove.addEventListener('click', number);
elRemoveAll.addEventListener('click', number);
elBrOpen.addEventListener('click', number);
elBrClose.addEventListener('click', number);



function number(element) {
  element.preventDefault();
  elOutput.textContent += element.target.value;
}

elResult.addEventListener('click', addnum);
function addnum() {
let res = (eval(elResult.innerHTML));
elResult.textContent = res;
}