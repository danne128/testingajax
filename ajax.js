// Javascript med AJAX
// Vi använder AJAX för att hämta innehållet på en hemsida
// Ajax hämtar data från någon address

// Påbörja en hämtning

var request = new XMLHttpRequest();

request.onreadystatechange = function() {

    console.log("Nånting hände!");

    if (request.readyState == 4 && request.status == 200) {

        console.log("Svaret (response) är " + request.responseText);

    }


}

request.open('GET', 'http://mardby.se/AJK15G/lorem_text.php');
request.send();
