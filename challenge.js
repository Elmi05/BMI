// Good Luck! You got this 💪🏾
// Write your code here.


function calculateBMI(weight, height) {
    return weight / (height * height)
}

let aliWeight = 50;
let aliHeight = 1.83;
let aliBMI = calculateBMI(aliWeight, aliHeight)

let mohamedWeight = 60;
let mohamedHeight = 1.80;
let mohamedBMI = calculateBMI(mohamedWeight, mohamedHeight)

if (aliBMI > mohamedBMI) {
    console.log("Ali BMI is higher")
} else if (mohamedBMI > aliBMI) {
    console.log("Mohamed BMI is higher")
} else {
    console.log("Ali and Mohamed have the same BMI")
}