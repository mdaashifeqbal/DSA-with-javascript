const input = require("prompt-sync")();

let n = Number(input("Enetr number please:= "));

//out loop controlling rows
for (let i = 1; i <= n; i++) {
  //inner loop controlling columns
  for (let j = 1; j <= n * 2; j++) {
    //condition to check printing point
    if (i == j || (i + j) == 2*n) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  process.stdout.write("\n");
}
