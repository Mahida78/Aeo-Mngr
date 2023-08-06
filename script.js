// The Location script
var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = position.coords.latitude +
        "," + position.coords.longitude;

}



// The Form Script
const scriptURL = "https://script.google.com/macros/s/AKfycbx9olXn7GySHWRWsC1EFdNMYE0mXrGPZrar5XcqCKlzrjai3xps0V1efTvYhgiS7AXxaQ/exec";

const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "All data sent succesfully :)"
            setTimeout(function () {
                msg.innerHTML = " "
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


//The Navigation bar
