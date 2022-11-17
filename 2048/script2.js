function checkIfEndOfTheGame(fieldCopy){

    sessionStorage.setItem("originField", fieldCopy);

    // тестим право
    var testRightArr = [];
    ////
    var testRightstring = sessionStorage.getItem("originField");
    var arr1 = [];
    var arr2 = [];
    var arr3 = [];
    var arr4 = [];
    
    
    var numDataArr = testRightstring.split(",");

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
    testRightArr.push(arr1, arr2, arr3, arr4);
    ///////

    testRightArr.forEach(arr => {  
        var count = 0;
        for(let i = arr.length-1; i>=0; i--){
            if(!arr[i] == 0){
                if(arr[i] == arr[i-1]){
                    arr[i] = (arr[i]*2);
                    arr[i-1] = 0;
                    count++;
                }else if(arr[i] == arr[i+1]){
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
                        arr[i] = (arr[i]*2);
                        arr[i-1] = 0;
                    } else {
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
                        arr[i] = (arr[i]*2);
                        arr[i-1] = 0;
                    } else {
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
                        arr[i] = (arr[i]*2);
                        arr[i-1] = 0;
                    } else {
                        arr[i+1] = (arr[i]*2);
                        arr[i] = 0;
                    }
                } 

            } 
        }    
    });
    console.log(testRightArr);
    




    // тестим лево 
    var testLeftArr = [];
    ////
    var testLeftString = sessionStorage.getItem("originField");
    var arr12 = [];
    var arr22 = [];
    var arr32 = [];
    var arr42 = [];
    
    
    var numDataArr2 = testLeftString.split(",");

    for(let i =0; i<numDataArr2.length; i++){
        if(i<4){
            arr12.push(parseInt(numDataArr2[i], 10));
        }else if(i<8){
            arr22.push(parseInt(numDataArr2[i], 10));
        }else if(i<12){
            arr32.push(parseInt(numDataArr2[i], 10));
        } else{
            arr42.push(parseInt(numDataArr2[i], 10));
        }
    }
    testLeftArr.push(arr12, arr22, arr32, arr42);
    ///////

    testLeftArr.forEach(arr => {  
        var count = 0;      
        for(let i = 0; i<=arr.length; i++){
            if(!arr[i] == 0){ // если не 0
                if(arr[i] == arr[i+1]){
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
                        arr[i] = (arr[i]*2);
                        arr[i+1] = 0;
                    } else {
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
                        arr[i] = (arr[i]*2);
                        arr[i+1] = 0;
                    } else {
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
                        arr[i] = (arr[i]*2);
                        arr[i+1] = 0;
                    } else {
                        arr[i-1] = (arr[i]*2);
                        arr[i] = 0;
                    }
                } 
            }
        }      

    });
    console.log(testLeftArr);









    // тестим верх 

    var testUpArr = [];
    ////
    var testUpString = sessionStorage.getItem("originField");
    var arr13 = [];
    var arr23 = [];
    var arr33 = [];
    var arr43 = [];
    
    
    var numDataArr3 = testUpString.split(",");

    for(let i =0; i<numDataArr3.length; i++){
        if(i<4){
            arr13.push(parseInt(numDataArr3[i], 10));
        }else if(i<8){
            arr23.push(parseInt(numDataArr3[i], 10));
        }else if(i<12){
            arr33.push(parseInt(numDataArr3[i], 10));
        } else{
            arr43.push(parseInt(numDataArr3[i], 10));
        }
    }
    testUpArr.push(arr13, arr23, arr33, arr43);
    ///////


        // переворачиваем массивы
        var minArr0=[];
        var minArr1=[];
        var minArr2=[];
        var minArr3=[];
        var bigArrUp = [];
    

        testUpArr.forEach(arr => {  
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
    
        bigArrUp.push(minArr0, minArr1, minArr2, minArr3)

        // складываем
         
    bigArrUp.forEach(arr => {  
        var count = 0;      
        for(let i = 0; i<=arr.length; i++){
            if(!arr[i] == 0){ // если не 0
                if(arr[i] == arr[i+1]){
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
                        arr[i] = (arr[i]*2);
                        arr[i+1] = 0;
                    } else {
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
                        arr[i] = (arr[i]*2);
                        arr[i+1] = 0;
                    } else {
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
                        arr[i] = (arr[i]*2);
                        arr[i+1] = 0;
                    } else {
                        arr[i-1] = (arr[i]*2);
                        arr[i] = 0;
                    }
                } 
            }
        }      

    });
        
        // переворачиваем массивы обратно
        var j = 0;
        testUpArr.forEach(arr => {  
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
        console.log(testUpArr);

        



        // тестим низ

        var testArrDown = [];
        ////
        var testDownString = sessionStorage.getItem("originField");
        var arr14 = [];
        var arr24 = [];
        var arr34 = [];
        var arr44 = [];
        
        
        var numDataArr4 = testDownString.split(",");
    
        for(let i =0; i<numDataArr4.length; i++){
            if(i<4){
                arr14.push(parseInt(numDataArr4[i], 10));
            }else if(i<8){
                arr24.push(parseInt(numDataArr4[i], 10));
            }else if(i<12){
                arr34.push(parseInt(numDataArr4[i], 10));
            } else{
                arr44.push(parseInt(numDataArr4[i], 10));
            }
        }
        testArrDown.push(arr14, arr24, arr34, arr44);
        ///////


            // переворачиваем массивы
            var minArr0=[];
            var minArr1=[];
            var minArr2=[];
            var minArr3=[];
            var bigArrDown = [];
        
            testArrDown.forEach(arr => {  
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
            bigArrDown.push(minArr0, minArr1, minArr2, minArr3)
        
            // сдвигаем вправо           
            bigArrDown.forEach(arr => {  
                var count = 0;
                for(let i = arr.length-1; i>=0; i--){
                    if(!arr[i] == 0){
                        if(arr[i] == arr[i-1]){
                            arr[i] = (arr[i]*2);
                            arr[i-1] = 0;
                            count++;
                        }else if(arr[i] == arr[i+1]){
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
                                arr[i] = (arr[i]*2);
                                arr[i-1] = 0;
                            } else {
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
                                arr[i] = (arr[i]*2);
                                arr[i-1] = 0;
                            } else {
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
                                arr[i] = (arr[i]*2);
                                arr[i-1] = 0;
                            } else {
                                arr[i+1] = (arr[i]*2);
                                arr[i] = 0;
                            }
                        } 
        
                    } 
                }    
            });
        
            // переворачиваем массивы обратно
           var j = 0;
            testArrDown.forEach(arr => {  
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
               console.log(testArrDown); 

            
        // сравниваем оригинальный массив с каждым из измененных

        if(JSON.stringify(fieldCopy) === JSON.stringify(testLeftArr) && JSON.stringify(fieldCopy) === JSON.stringify(testRightArr) && JSON.stringify(fieldCopy) === JSON.stringify(testUpArr) && JSON.stringify(fieldCopy) === JSON.stringify(testArrDown)){
            return true;
        } else {
            return false;
        }

}