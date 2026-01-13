const input = require("prompt-sync")();

let n = Number(input("Enter number please:= "));

//outer loop controlling rows
for (let i = 1; i <= n; i++) {
  //loop for printing space
  for (let space = i; space < n; space++) {
    process.stdout.write(" ");
  }

  //inner loop controlling columns
  for (let j = 1; j <= i; j++) {
    process.stdout.write(` ${i} `);
  }
  process.stdout.write("\n");
}
