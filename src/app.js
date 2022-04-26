const yargs=require('yargs');
const {animeArray,Anime} = require('./utils')
// console.log(process.argv)
// console.log(yargs.argv)
const app=(yargsObj)=>{
    if(yargsObj.add){
        const anime=new Anime(yargsObj.title,yargsObj.protag,yargsObj.protagVA,yargsObj.genre);
        anime.add()
        console.log(animeArray)
    }else if(yargsObj.addtwo){
            const anime=new Anime(yargsObj.title,yargsObj.protag,yargsObj.protagVA,yargsObj.genre);
            anime.add()
            const anime2=new Anime(yargsObj.title2,yargsObj.protag2,yargsObj.protagVA2,yargsObj.genre2);
            anime2.add()
            console.log(animeArray)
        console.log(animeArray)
    }else{
        console.log("Incorrect command")
    }
}

app(yargs.argv);