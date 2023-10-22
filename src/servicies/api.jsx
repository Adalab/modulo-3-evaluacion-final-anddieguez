const getDataFromApi = () =>{
    return fetch("https://owen-wilson-wow-api.onrender.com/wows/random?results=50")
    .then((response) => response.json())
    .then ((data) => {
      
      //console.log(movies)
     const cleanData = data.map((item) =>{
      return {
        name: item.movie,
        year: item.year,
        line: item.full_line,
        director: item.director,
        audio: item.audio,
        poster: item.poster,
        id: item.movie_duration,
     };
    

     });
     return cleanData;
});
};

export default getDataFromApi;