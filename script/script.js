//---------------1----------------

let upDown = 0;
up.onclick = (e) =>{
    upDown++;
    numericupdown.innerText = upDown;
}

down.onclick = (e) =>{
    upDown--;
    numericupdown.innerText = upDown;
}

//---------------2----------------
const group = document.getElementById('colorBlocks');

let divEl;
const groupClick = (e) =>{
    console.log(e.target);
    divEl = e.target;
}

group.addEventListener('click', groupClick);


buttonBlock.onclick = (e) =>{
    const idEl = divEl.id;
    const divAdd = document.createElement('div');
    divAdd.setAttribute("id", idEl);
    const elem = document.getElementById('colorBlocks');
    elem.appendChild(divAdd);
}

//---------------3----------------
let groupColor = document.getElementById('colorContainer');

const groupColorClick = (e) =>{
    console.log(e.target);

    let color = e.target.style.backgroundColor;
    console.log(color);
    text.style.color = color;
}

groupColor.addEventListener('click', groupColorClick);

//---------------6----------------
const gropuCalc = document.getElementById('buttonsContainer');

let total = [];
let str = "";
isEquals = true;
const groupButtonClick = (e) =>{
    if(isEquals == true){
        total = [];
        isEquals = false;
    }
    
    console.log(e.target);
    const buttonEl = e.target.innerText;
    console.log(buttonEl);

    total.push(buttonEl);
    if(total[0] == '=')
        total.splice(0, 1);

    str = "";

    for (let i = 0; i < total.length; i++) {
        str += total[i];
    }
    
    console.log(total);
    if(e.target.id!="equals")
        display.innerText = str;
}

let result = 0;

gropuCalc.addEventListener('click', groupButtonClick);

equals.onclick =(e) =>{
    isEquals = true;
    result = eval(str);
    console.log(`Res = ${result}`);
    str += '=' + result;
    console.log(str);
    console.log(display);
    display.innerText = str;
    console.log("First");
}

//---------------7----------------
let clientHeihgt = document.documentElement.clientHeight;
console.log(clientHeihgt);

let buttonEl = document.getElementById("hiddenButton");
let hiddenBut = buttonEl.getAttribute("hidden");

let num = document.getElementById("textMain");

buttonEl.setAttribute("hidden", "hidden");

num.onscroll = (e) =>{
    console.log(window.scrollY);

    if(window.scrollY > 750){
        console.log("hi");
        buttonEl.removeAttribute("hidden");
    }

    else{
        buttonEl.setAttribute("hidden", "hidden");
    }
};

hiddenButton.onclick = (e) =>{
    const element = document.getElementById("textMain");
    element.scrollTo(0,-100);
}