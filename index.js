// Part 1
// Question 1
var markHigherBMI = false;
var markHeight = 1.69;
var johnHeight = 1.95;
var markWeight = 78;
var johnWeight = 92;

var markBMI = markWeight / (markHeight * markHeight);
var johnBMI = johnWeight / (johnHeight * johnHeight);

if (markBMI > johnBMI) markHigherBMI = true;
else markHigherBMI = false;

if (markHigherBMI) console.log("Mark's BMI is higher than John's BMI.");
else console.log("Mark's BMI is not higher than John's BMI.");

markHeight = 1.88;
johnHeight = 1.76;
markWeight = 95;
johnWeight = 85;

markBMI = markWeight / (markHeight * markHeight);
johnBMI = johnWeight / (johnHeight * johnHeight);

if (markBMI > johnBMI) markHigherBMI = true;
else markHigherBMI = false;

if (markHigherBMI) console.log("Mark's BMI is higher than John's BMI.");
else console.log("Mark's BMI is not higher than John's BMI.");

// Question 2
markHigherBMI = false;
markHeight = 1.69;
johnHeight = 1.95;
markWeight = 78;
johnWeight = 92;

markBMI = markWeight / (markHeight * markHeight);
johnBMI = johnWeight / (johnHeight * johnHeight);

if (markBMI > johnBMI) markHigherBMI = true;
else markHigherBMI = false;

if (markHigherBMI)
  console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)}).`);
else
  console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)}).`);

markHeight = 1.88;
johnHeight = 1.76;
markWeight = 95;
johnWeight = 85;

markBMI = markWeight / (markHeight * markHeight);
johnBMI = johnWeight / (johnHeight * johnHeight);

if (markBMI > johnBMI) markHigherBMI = true;
else markHigherBMI = false;

if (markHigherBMI)
  console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)}).`);
else
  console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)}).`);

// Question 3
const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

const dolphinsScores2 = [97, 112, 101];
const koalasScores2 = [109, 95, 123];

const dolphinsScores3 = [97, 112, 101];
const koalasScores3 = [109, 95, 106];

function calculateAverage(scores) {
  const totalScore = scores.reduce((acc, score) => acc + score, 0);
  return totalScore / scores.length;
}

function checkWinner(dolphinsScores, koalasScores) {
  const dolphinsAverage = calculateAverage(dolphinsScores);
  const koalasAverage = calculateAverage(koalasScores);

  console.log(`Dolphins' average score: ${dolphinsAverage.toFixed(1)}`);
  console.log(`Koalas' average score: ${koalasAverage.toFixed(1)}`);

  if (dolphinsAverage >= 100 && koalasAverage >= 100) {
    if (dolphinsAverage > koalasAverage) console.log("Dolphins win!");
    else if (koalasAverage > dolphinsAverage) console.log("Koalas win!");
    else console.log("It's a draw as both teams have scores >= 100.");
  } else if (dolphinsAverage >= 100) console.log("Dolphins win with a score >= 100.");
  else if (koalasAverage >= 100) console.log("Koalas win with a score >= 100.");
  else console.log("No team wins as neither team achieved the minimum score of 100.");
}

// Test with Data 1
console.log("Data 1:");
checkWinner(dolphinsScores1, koalasScores1);

// Test with Bonus Data 1
console.log("Bonus Data 1:");
checkWinner(dolphinsScores2, koalasScores2);

// Test with Bonus Data 2
console.log("Bonus Data 2:");
checkWinner(dolphinsScores3, koalasScores3);

// Question 4
function calculateTip(billValue) {
  var tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
  var total = billValue + tip;
  console.log(`The bill was ${billValue}, the tip was ${tip.toFixed(2)}, and the total value is ${total.toFixed(2)}`);
}

console.log("Test with bill value 275:");
calculateTip(275);

console.log("Test with bill value 40:");
calculateTip(40);

console.log("Test with bill value 430:");
calculateTip(430);

// Part 2
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins1 = calcAverage(44, 23, 71);
const avgKoalas1 = calcAverage(65, 54, 49);

const avgDolphins2 = calcAverage(85, 54, 41);
const avgKoalas2 = calcAverage(23, 34, 27);

const checkWinner1 = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas)
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  else if (avgKoalas >= 2 * avgDolphins)
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  else console.log("No team wins!");
};

console.log("Test Data 1:");
checkWinner1(avgDolphins1, avgKoalas1);

console.log("Test Data 2:");
checkWinner1(avgDolphins2, avgKoalas2);

// Question 2
const calcTip = (bill) => (bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);

const bills = [125, 555, 44];

const tips = bills.map(calcTip);
const total = bills.map((bill, index) => bill + tips[index]);

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Total:", total);

// Question 3
const mark = {
  name: "Mark",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.weight / (this.height * this.height);
    return this.BMI;
  },
};

const john = {
  name: "John",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.weight / (this.height * this.height);
    return this.BMI;
  },
};

const markBMI1 = mark.calcBMI();
const johnBMI1 = john.calcBMI();

if (markBMI1 > johnBMI1)
  console.log(`${mark.name}'s BMI (${markBMI1.toFixed(1)}) is higher than ${john.name}'s (${johnBMI1.toFixed(1)})!`);
else if (johnBMI1 > markBMI1)
  console.log(`${john.name}'s BMI (${johnBMI1.toFixed(1)}) is higher than ${mark.name}'s (${markBMI1.toFixed(1)})!`);
else
  console.log(`Both ${mark.name} and ${john.name} have the same BMI of ${markBMI1.toFixed(1)}!`);
