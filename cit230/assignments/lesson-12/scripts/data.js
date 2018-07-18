var requestURL = 'data/servies.json'; 

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send(); 

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