const btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click',prevDef);

btnSubmit.addEventListener('click',calcAge);


function prevDef(event){
    event.preventDefault()
}

function calcAge(){
    let results = document.getElementById('results');
    let dateOfBirth = document.getElementById('dateOfBirth').value;

    let currentDate = new Date();

    let birthDate = new Date(dateOfBirth);



    //years
    let years = currentDate.getFullYear() - birthDate.getFullYear();

    if((currentDate.getMonth() < birthDate.getMonth()) || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDay() < birthDate.getDay())){
        years--;
    }


    results.innerText = `You are ${years} years old`;
}
