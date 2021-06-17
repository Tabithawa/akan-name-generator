//get data from the user 
function generateAkanName() {
    let dayBorn = parseInt(document.getElementById("dayGiven").value);
    let monthBorn = parseInt(document.getElementById("monthGiven").value);
    let yearBorn = document.getElementById("yearGiven").value;
    
    let genderChoosing = document.getElementsByName("gender");
    function selectGender() {
        for (let gender of genderChoosing){
            if (gender.checked){
                return gender.value;
        }
    }      
}
    let genderSelected = selectGender();
//calculate day of the week the user was born based on input taken
    let dayOfTheWeekBorn = Math.floor((((parseInt(yearBorn.slice(0,2))/4)-2*parseInt(yearBorn.slice(0,2))-1)+
            ((5*parseInt(yearBorn.slice(2,4))/4))+((26*(monthBorn+1)/10))+dayBorn)%7);

    let akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let indexOfArrays;    
    if (dayOfTheWeekBorn == 0){
        indexOfArrays = 0;
    } else {
        indexOfArrays = dayOfTheWeekBorn;
    }
//output to the user their Akan name    
    if (genderSelected == "male" ) {
        alert(" Your Akan name is " + akanMaleNames[indexOfArrays] +" because you were born on a " + weekDays[indexOfArrays]);

    } else if (genderSelected == "female" ) {
        alert( " Your Akan name is " + akanFemaleNames[indexOfArrays] + " because you were born on a " + weekDays[indexOfArrays]);
        
    } else {
        alert("Date or Month Invalid! Choose a Correct One!!");
    }
}
