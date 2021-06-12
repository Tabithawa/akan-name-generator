var generateAkanName = () =>{
    let dayBorn = parseInt(document.getElementById("dayInput").value);
    let monthBorn = parseInt(document.getElementById("monthInput").value);
    let yearBorn = document.getElementById("yearInput").value;
    
    let genderChoosing = document.getElementsByName("gender");
    var selectGender= () => {
        for (let gender of genderChoosing){
            if (gender.checked){
                return gender.value;
        }
    }      
}
    let genderSelected = selectGender();

    let dayOfTheWeekBorn = Math.floor((((parseInt(yearBorn.slice(0,2))/4)-2*parseInt(yearBorn.slice(0,2))-1)+
            ((5*parseInt(yearBorn.slice(2,4))/4))+((26*(monthBorn+1)/10))+dayBorn)%7);

    let akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];     
    
    let indexOfArrays;    
    if (dayOfTheWeekBorn == 0){
        indexOfArrays = 0;
    } else {
        indexOfArrays = dayOfTheWeekBorn;
    }
    
    if (genderSelected == "male" ) {
        alert(" Your Akan name is " + akanMaleNames[indexOfArrays] +"!!!");

    } else if (genderSelected == "female" ) {
        alert( " Your Akan name is " + akanFemaleNames[indexOfArrays] + "!!!");
        
    } else {
        alert("Date or Month Invalid! Choose a Correct One!!");
    }
}
