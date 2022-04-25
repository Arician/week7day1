const movieArray=[];

class Movie{
    constructor(title, actor='Not specified'){
        this.title=title;
        this.actor=actor;
    }
    add(){
        movieArray.push(this)
    }
};

module.exports={
    Movie,
    movieArray
}