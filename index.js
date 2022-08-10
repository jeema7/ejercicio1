import mongoose, {  } from "mongoose";

const db = mongoose.connection

db.on('connected', ()=>{
    console.log('se ha conectado a la base de datos 🟢');
}).on('error', ()=>{
  
    console.log('Ha ocurrido un error en la conexion 🔴');
}).on('disconnected', ()=>{
    console.info('Se desconected la base de datos')
})
//connecting, connected, disconnected 

mongoose.connect('mongodb://localhost:27017/test')