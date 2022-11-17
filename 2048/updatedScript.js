
var key;

function newGame(){
    document.getElementById("scr").innerText = 0;
    sessionStorage.removeItem('field');
    download();
}

function changeScore(newPoints){
    var oldScore = document.getElementById("scr").innerText;
    var newScore = +oldScore + newPoints;
    document.getElementById("scr").innerText = newScore;
}



function end(){

    document.getElementById("endscr").style.display = "flex";
    document.getElementById("background").style.backgroundColor = "rgba(255, 127, 80, 0.34)";
    var endScore = document.getElementById("scr").innerText;
    document.getElementById("urscr").innerText = endScore;

}







function editField(field, direction){
    // сохраняем массив в сешн сторадж
    sessionStorage.removeItem('field');
    var inOneArr = [];
    field.forEach(element => {
        for(i=0; i<element.length; i++){
            inOneArr.push(element[i]); 
        }
    });

    var popnum=[];
    switch(direction){
        case 0: //right
            popnum.push(0, 4, 8, 12);
            break;
        case 1:  //left
            popnum.push(3, 7, 11, 15);
            break;
        case 2:  //up
            popnum.push(12, 13, 14, 15);
            break;
        case 3:  //down
            popnum.push(0, 1, 2, 3);
            break;
    }
    
    for(let i = 0; i<inOneArr.length; i++){

        var randomInt = Math.floor(Math.random() * 2);
        var num;
        switch(randomInt){
            case 0:
                num = 0;
                break;
            case 1:
                num = 2;
                break;
        }

        if(popnum.includes(i) && inOneArr[i] == 0){ //добавляем новые 0 или 2
            document.getElementById(i+1).innerText = num;
            inOneArr[i] = num;
        } else {
            document.getElementById(i+1).innerText = inOneArr[i];
        }

    }


    // проверяем не конец ли игры 
    var edgeNums = [0, 1, 2, 3, 4, 7, 8, 11, 12, 15];
    var nonNull = 0;
    var index = 66;
    for(let i = 0; i<inOneArr.length; i++){
        if(!inOneArr[i] == 0){ // если не 0, увеличиваем счетчик
            nonNull++;
        }else{
            index=i;
        }
    }


        if(nonNull>=15){      //если осталась только одна пустая ячейка

        var fieldCopy = field;
        var isNextArrMatchesCurrentOne = checkIfEndOfTheGame(fieldCopy);
        }

        if(isNextArrMatchesCurrentOne == true){
            end();
        } else {
            sessionStorage.setItem("field", inOneArr);
            return
        }
        
        sessionStorage.setItem("field", inOneArr);
}










