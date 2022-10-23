let subscribed = true;
let loggedIn = true;
if (subscribed === true) {
  console.log("show the video");
} else if (loggedIn === true) {
  console.log("tell the user to upgrade their subscription");
} else {
  console.log("tell user to log into account");
}
let cash = 50;
let price = 40;
let defrence = cash - price;
let IsStoreOpen = false;
if (cash > price) {
  console.log(`you paid extra - here's ${defrence} dollars change`);
} else if (cash === price) {
  console.log("you paid the exact amount, have a nice day!");
} else {
  console.log(`not enouch money - you stll owe ${-defrence} dollars`);
}
if (cash >= price && !IsStoreOpen) {
  console.log("print the receipt");
}
