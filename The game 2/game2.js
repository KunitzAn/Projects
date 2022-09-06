
function start() {
    var arr = [];
    for(let i = 1; i<13; i++) {
        var image = document.getElementById("img"+i);
        do {
            var className = randomPic();
        } while (arr.includes(className))
        arr.push(className);
        image.classList.add(className);
    }
}

var open = 0;
var openBoxesDiv = [];
var openBoxes = [];
function openCard(boxId){
    let id = boxId;
    var chosenBoxDiv = document.getElementById("img"+id);
    var chosenBox = document.getElementById(id);



    /* открываем карточку */
    if (open <2) {
        chosenBox.classList.remove("closen-card");
        chosenBoxDiv.classList.remove("transparant-image");
        open ++;
        openBoxes.push(id);
        openBoxesDiv.push("img"+id);
    }

    /* вычитаем очки */
    var countdiv = document.getElementById("score");
    var count = countdiv.innerHTML;
    var newCount = count-5;
    countdiv.innerText = newCount;


    /* закрываем карточку */
    if(open == 2) {
        const myTimeOut = setTimeout(closeCard, 1500);
        function closeCard() {

            var boxToClose1 = document.getElementById(openBoxes[0]);
            var boxToClose2 = document.getElementById(openBoxes[1]);
            var boxDivToClose1 = document.getElementById(openBoxesDiv[0]);
            var boxDivToClose2 = document.getElementById(openBoxesDiv[1]);

            boxToClose1.classList.add("closen-card");
            boxToClose2.classList.add("closen-card");
            boxDivToClose1.classList.add("transparant-image");
            boxDivToClose2.classList.add("transparant-image");

            /* считаем совпадения */
            var matches; 
            switch(openBoxes[0]) {
                case
            }
            

            open = 0; 
            
            openBoxesDiv = [];
            openBoxes = [];

    }



} }



function randomPic() {
    /* choose pic class name */
    let minB = 1;
    let maxB = 12;
    var randomPicNumber = Math.floor(Math.random() * (maxB - minB + 1) + minB);

    switch(randomPicNumber) {
        case 1:
            className = "img1-1";
            break;
        case 2:
            className = "img1-2";
            break;
        case 3:
            className = "img2-1";  
            break;
        case 4:
            className = "img2-2";
            break;
        case 5:
            className = "img3-1";
            break;
        case 6:
            className = "img3-2";
            break;
        case 7:
            className = "img4-1";
            break;
        case 8:
            className = "img4-2";
            break;
        case 9:
            className = "img5-1";
            break;
        case 10:
            className = "img5-2";
            break;
        case 11:
            className = "img6-1";
            break;
        case 12:
            className = "img6-2"; 
            break;  
    }

    return className;
} 