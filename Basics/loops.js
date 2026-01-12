// for(let i=0;i<=500;i++)
// {
//     console.log(i)
// }

// let number=2;
// let sum=0;

// for(let i=0;i<=number;i++)
// {
//   sum+=i;
// }

// console.log(sum);

// let  number=10;

// let fact=1;

// for(let i=1;i<=number;i++)
// {
//     fact=fact*i;
// }

// console.log(fact);

let random=Math.floor(Math.random()*100)+1;

let userChoice;

while(userChoice!=random)
{
    userChoice=prompt("Enter number from 1 to 100");
    if(isNaN(userChoice) || userChoice<1 || userChoice>100)
    {
        console.log("Inavlid number");
    }
    

}

console.log(random)