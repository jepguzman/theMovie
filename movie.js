let urlImg = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2'

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWYxZjVjOGRlMGQxNWEwYTMzMjlhYjMzNWNmZmZlYyIsInN1YiI6IjY1NWNlZmExZDRmZTA0MDBhYzM5OWZlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VAVp4Arhb0h46CfHC45ZmGfAmBU6Mtup7N6MKPZkxkU'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-MX&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));