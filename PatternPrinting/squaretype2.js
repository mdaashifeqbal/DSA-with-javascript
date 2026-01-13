const input = require("prompt-sync")();

let n = Number(input("Enter number please:= "));

//outer loop controlling rows
for (let i = 1; i <= n; i++) {
  //inner loop controlling columns
  for (let j = 1; j <= n; j++) {
    //condition to controlling printing stars
    if (i == 1 || i == n || j == 1 || j == n) {
      process.stdout.write(`*`);
    } else {
      process.stdout.write(" ");
    }
  }
  process.stdout.write("\n");
}
