import Book from "./models/Book.js";
//TODO: Crear
const createBook = async ()=>{
    await Book.create({
        title:'Como programar en un dia',
        author: 'Emma Esther Hernan',
        editon: '2021',
        isbn: '01238473882',
        pages: 20,
        publishDate: new Date(),
       });
}
//TODO: actualizar
const updateBook = async () => {
    await Book.updateOne({
        //Criterios de busqueda (Filtros) buscara un libro que contenga 20 paginas y que su isbn sea el mismo
        pages:20,
        isbn:'01238473882',
        
    },
    {
         //Datos a actulizar 
        author:'Jonathan',
    }
    )
}
//TODO: Leer
    const readBook = async () =>{
     await Book.find({
            author: "Emma Esther Hernan",
        })
    }
//TODO: Eliminar
    const deleteBook = async () =>{
        await Book.deleteOne({
            author: "Jonathan",
        })
    }
export {createBook, updateBook,readBook,deleteBook}