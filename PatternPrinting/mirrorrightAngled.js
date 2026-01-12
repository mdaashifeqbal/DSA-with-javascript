const input=require("prompt-sync")();

let userNumber=Number(input("Enter your range number:= "));

//outer loop controlling row
for(let i=0;i<userNumber;i++)
{
    //inner loop controlling space
    for(let space=i;space<userNumber-1;space++)
    {
        process.stdout.write(" ");
    }
    //inner loop controlling stars print
    for(let j=i;j>=0;j--)
    {
        process.stdout.write("*");
    }
    process.stdout.write("\n");

}