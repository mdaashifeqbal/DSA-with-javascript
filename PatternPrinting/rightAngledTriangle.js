const input = require("prompt-sync")();

const number = Number(input("Enter number please :="));

//using stars
// for(let i=1;i<=number;i++)
// {
//     for(let j=i;j>0;j--)
//     {
//         process.stdout.write(" * ")
//     }
//     process.stdout.write("\n");
// }

//using number
// for (let i = 1; i <= number; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(` ${j} `);
//         // OR: process.stdout.write(String(j));
//     }
//     console.log();
// }

//using ABC
for (let i = 0; i <= number; i++) {
    let ascii = 65;
  for (let j = i; j >= 0; j--) {
    process.stdout.write(` ${String.fromCharCode(ascii)} `);
    ascii++;
  }
  process.stdout.write("\n");
}
