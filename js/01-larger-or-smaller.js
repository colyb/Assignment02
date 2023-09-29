// Larger or Smaller?
/* 
Usage: Use simple conditional statements

Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. 
Don’t forget to handle the fact that the two could be equal.
*/

let num1 = prompt("Please enter the first number.")
let num2 = prompt("Please enter the second number.")

if (num1 > num2)
{
    document.write(num1)
}
else if (num1 < num2)
{
    document.write(num2)
}
else
{
    document.write("They are equal!")
}