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

    var allForms = document.getElementsByClassName("form");
    var invisibleForms = document.getElementsByClassName("invisible");
    
    if(invisibleForms.length == 2){
        form.classList.remove("invisible");
    } else{
        [].forEach.call(allForms, function (element) {
            element.classList.add("invisible")
        });
        form.classList.remove("invisible");
    }

}




function chooseStaff(){
    var workPeriodMin = document.getElementById("work-years-min").value;
    var workPeriodMax = document.getElementById("work-years-max").value;
    var ageMin = document.getElementById("age-min").value;
    var ageMax = document.getElementById("age-max").value;
    var professionNum = document.getElementById("staffKind").value;


    if(ageMin>ageMax){
        ageMax = ageMin;
        document.getElementById("work-years-max").value=ageMax;
    }
    var ageArr = [];
    for(let i = ageMin-1; i<= ageMax; i++) {
        ageArr.push(i);
    }

    if(workPeriodMin>workPeriodMax){
        workPeriodMax = workPeriodMin;
        document.getElementById("work-years-max").value=workPeriodMax;
    }
    var workExperienceArr = [];
    for(let i = workPeriodMin-1; i<= workPeriodMax; i++) {
        workExperienceArr.push(i);
    }


    /* make all rows invisible */

    var allStaff = document.getElementsByClassName("person");

    [].forEach.call(allStaff, function (element) {
        element.classList.remove("visible")
    });

    /* make chosen rows visible */
    var arrRightProffesion;
    let age;
    let workExperience;
    switch(professionNum) {
        case '1':
            arrRightProffesion = document.getElementsByClassName("nurse");
            age = 30;
            workExperience = 5;
            if(workExperienceArr.includes(workExperience) && ageArr.includes(age)){
                [].forEach.call(arrRightProffesion, function (element) {
                    element.classList.add("visible")
                });
            }
            break;
        case '3':
            arrRightProffesion = document.getElementsByClassName("gardner");
            age = 50;
            workExperience = 20;
            if(workExperienceArr.includes(workExperience) && ageArr.includes(age)){
                [].forEach.call(arrRightProffesion, function (element) {
                    element.classList.add("visible")
                });
            }
            break;
        case '4':
            arrRightProffesion = document.getElementsByClassName("cleaner");
            age = 35;
            workExperience = 7;
            if(workExperienceArr.includes(workExperience) && ageArr.includes(age)){
                [].forEach.call(arrRightProffesion, function (element) {
                    element.classList.add("visible")
                });
            }
            break;
        case '5':
            arrRightProffesion = document.getElementsByClassName("groom");
            age = 60;
            workExperience = 15;
            if(workExperienceArr.includes(workExperience) && ageArr.includes(age)){
                [].forEach.call(arrRightProffesion, function (element) {
                    element.classList.add("visible")
                });
            }
            break;
        case '6':
            arrRightProffesion = document.getElementsByClassName("cook");
            age = 55;
            workExperience = 30;
            if(workExperienceArr.includes(workExperience) && ageArr.includes(age)){
                [].forEach.call(arrRightProffesion, function (element) {
                    element.classList.add("visible")
                });
            }
            break;



        case '2':
            arrRightProffesion = document.getElementsByClassName("gouvernante");
            age = 45;
            workExperience = 15;
            if(workExperienceArr.includes(workExperience) && ageArr.includes(age)){
                [].forEach.call(arrRightProffesion, function (element) {
                    element.classList.add("visible")
                });
            }
            break;
    }

}