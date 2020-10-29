console.log('Start')


const fetchDogImages = () => {

const data = fetch('https://dog.ceo/api/breeds/image/random', function (data) {
console.log(data);
});

fetchDogImages ();


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


$.getJSON('https://randomapi.com/api/nwd0grsr?key=YW53-XBVW-UISK-ZCM5', function (dataTwo) {
  console.log(dataTwo);
});
