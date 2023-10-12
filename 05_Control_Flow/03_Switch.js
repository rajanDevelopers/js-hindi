// About the Details in Switch() Case ==>
// Example of Switch() {} ==>
// Using Switch() case Print the Month Name

let Month = 11;
switch (Month) {
  case 1:
    console.log("Janbery");
    break;

  case 2:
    console.log("Feb");
    break;

  case 3:
    console.log("Mar");
    break;

  case 4:
    console.log("Apr");
    break;

  case 5:
    console.log("May");
    break;

  case 6:
    console.log("june");
    break;

  case 7:
    console.log("July");
    break;

  case 8:
    console.log("Aug");
    break;

  case 9:
    console.log("Sep");
    break;

  case 10:
    console.log("Oct");
    break;

  case 11:
    console.log("Nov");
    break;

  case 12:
    console.log("Dec");
    break;

  default:
    console.log("This is the Invalid Number ");
    break;
}

// Another Method from user

let MonthNameString = prompt("Enter the Month Name");

switch (MonthNameString) {
  case "jan":
    console.log("jan");
    break;

  case "feb":
    console.log("feb");
    break;

  case "mar":
    console.log("mar");
    break;

  case "Apr":
    console.log("Apr");
    break;

  case "May":
    console.log("May");
    break;

  case "June":
    console.log("June");
    break;

  case "July":
    console.log("July");
    break;

  case "Aug":
    console.log("Aug");
    break;

  case "Sep":
    console.log("Sep");
    break;

  case "Oct":
    console.log("Oct");
    break;

  case "Nov":
    console.log("Nov");
    break;

  case "Dec":
    console.log("Dec");
    break;

  default:
    console.log("This is Wrong Month");
    break;
}
