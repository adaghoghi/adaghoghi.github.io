function assignGrade(s) {
	if (s > 90) {
		return 'A';
	} else if (s > 80) {
		return 'B';
	} else if (s > 70) {
		return 'C';
	} else if (s > 60) {
		return 'D';
	} else {
		return 'F';
	}
}

console.log('You got a ' + assignGrade(40))
console.log('You got a ' + assignGrade(65))
console.log('You got a ' + assignGrade(80))
