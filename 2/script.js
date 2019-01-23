var date = new Date();
var dateNum = date.getDay();
var dayName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
document.write("Today is : " + dayName [dateNum] + '<br />');
document.write("Current time is: " + date.getHours() + "PM :" + date.getMinutes() + " : " + date.getSeconds())
