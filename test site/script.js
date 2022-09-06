/*const go = setInterval("changeImage()", 5000);

window.onload - function changeImage(){
    var imgs = [photo-1, photo-2, photo-3, photo-4, photo-5, photo-6];
    let chosenPic = document.getElementsByClassName("active");
    let n = chosenPic.toString().slice(-1);


    var photo = document.getElementById("photo");
    let buttonsWithActiveClass = document.getElementsByClassName("active");
    let clickedButton = document.getElementById(n);
    switch(n) {
        case '1':
            photo.className="";
            photo.classList.add("photo-1");

            buttonsWithActiveClass[0].classList.remove("active");
            clickedButton.classList.add("active");

            break;
        case '2':
            photo.className="";
            photo.classList.add("photo-2");

            buttonsWithActiveClass[0].classList.remove("active");
            clickedButton.classList.add("active");

            break;
        case '3':
            photo.className="";
            photo.classList.add("photo-3");

                buttonsWithActiveClass[0].classList.remove("active");
                clickedButton.classList.add("active");

            break;
        case '4':
            photo.className="";
            photo.classList.add("photo-4");

            buttonsWithActiveClass[0].classList.remove("active");
            clickedButton.classList.add("active");

            break;
        case '5':
            photo.className="";
            photo.classList.add("photo-5");

            buttonsWithActiveClass[0].classList.remove("active");
            clickedButton.classList.add("active");

            break;
        case '6':
            photo.className="";
            photo.classList.add("photo-6");

            buttonsWithActiveClass[0].classList.remove("active");
            clickedButton.classList.add("active");

            break;
    }

    if(n<6){
        n++;
    } else {
        n=1;
    }

}
*/


function buttonCkeck(id) {
    var buttonid = id;
    var clickedButton = document.getElementById(buttonid);

    if(!clickedButton.classList.contains("active")) {
        /* remove the "active" class from the previous selected button */
        let buttonsWithActiveClass = document.getElementsByClassName("active");
        buttonsWithActiveClass[0].classList.remove("active");
        /*set the "active" class to the current selected button */
        clickedButton.classList.add("active");

        /* change image when new button is clicked*/
        var photo = document.getElementById("photo");
        switch(id) {
            case 'button1':
                photo.className="";
                photo.classList.add("photo-1");
                break;
            case 'button2':
                photo.className="";
                photo.classList.add("photo-2");
                break;
            case 'button3':
                photo.className="";
                photo.classList.add("photo-3");
                break;
            case 'button4':
                photo.className="";
                photo.classList.add("photo-4");
                break;
            case 'button5':
                photo.className="";
                photo.classList.add("photo-5");
                break;
            case 'button6':
                photo.className="";
                photo.classList.add("photo-6");
                break;
        }
    }   
}

function openForm(id){
    var form = document.getElementById("form-"+id);
    form.classList.remove("invisible");
}