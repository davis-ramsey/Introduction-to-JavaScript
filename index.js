/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

// const votingAge = 19;
// if (votingAge > 18) console.log(true);

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

// let variable = null;
// const variable2 = 10;
// if (variable2 === 10) variable = true;
// else variable = false;
// console.log(variable);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

// console.log(Number('1999'));

//Task d: Write a function to multiply a*b

// const multiply = (a, b) => a * b;
// console.log(multiply(2, 5));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

// const ageConverter = (humanAge) => humanAge * 7;
// console.log(ageConverter(30));

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

// const dogFeeder = (weight, age) => {
// 	if (2 / 12 <= age && age < 4 / 12) return weight * 0.1;
// 	else if (4 / 12 <= age && age < 7 / 12) return weight * 0.05;
// 	else if (7 / 12 <= age && age < 1) return weight * 0.04;
// 	if (age >= 1) {
// 		if (weight <= 5) return weight * 0.05;
// 		else if (6 <= weight && weight <= 10) return weight * 0.04;
// 		else if (11 <= weight && weight <= 15) return weight * 0.03;
// 		else if (weight > 15) return weight * 0.02;
// 	}
// };

// console.log(dogFeeder(15, 1));

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

// const game = (choice) => {
// 	const computerPlay = Math.floor(Math.random() * 3); //returns 0,1, or 2. 0==='rock', 1==='paper', 2==='scissors'
// 	if (choice === 'rock') {
// 		if (computerPlay === 0) return `Player chose ${choice} and Computer played rock. It's a tie!`;
// 		else if (computerPlay === 1) return `Player chose ${choice} and Computer played paper. Computer wins!`;
// 		else return `Player chose ${choice} and Computer played scissors. Player wins!`;
// 	} else if (choice === 'paper') {
// 		if (computerPlay === 0) return `Player chose ${choice} and Computer played rock. Player wins!`;
// 		else if (computerPlay === 1) return `Player chose ${choice} and Computer played paper. It's a tie!`;
// 		else return `Player chose ${choice} and Computer played scissors. Computer wins!`;
// 	} else if (choice === 'scissors') {
// 		if (computerPlay === 0) return `Player chose ${choice} and Computer played rock. Computer wins!`;
// 		else if (computerPlay === 1) return `Player chose ${choice} and Computer played paper. Player wins!`;
// 		else return `Player chose ${choice} and Computer played scissors. It's a tie!`;
// 	}
// };

// console.log(game('scissors'));

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

// const metricConverter = (km) => km * 0.621371;

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

// const metricConverter = (feet) => feet * 30.48;

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

// const annoyingSong = (startNum) => {
// 	while (startNum !== 0) {
// 		console.log(
// 			`${startNum} bottles of soda on the wall, ${startNum} bottles of soda, take one down pass it around ${startNum -
// 				1} bottles of soda on the wall`
// 		);
// 		startNum--;
// 	}
// };

// annoyingSong(10);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

// const gradeCalculator = (grade) => {
// 	if (grade >= 90) return 'A';
// 	else if (grade >= 80) return 'B';
// 	else if (grade >= 70) return 'C';
// 	else if (grade >= 60) return 'D';
// 	else return 'F';
// };

// console.log(gradeCalculator(90));

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

// const countVowels = (word) => {
// 	const wordCheck = word.toLowerCase();
// 	let numVowels = 0;
// 	const vowels = [ 'a', 'e', 'i', 'o', 'u' ];
// 	for (let char of wordCheck) if (vowels.includes(char)) numVowels++;
// 	return numVowels;
// };

// console.log(countVowels('aaaPLeE'));

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
// const game = () => {
// 	const choice = window.prompt();
// 	const computerPlay = Math.floor(Math.random() * 3); //returns 0,1, or 2. 0==='rock', 1==='paper', 2==='scissors'
// 	if (choice === 'rock') {
// 		if (computerPlay === 0) return `Player chose ${choice} and Computer played rock. It's a tie!`;
// 		else if (computerPlay === 1) return `Player chose ${choice} and Computer played paper. Computer wins!`;
// 		else return `Player chose ${choice} and Computer played scissors. Player wins!`;
// 	} else if (choice === 'paper') {
// 		if (computerPlay === 0) return `Player chose ${choice} and Computer played rock. Player wins!`;
// 		else if (computerPlay === 1) return `Player chose ${choice} and Computer played paper. It's a tie!`;
// 		else return `Player chose ${choice} and Computer played scissors. Computer wins!`;
// 	} else if (choice === 'scissors') {
// 		if (computerPlay === 0) return `Player chose ${choice} and Computer played rock. Computer wins!`;
// 		else if (computerPlay === 1) return `Player chose ${choice} and Computer played paper. Player wins!`;
// 		else return `Player chose ${choice} and Computer played scissors. It's a tie!`;
// 	}
// };
// console.log(game());
