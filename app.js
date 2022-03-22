// set initial count
let count = 0;
// select value and buttons
let value = document.getElementById('value');
let btns = document.querySelectorAll('.btn');
// loop over buttons and give a function with a btn parameter for each
btns.forEach(function (btn) {
	// eventlistener with call back function for each button
	// e => the click event
	// e.currentTarget => what is being clicked
	// e.currentTarget.classList => What's the class name of what is being clicked
	btn.addEventListener('click', function (e) {
		// assign the event with class to a variable
		const styles = e.currentTarget.classList;
		// the variable contains a class named 'decrease'
		if (styles.contains('decrease')) {
			// decrease count by 1
			count--;
			// the variable contains a class named 'increase'
		} else if (styles.contains('increase')) {
			// increase count by 1
			count++;
		} else {
			// reset count to 0
			count = 0;
		}
		if (count < 0) {
			value.style.color = 'red';
		} else if (count > 0) {
			value.style.color = 'green';
		} else {
			value.style.color = '#222';
		}
		value.textContent = count;
	});
});
