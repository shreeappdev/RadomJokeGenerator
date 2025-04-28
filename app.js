import chalk from "chalk";
import https from "https";
import { url } from "inspector";

const getJoke=()=>{
   const url="https://official-joke-api.appspot.com/random_joke";

   https.get(url,(res)=>{
    let data="";
        res.on('data',(chunk)=>{
            data +=chunk;

        });
        res.on('end',()=>{
            const joke=JSON.parse(data);
            console.log("Here is your joke");
            console.log(chalk.red(joke.setup));
            console.log(chalk.blue.bgRed.bold(joke.punchline));
        });

        res.on('error',(err)=>{
            console.log(chalk.red(err.message));
        })
   })
}

getJoke();

