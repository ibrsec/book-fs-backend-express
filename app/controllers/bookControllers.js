const {Book} = require('../models/bookModels')

//@desc get all books
//@route GET /api/book
//@access public
const list = async(req,res) => {
    const books = await Book.findAndCountAll();
    res.status(200).json({
        error:false,
        message:"Listing book is successfull!",
        count: books.count,
        result:books.rows,
    })
}
//@desc create a new book
//@route POST /api/book
//@access public
const create = async(req,res) => {
    const {title,author,isbn,genre,year,image} = req.body;
    if(!title || !author || !isbn || !genre || !year || !image){
        res.status(400);
        throw new Error('400 - All fields are mandatory!');
    }
    
    if(title.length > 100){
        res.status(400);
        throw new Error('Title can\'t be longer than 100 character!');

    }
    if(author.length > 100){
        res.status(400);
        throw new Error('Author can\'t be longer than 100 character!');

    }
    if(isbn.length > 50){
        res.status(400);
        throw new Error('ISBN can\'t be longer than 50 character!');

    }
    if(genre.length > 50){
        res.status(400);
        throw new Error('Genre can\'t be longer than 50 character!');

    }
    if(String(year).length > 4 || String(year).length < 4){
        res.status(400);
        throw new Error('Year field should be 4 character!');

    }
    
    if(image.length > 500){
        res.status(400);
        throw new Error('Image can\'t be longer than 500 character!');
    }
    if(!image.startsWith('http://') && !image.startsWith('https://')){
        res.status(400);
        throw new Error('Invalid image Url!');
    }

    const newBook = await Book.create(req.body)


    console.log(newBook);
    res.send({
        error:false,
        message:"A new book is created!",
        newBook
    })
}

//@desc get a book
//@route GET /api/book/:id
//@access public
const listOne = async(req,res) => {
    
    const book = await Book.findByPk(req.params.id);
    if(!book){
        res.status(404);
        throw new Error('404 - Book not found!')
    }
    res.status(200).json({
        error:false,
        message:"Your book is here!",
        result:book
    })
}
//@desc delete a book
//@route DELETE /api/book/:id
//@access public
const deleteBook = async(req,res) => {
    
    const book = await Book.findByPk(req.params.id);
    if(!book){
        res.status(404);
        throw new Error('404 - Book not found!')
    }
    const deletedBook = await Book.destroy({
        where:{id:req.params.id}
    })
    
    res.status(204).json({
        error:false,
        message:"Selected book is deleted!",
        deleted:deletedBook,
    })
}

//@desc update a book
//@route PUT /api/book/:id
//@access public
const updateBook = async(req,res) => {
    
    const book = await Book.findByPk(req.params.id);
    if(!book){
        res.status(404);
        throw new Error('404 - Book not found!')
    }
    const updatedCount = await Book.update(
        req.body,
        {
        where:{id:req.params.id}
    })
    if(!updatedCount[0]){
        res.status(500);
        throw new Error("Book couldn\'t be updated!!")
    }

    const updatedBook = await Book.findByPk(req.params.id);
    if(!updatedBook){
        res.status(404);
        throw new Error('Book is updated but Updated Book couldn\'t be found?')
    }
    
    res.status(200).json({
        error:false,
        message:"Selected book is updated!",
        updatedBook
    })
}



module.exports = {
list,create,listOne,deleteBook,updateBook,
}