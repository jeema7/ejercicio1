import mongoose from "mongoose";

/*
1 Esquema (Schema).
2 Nombre del modelo
*/
//Crea un nueva instancia y agregamos un objeto con los atributos y tipo de datos
const schema = new mongoose.Schema({
    title: String,
    name: String,
    author: String,
    editon: String,
    pages: Number,
    isbn:  String,
    publishDate: Date,
})
 //Creamos el nombre del modelo 
export default mongoose.model('Book',schema);