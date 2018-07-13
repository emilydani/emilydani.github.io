var requestURL = 'data/servies';//paste town URL here

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();//copy paste to here

request.onload = function () {
    var services = request.response;