// Javascript med AJAX
// Vi använder AJAX för att hämta innehållet på en hemsida
// Ajax hämtar data från någon address

// Påbörja en hämtning

var request = new XMLHttpRequest();

request.onreadystatechange = function() {

    console.log("Nånting hände!");

}

request.open('GET', 'http://mardby.se/AJK15G/lorem_text.php');
request.send();