function right(field){
    var points = 0;
    field.forEach(arr => {  
        var count = 0;
        for(let i = arr.length-1; i>=0; i--){
            if(!arr[i] == 0){
                if(arr[i] == arr[i-1]){
                    points+=arr[i];    // add score
                    arr[i] = (arr[i]*2);
                    arr[i-1] = 0;
                    count++;
                }else if(arr[i] == arr[i+1]){
                    points+=arr[i];    // add score
                    arr[i+1] = (arr[i]*2);
                    arr[i] = 0;
                    count++;
                }

            } else { // если 0, сдвигаем все числа на 1 вправо
                for(let j = i; j>=0; j--){
                    if(j == 0){
                        arr[j] = 0;
                    } else {
                        arr[j] = arr[j-1];
                    }
                    if(count == 1 && i ==1){
                        count --;
                    }
                }

                if(i>0 && arr[i]>0 && (arr[i] == arr[i+1] || arr[i] == arr[i-1]) && count == 0) { // если i не в конце, то проверяем и складываем число под индексом i уже после сдвига
                    if(arr[i] == arr[i-1]){
                        points+=arr[i];    // add score
                        arr[i] = (arr[i]*2);
                        arr[i-1] = 0;
                    } else {
                        points+=arr[i];    // add score
                        arr[i+1] = (arr[i]*2);
                        arr[i] = 0;
                    }
                    count++;
                } 

                if(i>0 && arr[i] == 0) { // если i все еще 0 
                    for(let j = i; j>=0; j--){
                        if(j == 0){
                            arr[j] = 0;
                        } else {
                            arr[j] = arr[j-1];
                        }
                    }
                }

                if(i>0 && arr[i]>0 && (arr[i] == arr[i+1] || arr[i] == arr[i-1]) && count == 0) { // если i не в конце, то проверяем и складываем число под индексом i уже после сдвига
                    if(arr[i] == arr[i-1]){
                        points+=arr[i];    // add score
                        arr[i] = (arr[i]*2);
                        arr[i-1] = 0;
                    } else {
                        points+=arr[i];    // add score
                        arr[i+1] = (arr[i]*2);
                        arr[i] = 0;
                    }
                } 

                if(i>0 && arr[i] == 0) { // если i все еще 0 
                    for(let j = i; j>=0; j--){
                        if(j == 0){
                            arr[j] = 0;
                        } else {
                            arr[j] = arr[j-1];
                        }
                    }
                }

                if(i>0 && arr[i]>0 && (arr[i] == arr[i+1] || arr[i] == arr[i-1]) && count == 0) { // если i не в конце, то проверяем и складываем число под индексом i уже после сдвига
                    if(arr[i] == arr[i-1]){
                        points+=arr[i];    // add score
                        arr[i] = (arr[i]*2);
                        arr[i-1] = 0;
                    } else {
                        points+=arr[i];    // add score
                        arr[i+1] = (arr[i]*2);
                        arr[i] = 0;
                    }
                } 

            } 
        }    
    });
    console.log(field);
    var direction = 0; 

        editField(field, direction);
        changeScore(points);
    

}

function left(field){
    var points=0;
    field.forEach(arr => {  
        var count = 0;      
        for(let i = 0; i<=arr.length; i++){
            if(!arr[i] == 0){ // если не 0
                if(arr[i] == arr[i+1]){
                    points+=arr[i];    // add score
                    arr[i] = (arr[i]*2);
                    arr[i+1] = 0;
                    count++;
                }
            }  else { // если 0, сдвигаем все числа на 1 влево

                for(let j = i; j<=3; j++){                   
                    if(j == 3){
                        arr[j] = 0;
                    } else {                      
                        arr[j] = arr[j+1];                      
                    }
                    if(count == 1 && i ==1){
                        count --;
                    }
                }

                if(i<3 && arr[i]>0 && (arr[i] == arr[i+1] || arr[i] == arr[i-1]) && count == 0) { // если i не в конце, то проверяем и складываем число под индексом i уже после сдвига
                    if(arr[i] == arr[i+1]){
                        points+=arr[i];    // add score
                        arr[i] = (arr[i]*2);
                        arr[i+1] = 0;
                    } else {
                        points+=arr[i];    // add score
                        arr[i-1] = (arr[i]*2);
                        arr[i] = 0;
                    }
                    count++;
                } 

                if(i<3 && arr[i] == 0) { // если i все еще 0 
                    for(let j = i; j<=3; j++){                   
                        if(j == 3){
                            arr[j] = 0;
                        } else {                      
                            arr[j] = arr[j+1];                      
                        }
                    }
                }

                if(i<3 && arr[i]>0 && (arr[i] == arr[i+1] || arr[i] == arr[i-1]) && count == 0) { // если i не в конце, то проверяем и складываем число под индексом i уже после сдвига
                    if(arr[i] == arr[i+1]){
                        points+=arr[i];    // add score
                        arr[i] = (arr[i]*2);
                        arr[i+1] = 0;
                    } else {
                        points+=arr[i];    // add score
                        arr[i-1] = (arr[i]*2);
                        arr[i] = 0;
                    }
                }

                if(i<3 && arr[i] == 0) { // если i все еще 0 
                    for(let j = i; j<=3; j++){                   
                        if(j == 3){
                            arr[j] = 0;
                        } else {                      
                            arr[j] = arr[j+1];                      
                        }
                    }
                }
                if(i<3 && arr[i]>0 && (arr[i] == arr[i+1] || arr[i] == arr[i-1]) && count == 0) { // если i не в конце, то проверяем и складываем число под индексом i уже после сдвига
                    if(arr[i] == arr[i+1]){
                        points+=arr[i];    // add score
                        arr[i] = (arr[i]*2);
                        arr[i+1] = 0;
                    } else {
                        points+=arr[i];    // add score
                        arr[i-1] = (arr[i]*2);
                        arr[i] = 0;
                    }
                } 
            }
        }      

    });
    console.log(field);
    var direction = 1;

        editField(field, direction);
        changeScore(points);

}



