function celsiusToFahrenheit() {
	let celsiusValue = Number(celsiusInput.value);
	if(celsiusValue < -273.15 || celsiusValue > Number.MAX_SAFE_INTEGER) {
		fahrenheitInput.value = '';
		alert('Please enter a valid temperature');
		celsiusInput.focus();
	} else {
		result = celsiusValue * 1.8 + 32;
		fahrenheitInput.value = result.toFixed(2);
	}
}

function fahrenheitToCelsius() {
	let fahrenheitValue = Number(fahrenheitInput.value);
	if(fahrenheitValue < -459.67 || fahrenheitValue > Number.MAX_SAFE_INTEGER) {
		celsiusInput.value = '';
		alert('Please enter a valid temperature');
		fahrenheitInput.focus();
	} else {
		result = (fahrenheitValue - 32) / 1.8;
		celsiusInput.value = result.toFixed(2);
	}
}

let celsiusButton = document.querySelector('#celsiusSubmit');
let celsiusInput = document.querySelector('#celsiusInput');
let fahrenheitButton = document.querySelector('#fahrenheitSubmit');
let fahrenheitInput = document.querySelector('#fahrenheitInput');
celsiusButton.addEventListener('click', celsiusToFahrenheit);
fahrenheitButton.addEventListener('click', fahrenheitToCelsius);