import mongoose from "mongoose";
import { createBook, updateBook,readBook,deleteBook } from "./crud.js";

const db = mongoose.connection
//Saber si se conecto dio error o se desconecto
db.on('connected', ()=>{
    console.log('se ha conectado a la base de datos 🟢');
}).on('error', ()=>{
  
    console.log('Ha ocurrido un error en la conexion 🔴');
}).on('disconnected', ()=>{
    console.info('Se desconectado la base de datos')
})
//connecting, connected, disconnected 

// mongoose.connect('mongodb+srv://usuario1:gP6UoCGc9vtkQXoo@cluster0.01ykzfq.mongodb.net/base1?retryWrites=true&w=majority', () =>{

//     console.log('Callback de funcion connect');
//    //TODO: Mandar llamar createBook
//     createBook()
//    //TODO: Mandar llamar updateBook
//    updateBook()
//    //TODO: Mandar llamar readBook
//    //TODO: Mandar llamar deletBook
// })
//Conectando a la base local
mongoose.connect('mongodb+srv://Frp2:txPV9Ym33bRm9cyR@cluster0.sduskel.mongodb.net/base2?retryWrites=true&w=majority', async () =>{
    try {
        await createBook();
        await updateBook();
        await readBook();
        await deleteBook();
    } catch (error) {
        console.log('Ha ocurrido un error',error);
    }
    
})