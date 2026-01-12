const input=require("prompt-sync")();

let number=Number(input("Enter a number"));

for(i=0;i<number;i++)
{
     process.stdout.write(" * ");
     process.stdout.write("\n");
}