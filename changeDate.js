let myInput = "inputdate" // change to actual input from Trigger.
let myDateTime = myInput.split("at").map(function(item) {
	return item.trim();
});

// This function adds a leading zero.
function pad(str: string) {
	if (str.length < 2) {
		return "0" + str;
	} else {
		return str;
	}
}

// This function converts 12 hour time to 24 hour time.
function convert24(hour: number, amPM: string){
	if (hour == 12){
		hour = 0;
	}
	if (amPM == "PM"){
		hour += 12;
	}
	return hour;
}

// Array with first three letters of months.
let myMonthsList = [
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

let myDay = myDate[1].replace(",", "");
let myMonth = (myMonthsList.indexOf(myDate[0].substr(0, 3).toLowerCase()) + 1).toString(); // Convert month string to month number.
let myYear = myDate[2];

myDay = pad(myDay);
myMonth = pad(myMonth);

let myNewDate = [myDay, myMonth, myYear].join(" "); // You can choose the delimiter in the join function.


let myAMPM = myDateTime[1].substr(-2, 2);
let myHour = parseInt(myDateTime[1].substr(0, 2));
let myMinute = myDateTime[1].substr(3, 2);

myHour = convert24(myHour, myAMPM);
let myHourStr = pad(myHour.toString());
let myNewTime = [myHourStr, myMinute].join(":");

let myOutput = [myNewDate, myNewTime].join(" "); // This is the output that can be used in the Action.
