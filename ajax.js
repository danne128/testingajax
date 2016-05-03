/*// Javascript med AJAX
// Vi använder AJAX för att hämta innehållet på en hemsida
// Ajax hämtar data från någon address

// Påbörja en hämtning

var request = new XMLHttpRequest();

request.onreadystatechange = function() {

    console.log("Nånting hände!");

    if (request.readyState == 4 && request.status == 200) {

        console.log("Svaret (response) är " + request.responseText);

        var data = request.responseText;
        document.write(data)

    }


}

request.open('GET', 'http://mardby.se/AJK15G/lorem_text.php');
request.send();
*/

jQuery.ajax({
    url: "http://abandoned-killerwale-lkp8.rapidapi.io/random-number",
    type: "GET",
    contentType: "application/x-www-form-urlencoded",
    data: {
    },
})
.done(function(data, textStatus, jqXHR) {
    console.log("HTTP Request Succeeded: " + jqXHR.status);
    console.log(data);
    document.write(data)
})
.fail(function(jqXHR, textStatus, errorThrown) {
    console.log("HTTP Request Failed");
})
.always(function() {
    /* ... */
});
