let amount=prompt("Enter final amount");
console.log(amount);
let totalAmount;
let discountAmount = 0;

if(amount<0)
{
 console.log("invalid amount")
}
else if (amount <= 5000) {
  totalAmount = amount;
} else if (amount <= 7000) {
  discountAmount = (amount * 5) / 100;
  totalAmount = amount - discountAmount;
} else if (amount <= 9000) {
  discountAmount = (amount * 10) / 100;
  totalAmount = amount - discountAmount;
} else if (amount >9000) {
  discountAmount = (amount * 20) / 100;
  totalAmount = amount - discountAmount;
}


console.log("Your final amount after discount:=", totalAmount);
console.log("Your discount amount on purchase :=", discountAmount);
