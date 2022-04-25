const yargs=require('yargs');
const {movieArray,Movie} = require('./utils')
// console.log(process.argv)
// console.log(yargs.argv)

const app=(yargsObj)=>{
    if(yargsObj.add){
        const movie=new Movie(yargsObj.title,yargsObj.actor);
        movie.add()
        console.log(movieArray)
    }else{
        console.log("Incorrect command")
    }
}

app(yargs.argv);