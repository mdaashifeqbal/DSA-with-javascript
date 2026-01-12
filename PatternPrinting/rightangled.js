const input=require("prompt-sync")();

let number=Number(input("Enter number please :="));

for(let i=number;i>0;i--)
{
    for(let j=i;j>0;j--)
    {
        process.stdout.write(" * ");
    }
    process.stdout.write("\n");
}