import { Book } from "../models/book";

export const getBooks = async () => {
	return Book.findAll();
};

export const getBook = async (bookId: number) => {
	return Book.findOne({
		where: { bookId },
	});
};

export const saveBook = async (book: Book) => {
	try{
		const validateBook = await Book.findOne({ where: { title: book.title } });
		console.log(book.title)
    if (validateBook) {
		console.log('I am here validating')
		throw new Error('Book with this title already exists');
	}
	return Book.create<Book>(book);	
    }catch(error) {
		console.error('Error adding book:', error);
		throw error;
	}
	
};

// User Story 4 - Update Book By Id Solution
export const updateBook = async (bookId: number, book: Book) => {
	return Book.update(book, {
		where: {
			bookId,
		},
	});
};

//Delete book by ID
export const deleteBook = async (bookId: number) => {
	const book = await Book.findOne({
		where: { bookId },
	});
	if (!book) {
        throw new Error(`Book with ${bookId} is not found`);
      }
	await book.destroy();
	return true;
};
