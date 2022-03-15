module.exports = app => {
    const movie = require("../controllers/movie.controller.js");
    
      var router = require("express").Router();
  
      router.get("/", movie.findAlltitle);
  
      router.get("/movies?status=PUBLISHED", movie.PUBLISHED);
  
      router.get("/movies?status=RELEASED", movie.RELEASED);
   
      router.get("/movie/{movieId}", movie.details );
  
      router.get("/movies?status=RELEASED& title={title}&genres={genres}&artists={artists}& start_date={startdate}&end_date={enddate}", movie.data);
    
      router.get("/movie/{movieId}", movie.shows);
    
      app.use('/api/movie', router);
    };
    
