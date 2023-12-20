import  express  from 'express';

const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send(`all your dep run on ${PORT}`)
})

app.listen(PORT , ()=>{
    console.log(`your server runs on${PORT}`)
})