function up(field){
    var points=0;
        // переворачиваем массивы
        var minArr0=[];
        var minArr1=[];
        var minArr2=[];
        var minArr3=[];
        var bigArr = [];
    
        console.log(field);

        field.forEach(arr => {  
            for(let i = 0; i<=arr.length; i++) {
                switch(i) {
                    case 0:
                        minArr0.push(arr[i]);
                        break;
                    case 1:
                        minArr1.push(arr[i]);
                        break;
                    case 2:
                        minArr2.push(arr[i]);
                        break;
                    case 3:
                        minArr3.push(arr[i]);
                        break;
                }
            }
        });
    
        bigArr.push(minArr0, minArr1, minArr2, minArr3)
        console.log(bigArr);


            // складываем
         
    bigArr.forEach(arr => {  
        var count = 0;      
        for(let i = 0; i<=arr.length; i++){
            if(!arr[i] == 0){ // если не 0
                if(arr[i] == arr[i+1]){
                    points+=arr[i];    // add score
                    arr[i] = (arr[i]*2);
                    arr[i+1] = 0;
                    count++;
                }
            }  else { // если 0, сдвигаем все числа на 1 влево

                for(let j = i; j<=3; j++){                   
                    if(j == 3){
                        arr[j] = 0;
                    } else {                      
                        arr[j] = arr[j+1];                      
                    }
                    if(count == 1 && i ==1){
                        count --;
                    }
                }

                if(i<3 && arr[i]>0 && (arr[i] == arr[i+1] || arr[i] == arr[i-1]) && count == 0) { // если i не в конце, то проверяем и складываем число под индексом i уже после сдвига
                    if(arr[i] == arr[i+1]){
                        points+=arr[i];    // add score
                        arr[i] = (arr[i]*2);
                        arr[i+1] = 0;
                    } else {
                        points+=arr[i];    // add score
                        arr[i-1] = (arr[i]*2);
                        arr[i] = 0;
                    }
                    count++;
                } 

                if(i<3 && arr[i] == 0) { // если i все еще 0 
                    for(let j = i; j<=3; j++){                   
                        if(j == 3){
                            arr[j] = 0;
                        } else {                      
                            arr[j] = arr[j+1];                      
                        }
                    }
                }

                if(i<3 && arr[i]>0 && (arr[i] == arr[i+1] || arr[i] == arr[i-1]) && count == 0) { // если i не в конце, то проверяем и складываем число под индексом i уже после сдвига
                    if(arr[i] == arr[i+1]){
                        points+=arr[i];    // add score
                        arr[i] = (arr[i]*2);
                        arr[i+1] = 0;
                    } else {
                        points+=arr[i];    // add score
                        arr[i-1] = (arr[i]*2);
                        arr[i] = 0;
                    }
                }

                if(i<3 && arr[i] == 0) { // если i все еще 0 
                    for(let j = i; j<=3; j++){                   
                        if(j == 3){
                            arr[j] = 0;
                        } else {                      
                            arr[j] = arr[j+1];                      
                        }
                    }
                }
                if(i<3 && arr[i]>0 && (arr[i] == arr[i+1] || arr[i] == arr[i-1]) && count == 0) { // если i не в конце, то проверяем и складываем число под индексом i уже после сдвига
                    if(arr[i] == arr[i+1]){
                        points+=arr[i];    // add score
                        arr[i] = (arr[i]*2);
                        arr[i+1] = 0;
                    } else {
                        points+=arr[i];    // add score
                        arr[i-1] = (arr[i]*2);
                        arr[i] = 0;
                    }
                } 
            }
        }      

    });
        console.log(bigArr);
        
        // переворачиваем массивы обратно
        var j = 0;
        field.forEach(arr => {  
            for(let i = 0; i<=arr.length; i++) {
                switch(i) {
                    case 0:
                        arr[i] = minArr0[j];
                        break;
                    case 1:
                        arr[i] = minArr1[j];
                        break;
                    case 2:
                        arr[i] = minArr2[j];
                        break;
                    case 3:
                        arr[i] = minArr3[j];
                        j++;
                        break;
                }
            }
        });
        console.log(field);
        var direction = 2;
        editField(field, direction);
        changeScore(points);
        
}

