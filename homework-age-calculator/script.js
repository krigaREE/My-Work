const btnEelement = document.getElementById("btn");
const bdElement = document.getElementById("birthday");
const resElement = document.getElementById("result")


function getAge(birthdayValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear()
    const months = currentDate.getMonth() - birthdayDate.getMonth()

    if (months < 0 || (months === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;
    }

    return (age)
}


function calculateAge() {
    const birthdayValue = bdElement.value
    if (birthdayValue === "") {
        alert("Please enter your birthday date")
    } else {
        const age = getAge(birthdayValue)
        resElement.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`
    }

}


btnEelement.addEventListener("click", calculateAge)