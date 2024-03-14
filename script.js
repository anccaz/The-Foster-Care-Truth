

var factsList = [" Foster youth are 7 times more likely than non-foster youth to have Depression, and 5 times more likely to have Anxiety. "," 1 out of every 5 people who age out of the foster care system lack a home when they turn 18. ", " There were 10% more youth in foster care nationwide in 2016 than there were in 2012.", "Only a little over half - 51 percent - of all foster youth graduate high school.", "95% of parents who adopted foster youth said they would make the same decision again.", " 1 out of every 2 foster youth has dealt with 4 or more Adverse Childhood Experiences.", "8 out of every 10 foster youth enter the system with notable mental health needs."];
var facts = document.getElementById("facts");
var myBtn = document.getElementById("myBtn");
var count = 0;

myBtn.addEventListener("click", displayfacts);

facts.innerHTML = factsList [count];

function displayfacts() {
 facts.innerHTML = factsList[count];
  count++;
  if (count == factsList.length) {
    count = 0;
  }
  
}/* .js files add interaction to your website */