function down(field){
    var points=0;
    console.log(field);
    // переворачиваем массивы
    var minArr0=[];
    var minArr1=[];
    var minArr2=[];
    var minArr3=[];
    var bigArr = [];

    field.forEach(arr => {  
        for(let i = 0; i<=arr.length; i++) {
            switch(i) {
                case 0:
                    minArr0.push(arr[i]);
                    break;
                case 1:
                    minArr1.push(arr[i]);
                    break;
                case 2:
                    minArr2.push(arr[i]);
                    break;
                case 3:
                    minArr3.push(arr[i]);
                    break;
            }
        }
    });
    bigArr.push(minArr0, minArr1, minArr2, minArr3)
    console.log(bigArr);

    // сдвигаем вправо           
    bigArr.forEach(arr => {  
        var count = 0;
        for(let i = arr.length-1; i>=0; i--){
            if(!arr[i] == 0){
                if(arr[i] == arr[i-1]){
                    points+=arr[i];    // add score
                    arr[i] = (arr[i]*2);
                    arr[i-1] = 0;
                    count++;
                }else if(arr[i] == arr[i+1]){
                    points+=arr[i];    // add score
                    arr[i+1] = (arr[i]*2);
                    arr[i] = 0;
                    count++;
                }

            } else { // если 0, сдвигаем все числа на 1 вправо
                for(let j = i; j>=0; j--){
                    if(j == 0){
                        arr[j] = 0;
                    } else {
                        arr[j] = arr[j-1];
                    }
                    if(count == 1 && i ==1){
                        count --;
                    }
                }

                if(i>0 && arr[i]>0 && (arr[i] == arr[i+1] || arr[i] == arr[i-1]) && count == 0) { // если i не в конце, то проверяем и складываем число под индексом i уже после сдвига
                    if(arr[i] == arr[i-1]){
                        points+=arr[i];    // add score
                        arr[i] = (arr[i]*2);
                        arr[i-1] = 0;
                    } else {
                        points+=arr[i];    // add score
                        arr[i+1] = (arr[i]*2);
                        arr[i] = 0;
                    }
                    count++;
                } 

                if(i>0 && arr[i] == 0) { // если i все еще 0 
                    for(let j = i; j>=0; j--){
                        if(j == 0){
                            arr[j] = 0;
                        } else {
                            arr[j] = arr[j-1];
                        }
                    }
                }

                if(i>0 && arr[i]>0 && (arr[i] == arr[i+1] || arr[i] == arr[i-1]) && count == 0) { // если i не в конце, то проверяем и складываем число под индексом i уже после сдвига
                    if(arr[i] == arr[i-1]){
                        points+=arr[i];    // add score
                        arr[i] = (arr[i]*2);
                        arr[i-1] = 0;
                    } else {
                        points+=arr[i];    // add score
                        arr[i+1] = (arr[i]*2);
                        arr[i] = 0;
                    }
                } 

                if(i>0 && arr[i] == 0) { // если i все еще 0 
                    for(let j = i; j>=0; j--){
                        if(j == 0){
                            arr[j] = 0;
                        } else {
                            arr[j] = arr[j-1];
                        }
                    }
                }

                if(i>0 && arr[i]>0 && (arr[i] == arr[i+1] || arr[i] == arr[i-1]) && count == 0) { // если i не в конце, то проверяем и складываем число под индексом i уже после сдвига
                    if(arr[i] == arr[i-1]){
                        points+=arr[i];    // add score
                        arr[i] = (arr[i]*2);
                        arr[i-1] = 0;
                    } else {
                        points+=arr[i];    // add score
                        arr[i+1] = (arr[i]*2);
                        arr[i] = 0;
                    }
                } 

            } 
        }    
    });
    console.log(bigArr);

    // переворачиваем массивы обратно
   var j = 0;
    field.forEach(arr => {  
       for(let i = 0; i<=arr.length; i++) {
            switch(i) {
               case 0:
                   arr[i] = minArr0[j];
                   break;
                case 1:
                   arr[i] = minArr1[j];
                   break;
               case 2:
                   arr[i] = minArr2[j];
                    break;
                case 3:
                    arr[i] = minArr3[j];
                    j++;
                    break;
               }
           }
       });
       console.log(field); 
       var direction = 3;

        editField(field, direction);
        changeScore(points);
        
}





