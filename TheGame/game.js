function setColor(clicked_id) {
    let id = clicked_id;
    let chosenBox = document.getElementById(id);

    /* set random color */

   /* let randomNumber = Math.floor(Math.random() * 4);*/
    let min = 1;
    let max = 3;
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

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