import { BookRepository } from "./book.repository.js";
import { Book } from "../book.model.js";
import { getBookList } from "../../../mock-db.js";


export const dbBookRepository: BookRepository = {
  getBookList: async () => {
    throw new Error("Not implemented");
  },
  getBook: async (id: string) => {
    throw new Error("Not implemented");
  },
  saveBook: async (book: Book) => {
    throw new Error("Not implemented");
  },
  deleteBook: async (id: string) => {
    throw new Error("Not implemented");
  },
};