function download(){
    var randomInt;
    var field = [];
    for(let i = 1; i<=16; i++){
        randomInt = Math.floor(Math.random() * 2);
        var num;
        switch(randomInt){
            case 0:
                num = 0;
                break;
            case 1:
                num = 2;
                break;
        }
        document.getElementById(i).innerText = num;
        field.push(num);
    }
    console.log(field);
    sessionStorage.setItem("field", field);
    
}



function sum(direction){
    
    var numData = sessionStorage.getItem("field");
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    var arr4 = [];
    
    var field = [];
    
    var numDataArr = numData.split(",");

    for(let i =0; i<numDataArr.length; i++){
        if(i<4){
            arr1.push(parseInt(numDataArr[i], 10));
        }else if(i<8){
            arr2.push(parseInt(numDataArr[i], 10));
        }else if(i<12){
            arr3.push(parseInt(numDataArr[i], 10));
        } else{
            arr4.push(parseInt(numDataArr[i], 10));
        }
    }
    field.push(arr1, arr2, arr3, arr4);
    
    console.log(field);

    switch(direction) {
    case "right":
        right(field);
        break;
    case "left":
        left(field);
        break;
    case "up":
        up(field);
        break;
    case "down":
        down(field);
        break;
    }
}

document.onkeydown = (e, key) => {


    e = e || window.event;
    if (e.keyCode === 38) {
      console.log('up arrow pressed');
      key = "up";
    } else if (e.keyCode === 40) {
      console.log('down arrow pressed');
      key = "down";
    } else if (e.keyCode === 37) {
      console.log('left arrow pressed');
      key = "left";
    } else if (e.keyCode === 39) {
      console.log('right arrow pressed');
      key = "right";
    }
    sum(key);
}



document.addEventListener('swiped', function(e) {
    console.log(e.target); // the element that was swiped
    console.log(e.detail.dir); // swiped direction
});
//swiped-left
document.addEventListener('swiped-left', function(e) {
    console.log(e.target); // the element that was swiped
    key = "left";
    sum(key);
});
//swiped-right
document.addEventListener('swiped-right', function(e) {
    console.log(e.target); // the element that was swiped
    key = "right";
    sum(key);
});
//swiped-up
document.addEventListener('swiped-up', function(e) {
    console.log(e.target); // the element that was swiped
    key = "up";
    sum(key);
});
//swiped-down
document.addEventListener('swiped-down', function(e) {
    console.log(e.target); // the element that was swiped
    key = "down";
    sum(key);
});


