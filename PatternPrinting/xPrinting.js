const input = require("prompt-sync")();

let userNumber = Number(input("Enter your number please:= "));

//outer loop controlling rows
for (let i = 1; i <= userNumber; i++) {
  //inner loop controlling columns
  for (let j = 1; j <= userNumber; j++) {
    //condition to check equal and sum is i and j=6
    if (i == j || i + j == (userNumber+1)) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  process.stdout.write("\n");
}
