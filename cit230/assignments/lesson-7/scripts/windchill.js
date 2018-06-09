<<<<<<< HEAD
var t = 50;
var s= 100;

var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275* t * Math.pow(s, 0.16); 

document.getElementById("temp").innerHTML=t;

document.getElementById("windSpeed").innerHTML=s;

=======
var t = 50;
var s= 100;

var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275* t * Math.pow(s, 0.16); 

document.getElementById("temp").innerHTML=t;

document.getElementById("windSpeed").innerHTML=s;

>>>>>>> 2b6e4deec8f657668c40352b14726a391db7fcd5
document.getElementById("windChill").innerHTML=f.toFixed(2);