import Book from "./models/Book.js";
//TODO: Crear
const createBook = ()=>{
    Book.create({
        title:'Como programar en un dia',
        author: 'Emma Esther',
        editon: '2021',
        isbn: '01238473882',
        pages: 20,
        publishDate: new Date(),
       });
}
//TODO: actualizar
const updateBook = () => {
    Book.updateOne({
        pages:20,
        isbn:'234859482929u1'
    },
    {
        author:'Jonathan',
    }
    )
}
//TODO: Leer

//TODO: Eliminar

export {createBook, updateBook}