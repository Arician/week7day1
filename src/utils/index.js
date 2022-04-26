const animeArray=[];

class Anime{
    constructor(title, protag='Not Specified', protagVA='Not specified', genre='Not specified'){
        this.title=title;
        this.protag=protag;
        this.protagVA=protagVA;
        this.genre=genre;
    }
    add(){
        animeArray.push(this)
    }
};

module.exports={
    Anime,
    animeArray
}