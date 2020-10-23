console.log('Start')


const fetchDogImages = () => {

const data = fetch('https://dog.ceo/api/breeds/image/random');
console.log(data);

}


fetchDogImages ();
