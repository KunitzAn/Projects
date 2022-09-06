var countsDiv = document.getElementById("score");
let boxesArr = document.getElementsByClassName("box");


function setArrow(arrowId) {
    let chosenArrow = document.getElementById(arrowId);
    var counts = countsDiv.innerHTML;

    /* decrease counts and set arrow */
    if (counts>=10 && chosenArrow.classList.contains("invisible-arrow")){
        countsDiv.innerHTML = (counts - 10);
        chosenArrow.classList.remove("invisible-arrow");
        chosenArrow.classList.add("visible-arrow");
    } 
}


var coloredBoxes = 0;
var updatedColoredBoxes = 0;

localStorage.setItem("coloredBoxes", coloredBoxes);
localStorage.setItem("updatedColoredBoxes", updatedColoredBoxes);


function stopBlinking(boxesArr) {
    for(let i = 0; i< boxesArr.length; i++) {
        boxesArr[i].classList.remove("blinking-boxes");
        boxesArr[i].classList.add("black-boxex");
    }
}


const myInterval = setInterval(start, 20000);
let k = 9; /* boxes amount */
function start() {
    k--;
    if(k=0) clearInterval(myInterval); /*stop calling function after all boxes are colored */

    for(let i = 0; i< boxesArr.length; i++) {
        boxesArr[i].classList.remove("black-boxex");
        boxesArr[i].classList.add("blinking-boxes");
    }

    const myTimeOut = setTimeout(automaticalyColor, 4000);
    function automaticalyColor() {
        /*var updatedColoredBoxes1 = updatedColoredBoxes;*/
        let p = localStorage.getItem("updatedColoredBoxes");
        let b = localStorage.getItem("coloredBoxes")
        if(p == b)  {

            clearTimeout(myTimeOut);
            stopBlinking(boxesArr);
            let chosenBox;

            randomBox();
            function randomBox() {
            /* choose box */
            let minB = 1;
            let maxB = 9;
            var randomNumberBox = Math.floor(Math.random() * (maxB - minB + 1) + minB);
            if (randomNumberBox == 1) {       
                chosenBox=document.getElementById("1");
            } else if (randomNumberBox == 2) {
                chosenBox=document.getElementById("2");
            } else if (randomNumberBox == 3){
                chosenBox=document.getElementById("3");
            } else if (randomNumberBox == 4) {
                chosenBox=document.getElementById("4");
            } else if (randomNumberBox == 5){
                chosenBox=document.getElementById("5");
            } else if (randomNumberBox == 6) {
                chosenBox=document.getElementById("6");
            } else if (randomNumberBox == 7){
                chosenBox=document.getElementById("7");
            } else if (randomNumberBox == 8) {
                chosenBox=document.getElementById("8");
            } else if (randomNumberBox == 9){
                chosenBox=document.getElementById("9");
            }
            return chosenBox;
            }
           
            while(chosenBox.classList.contains("pink-box") || chosenBox.classList.contains("green-box") || chosenBox.classList.contains("blue-box")) {
                randomBox();
            }
        
            /* choose color */
            let min = 1;
            let max = 3;
            var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        
            colorBox(chosenBox, randomNumber);
            function colorBox(chosenBox, randomNumber) {                   
                if (randomNumber == 1) {       
                    chosenBox.classList.add("pink-box");
                } else if (randomNumber == 2) {
                    chosenBox.classList.add("green-box");
                } else {
                    chosenBox.classList.add("blue-box");
                }
            }
            let x = localStorage.getItem("updatedColoredBoxes");
            x++;
            localStorage.setItem("updatedColoredBoxes", x);
            let b = localStorage.getItem("coloredBoxes");
            b++;
            localStorage.setItem("coloredBoxes", b);
        } else {
            clearTimeout(myTimeOut);
            let b = localStorage.getItem("coloredBoxes");
            b++;
            localStorage.setItem("coloredBoxes", b);
        }
    } 
}

/*
function start() {

 
    for(let i = 0; i< boxesArr.length; i++) {
        boxesArr[i].classList.remove("black-boxex");
        boxesArr[i].classList.add("blinking-boxes");
    }

  
    let sec = 5;
    let timer = setInterval(function(){
        sec--; 
        if((sec<=0 && coloredBoxes<updatedColoredBoxes) || (sec<=0 && updatedColoredBoxes == 0)) {
            clearInterval(timer);
          
            stopBlinking(boxesArr);
            updatedColoredBoxes ++;
          
            let theBox = document.getElementById("6");
            theBox.classList.add("pink-box");
        }        

    }, 1000);

    coloredBoxes = updatedColoredBoxes;

}
*/

function setColor(clicked_id) {
    let id = clicked_id;
    var chosenBox = document.getElementById(id);
    var counts = countsDiv.innerHTML;

    /* choose random color */
    let min = 1;
    let max = 3;
    var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

    function colorBox(chosenBox, randomNumber) {
        chosenBox.classList.remove("pink-box");
        chosenBox.classList.remove("blue-box");
        chosenBox.classList.remove("green-box");
            
        if (randomNumber == 1) {       
            chosenBox.classList.add("pink-box");
        } else if (randomNumber == 2) {
            chosenBox.classList.add("green-box");
        } else {
            chosenBox.classList.add("blue-box");
        }
    }

    /* if the box is not colored  and boxes are blinking*/
    if((!chosenBox.classList.contains("pink-box") && !chosenBox.classList.contains("blue-box") && !chosenBox.classList.contains("green-box")) && chosenBox.classList.contains("blinking-boxes")) {
        colorBox(chosenBox, randomNumber);
        stopBlinking(boxesArr);

        let x = localStorage.getItem("updatedColoredBoxes");
        x++;
        localStorage.setItem("updatedColoredBoxes", x);

        /*updatedColoredBoxes ++;*/
        
    } else { /* if the box is colored */
        if(counts>=10 && (chosenBox.classList.contains("pink-box") || chosenBox.classList.contains("blue-box") || chosenBox.classList.contains("green-box"))) {
            colorBox(chosenBox, randomNumber);
            countsDiv.innerHTML = (counts - 10);

        }
    }
}


function SmileAppear() {
    
}
