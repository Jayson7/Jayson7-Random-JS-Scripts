///////////////////////////////////////////////////////////////////////////////////////////////////////////
// value :  The number of milliseconds since 1 January 1970 00:00:00.000 UTC (Unix epoch)
// dateAsString:     A date formatted as a string
// year:    The year value of the date. Note that month must also be provided, or the value will be interpreted as a number of milliseconds. Also note that values between 0 and 99 have special meaning. See the examples.
// month:    The month, in the range 0-11 . Note that using values outside the speciﬁed range for this and the following parameters will not result in an error, but rather cause the resulting date to "roll over" to the next value.
// day Optional: The date, in the range 1-31 .
// hour Optional: The hour, in the range 0-23 .
// minute Optional: The minute, in the range 0-59 .
// second Optional: The second, in the range 0-59 .
// millisecond Optional: The millisecond, in the range 0-999 .
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

datess = new Date();
console.log(datess);
// to sring
console.log(datess.toString());

//  to gmt
datess.toGMTString();

// to local time
datess.toLocaleDateString();

var DateObject = (function() {
    var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    var date = function(str) {
        this.set(str);
    };
    date.prototype = {
        set: function(str) {
            var dateDef = str ? new Date(str) : new Date();
            this.day = dateDef.getDate();
            this.dayPadded = this.day < 10 ? "0" + this.day : "" + this.day;
            this.month = dateDef.getMonth() + 1;
            this.monthPadded = this.month < 10 ? "0" + this.month : "" + this.month;
            this.monthName = monthNames[this.month - 1];
            this.year = dateDef.getFullYear();
        },
        get: function(properties, separator) {
            var separator = separator ? separator : "-";
            ret = [];
            for (var i in properties) {
                ret.push(this[properties[i]]);
            }
            return ret.join(separator);
        },
    };
    return date;
})();

// Get the current year
var year = new Date().getFullYear();
console.log(year);
// Sample output: 2016

// Get the current month
var month = new Date().getMonth();
console.log(month);
// Sample output: 0

// Get the current day
var day = new Date().getDate();
console.log(day);
// Sample output: 31

// Get the current hour
var hours = new Date().getHours();
console.log(hours);
// Sample output: 10

var minutes = new Date().getMinutes();
console.log(minutes);
// Sample output: 39

var seconds = new Date().getSeconds();
console.log(second);
// Sample output: 48

// Get the current milliseconds
// To get the milliseconds (ranging from 0 to 999) of an instance of a Date object, use its getMilliseconds method.
var milliseconds = new Date().getMilliseconds();
console.log(milliseconds);
// Output: milliseconds right now

// To increment date objects in JavaScript, we can usually do this:
var checkoutDate = new Date();
// Thu Jul 21 2016 10:05:13 GMT-0400 (EDT)
checkoutDate.setDate(checkoutDate.getDate() + 1);
console.log(checkoutDate); // Fri Jul 22 2016 10:05:13 GMT-0400 (EDT)

var checkoutDate = new Date();
// Thu Jul 21 2016 10:05:13 GMT-0400 (EDT)
checkoutDate.setDate(checkoutDate.getDate() + 12);
console.log(checkoutDate); // Tue Aug 02 2016 10:05:13 GMT-0400 (EDT)

// Adding Work Days
// If you wish to add work days (in this case I am assuming Monday - Friday) you can use the setDate function
// although you need a little extra logic to account for the weekends (obviously this will not take account of national holidays) -
function addWorkDays(startDate, days) {
    // Get the day of the week as a number (0 = Sunday, 1 = Monday, .... 6 = Saturday)
    var dow = startDate.getDay();
    var daysToAdd = days;
    // If the current day is Sunday add one day
    if (dow == 0) daysToAdd++;
    // If the start date plus the additional days falls on or after the closest Saturday calculate
    weekends;
    if (dow + daysToAdd >= 6) {
        //Subtract days in current working week from work days
        var remainingWorkDays = daysToAdd - (5 - dow);
        //Add current working week's weekend
        daysToAdd += 2;
        if (remainingWorkDays > 5) {
            //Add two days for each working week by calculating how many weeks are included
            daysToAdd += 2 * Math.floor(remainingWorkDays / 5);
            //Exclude final weekend if remainingWorkDays resolves to an exact number of weeks
            if (remainingWorkDays % 5 == 0) daysToAdd -= 2;
        }
    }
    startDate.setDate(startDate.getDate() + daysToAdd);
    return startDate;
}

// convert to JSON
var date1 = new Date();
date1.toJSON();

// To check the equality of Date values:
var date1 = new Date();
var date2 = new Date(date1.valueOf() + 10);
console.log(date1.valueOf() === date2.valueOf());

var date1 = new Date();
var date2 = new Date(date1.valueOf() + 10);
console.log(date1 < date2);

// To compare the diﬀerence of two dates, we can do the comparison based on the timestamp.
var date1 = new Date();
var date2 = new Date(date1.valueOf() + 5000);
var dateDiff = date1.valueOf() - date2.valueOf();
var dateDiffInYears = dateDiff / 1000 / 60 / 60 / 24 / 365; //convert milliseconds into years
console.log("Date difference in years : " + dateDiffInYears);