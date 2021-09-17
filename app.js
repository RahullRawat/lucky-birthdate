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

function checkBirthdateIsLucky() {
	dob = dateOfBirth.value;
	const sum = calculateSum(dob);

	// comparing values
	if (sum && dob && luckyNumber.value) {
		if (sum % luckyNumber.value === 0) {
			outputMsg.innerText = "Your Birthdate is lucky 😍";
		} else {
			outputMsg.innerText = "Your Birthdate is not lucky 😶";
		}
	} else {
		outputMsg.innerText = "Please enter both fields ";
	}
}

// take dateOfBirth & luckyNumber as an input from user ----STEP-1

// replace hyphen from dateOfBirth with null ---STEP-2

// with for loop take dob values one by one and return sum of it ---STEP-3

// now calculate % of sum and luckyNumber and if %===0 print your birthdate is lucky and if %!===0 print your birthdate is not lucky ---STEP-4
