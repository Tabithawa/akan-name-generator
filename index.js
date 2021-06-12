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