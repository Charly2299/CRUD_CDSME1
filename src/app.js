const express = require('express')
const config = require('./config');

const userRouter=require('./games/games.router').router

const app=express()

app.use(express.json())



app.get('/',(req,res)=>{
    res.status(200).json({message: 'Bienevenidooo a la TODO-LIST'})
})


app.use('/v1',userRouter)






app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`);
})
