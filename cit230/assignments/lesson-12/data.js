var requestURL = 'servies.json'; //paste town URL here

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send(); //copy paste to here

request.onload = function () {
    var services = request.response;

    console.log(response);

    $.each(response.service, function (i, item) {
        var tr = $('<tr>').append(
            $('<th>').text(item.name),
            $('<th>').text('$' + item.price.toFixed(2))
        );
        $("table").append(tr);
    });
}