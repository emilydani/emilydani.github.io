var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

var now = new Date();


var monName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");


var dtString = dayName[now.getDay()] + ", " + monName[now.getMonth()] + " " + now.getDate();

document.getElementById("demo").innerHTML = dtString;

var d = new Date();
var n = d.getFullYear();
document.getElementById("year").innerHTML = n;