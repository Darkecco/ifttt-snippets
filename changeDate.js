let myInput = DoButton.doButtonNewCommandCommon.OccurredAt; // Change the DoButton Trigger to the one used in the IFTTT recipe.
let myDateTime = myInput.split("at").map(function(item) {
  return item.trim();
});

function Pad(str: string) { // This function pads single digit numbers with a preceeding 0.
  if (str.length < 2) {
    return "0" + str;
  } else {
    return str;
  }
}

let myMonths = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec"
];

let myDate = myDateTime[0].split(" ");
myDate[0] = (myMonths.indexOf(myDate[0].substr(0, 3).toLowerCase()) + 1).toString();
myDate[0] = Pad(myDate[0]);
myDate[1] = myDate[1].replace(",", "");
myDate[1] = Pad(myDate[1]);
myDateTime[0] = myDate.join(" "); // You can change this delimiter to what you need in the date ouput, i.e. "-" or "/".

let my12Hour = myDateTime[1].substr(-2, 2);
let myHour = parseInt(myDateTime[1].substr(0, 2));
let myMinute = myDateTime[1].substr(3, 2);

if (myHour != 12) {
  if (my12Hour == "PM") {
    myHour = (myHour + 12) % 24;
  }
} else {
  if (my12Hour == "AM") {
    myHour = 0;
  }
}

let myHourStr = myHour.toString();
myHourStr = Pad(myHourStr);

myDateTime[1] = myHour + ":" + myMinute;
let myOutput = myDateTime.join(" ")

IfNotifications.sendNotification.setMessage("Button pressed @ " + myOutput)
