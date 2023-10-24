import { v4 as uuidv4 } from 'uuid';

const getDataFromApi = () =>{
    return fetch("https://owen-wilson-wow-api.onrender.com/wows/random?results=50")
    .then((response) => response.json())
    .then ((data) => {
      
      //console.log(movies)
     const cleanData = data
     .sort((a, b)=>{return a.movie > b.movie ? 1 : -1})
     .map((item, index) =>{
      return {
        name: item.movie,
        year: item.year,
        line: item.full_line,
        director: item.director,
        audio: item.audio,
        poster: item.poster,
        id: uuidv4(),
     };
    

     });//console.log(cleanData)
     return cleanData;
});
};

export default getDataFromApi;