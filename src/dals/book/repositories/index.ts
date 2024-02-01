import { mockRepository } from './book-mock-repository.js';
import { dbBookRepository } from './book.db-repository.js';
import { envConstants } from "#core/constants/index.js";


export const bookRepository = envConstants.isApiMock
  ? mockRepository
  : dbBookRepository;

