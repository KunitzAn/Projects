var input = document.getElementById("inpt-wnd");
var piram = document.getElementById("piram");

var n = input.value; //заданное число

function inputChange() {
    //change the create button and remove 'disabled'
    document.getElementById('btn-create').removeAttribute('disabled');
    document.getElementById('btn-create').style.backgroundColor='#5b9aa0';
    document.getElementById('btn-create').style.color='white';
}

function create() {

    if(input.value<1 || input.value>9999){
        return;
    }
    //check, if the input value is changed
    if(!input.value==0) {
        var piramid = document.getElementById('piram');
        var child = piram.lastElementChild;
        while (child) {
            piramid.removeChild(child);
            child = piramid.lastElementChild;
        }
    }


    // change the create button and set 'disabled'
    document.getElementById('btn-create').disabled='true';
    document.getElementById('btn-create').style.backgroundColor='#346266';
    document.getElementById('btn-create').style.color='#bbacac';

    var n = input.value; //заданное число
    var blocksInLine = 1; //число блоков в следующей линии 
    var dB = 0//число созданных блоков
    var lineIndex = 1;

   // var num = 1;



    for(let drawnBlocks=0; drawnBlocks<n; drawnBlocks+=blocksInLine) {
        //создаем большой массив
        var line = document.createElement('div');

        line.id = 'line'+lineIndex; //задаем индекс

        //задаем класс 
        line.className = 'line';

        piram.appendChild(line);

       // dB = 0;

        for(let boxCount = 1; boxCount<=blocksInLine; boxCount++) {
            
            var currentLine = document.getElementById('line'+lineIndex); //choose current line
            
            //create button
            var block = document.createElement('button'); 
            //set button's class name            
            block.className = 'button';

            //put button into the current line
           currentLine.appendChild(block);

            dB++;
        }

        blocksInLine++;
        lineIndex++;
    }

    var collection = document.getElementsByClassName('line');
    var linesCount = collection.length;




    if(n>dB) {

        for(let i=dB; i<n; i++) {
            var lineAdd = document.getElementById('line'+linesCount);

            var addblock = document.createElement('button'); 
            //задаем класс блоку            
            addblock.className = 'button';


            //вставляем блок в текущую линию
           lineAdd.appendChild(addblock);


            linesCount--;
        }
    }


    //нумеруем
    var buttonCollection = document.getElementsByClassName('button');
    var num = 1;

    for(let i=0; i<=buttonCollection.length;  i++) {

        var text = document.createTextNode(num);
        text.id = num;
        buttonCollection[i].appendChild(text);
        num++;
    }
    
}



function rotate() {

    var wrapper =  document.getElementById("piram");
    var buttonCollection = document.getElementsByClassName('button');
    var linesToReverse =  document.getElementsByClassName('line');
    var num = input.value;

    //задаем новый алгоритм, если есть свойство reverse

    if(wrapper.style.flexDirection=='column-reverse'){
        //изменяем направление пирамиды
        wrapper.style.flexDirection='column';
        //изменяем числа
        for(let i = 0; i<buttonCollection.length; i++) {
            buttonCollection[i].removeChild(buttonCollection[i].firstChild);

            var text = document.createTextNode(i+1);
            buttonCollection[i].appendChild(text);
        }
        //изменяем направление линий
        for(let i = 0; i<linesToReverse.length; i++) {
            var aline = linesToReverse[i];
            aline.style.flexDirection='row';
        }

        return; 
    }


    //если if не сработал:

   wrapper.style.flexDirection='column-reverse';

   //нумеруем

   //var buttonCollection = document.getElementsByClassName('button');
   //var num = input.value;

   for(let i = 0; i<buttonCollection.length; i++) {
        buttonCollection[i].removeChild(buttonCollection[i].firstChild);
        var text = document.createTextNode(num);

        buttonCollection[i].appendChild(text);
        num--;
    }

   //var linesToReverse =  document.getElementsByClassName('line')
   for(let i = 0; i<linesToReverse.length; i++) {
       var aline = linesToReverse[i];
       aline.style.flexDirection='row-reverse';
    }

}


function removeAll(){

    var piramid = document.getElementById('piram');
    var child = piram.lastElementChild;
    while (child) {
        piramid.removeChild(child);
        child = piramid.lastElementChild;
    }
    var inputWindow = document.getElementById('inpt-wnd');
    inputWindow.value = 0;

    //изменяем кнопку create и убираем disabled
   document.getElementById('btn-create').removeAttribute('disabled');
   document.getElementById('btn-create').style.backgroundColor='#5b9aa0';
   document.getElementById('btn-create').style.color='white';

}
