
function ageInDays() {
    var birthyear = prompt("Please type your Birth year");
    var ageOnDays = (2021 - birthyear) * 365;
    document.getElementById("answer").innerHTML = ("Result = " + ageOnDays);
}