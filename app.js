const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const outputMsg = document.querySelector("#output-msg");

checkButton.addEventListener("click", checkBirthdateIsLucky);

function calculateSum(dob) {
	dob = dob.replaceAll("-", "");
	let sum = 0;
	for (let i = 0; i < dob.length; i++) {
		sum = sum + Number(dob.charAt(i));
	}
	return sum;
}

function compareValues(sum, luckyNumber) {
	if (sum % luckyNumber.value === 0) {
		outputMsg.innerText = "Your Birthdate is lucky 😍";
	} else {
		outputMsg.innerText = "Your Birthdate is not lucky 😶";
	}
}

function checkBirthdateIsLucky() {
	dob = dateOfBirth.value;

	if (dob === "" || luckyNumber.value === "") {
		outputMsg.innerText = "Fill the boxes to proceed";
	} else if (luckyNumber.value === 0) {
		outputMsg.innerText = "Please Enter Your Lucky Number";
	} else if (luckyNumber.value < 1) {
		outputMsg.innerText = "Lucky Number should be greater than 0";
	} else {
		const sum = calculateSum(dob);
		compareValues(sum, luckyNumber.value);
	}
}
