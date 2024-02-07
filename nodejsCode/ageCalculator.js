
function ageCalculator (birthdate)
{
    let birthDate = new Date(birthdate); // convert birthDate string into birthDate time

    let currentDate = new Date(); // get current Date

    let age = currentDate.getFullYear() - birthDate.getFullYear();

    if(
        currentDate.getMonth() < birthDate.getMonth() ||
        currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate()
    ){
        age--;
    }


    // console.table(
    //     [
    //         birthDate.getFullYear(),
    //         currentDate.getFullYear() ,
    //         age
    //     ]
    // )
    return age;
}

ageCalculator("1990-01-20");