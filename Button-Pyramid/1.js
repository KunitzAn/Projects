var input = document.getElementById("inpt-wnd");
var piram = document.getElementById("piram");
var n = input.value; 

function create() {

    if(input.value<1 || input.value>9999){
        return;
    }
    if(!input.value==0) {
        var piramid = document.getElementById('piram');
        var child = piram.lastElementChild;
        while (child) {
            piramid.removeChild(child);
            child = piramid.lastElementChild;
        }
    }

    // change createbutton and set disabled
    document.getElementById('btn-create').disabled='true';
    document.getElementById('btn-create').style.backgroundColor='#346266';
    document.getElementById('btn-create').style.color='#bbacac';

    var n = input.value; 
    var blocksInTheNextLine = 1;  
    var lineIndex = 1;
    var createdButtons = 0 //created buttons amount

    for(let drawnBlocks=0; drawnBlocks<n; drawnBlocks+=blocksInTheNextLine) {
        var line = document.createElement('div'); //create a line
        line.id = 'line'+lineIndex; //set index
        line.className = 'line'; // set class name
        piram.appendChild(line); //put the line div into the pyramid div

        for(let boxCount = 1; boxCount<=blocksInLine; boxCount++) {        
            var currentLine = document.getElementById('line'+lineIndex); //choose current line         
            //create button
            var block = document.createElement('button'); 
            //set button's class name            
            block.className = 'button';
            //put button into the current line
           currentLine.appendChild(block);
           createdButtons++;
        }
        blocksInTheNextLine++;
        lineIndex++;
    }

    var collection = document.getElementsByClassName('line');
    var linesCount = collection.length;

    if(n>createdButtons) {
        for(let i=createdButtons; i<n; i++) {
            var lineAdd = document.getElementById('line'+linesCount);
            var addblock = document.createElement('button'); 
            //add button's class name            
            addblock.className = 'button';
            //put the button into the current line
           lineAdd.appendChild(addblock);
            linesCount--;
        }
    }

    //set nummers
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

    if(wrapper.style.flexDirection=='column-reverse'){
        //change column-direction
        wrapper.style.flexDirection='column';
        //change numbers
        for(let i = 0; i<buttonCollection.length; i++) {
            buttonCollection[i].removeChild(buttonCollection[i].firstChild);
            var text = document.createTextNode(i+1);
            buttonCollection[i].appendChild(text);
        }
        //change lines'direction
        for(let i = 0; i<linesToReverse.length; i++) {
            var aline = linesToReverse[i];
            aline.style.flexDirection='row';
        }
        return; 
    }

    wrapper.style.flexDirection='column-reverse';
    for(let i = 0; i<buttonCollection.length; i++) {
        buttonCollection[i].removeChild(buttonCollection[i].firstChild);
        var text = document.createTextNode(num);

        buttonCollection[i].appendChild(text);
        num--;
    }

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
    //change create button and delete disabled 
    document.getElementById('btn-create').removeAttribute('disabled');
    document.getElementById('btn-create').style.backgroundColor='#5b9aa0';
    document.getElementById('btn-create').style.color='white';

}