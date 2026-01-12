const input=require("prompt-sync")();

let number=Number(input("enter number please :="));

for(let i=0;i<number;i++)
{
    for(let j=0;j<number;j++)
    {
        process.stdout.write(" * ");
    }
    process.stdout.write("\n");
}