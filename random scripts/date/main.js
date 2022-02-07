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

date = new Date();
console.log(date);
// to sring
console.log(date.toString());

//  to gmt
date.toGMTString();