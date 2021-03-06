import BooksController from '../../../controllers/books';

describe('Controllers: books', () => {
  describe('Get all books: getAll()', () => {
    it('should return a list of books', () => {
      const Books = {
        findAll: td.function()
      };

      const expectResponse = [{
        id: 1,
        name: 'Test Book',
        created_at: '2016-08-06T23:36.6922',
        updated_at: '2016-08-06T23:36.6922'
      }];

      td.when(Books.findAll({})).thenResolve(expectResponse);

      const booksController = new BooksController(Books);
      return booksController.getAll()
        .then(response => expect(response.data).to.be.eql(expectResponse))
    });
  });

  describe('Get a books: getById()', () => {
    it('should return a book', () => {
      const Books = {
        findOne: td.function()
      };

      const expectResponse = [{
        id: 1,
        name: 'Test Book',
        created_at: '2016-08-06T23:36.6922',
        updated_at: '2016-08-06T23:36.6922'
      }];

      td.when(Books.findOne({ where: { id: 1 } })).thenResolve(expectResponse);

      const booksController = new BooksController(Books);
      return booksController.getById({ id: 1 })
        .then(response => expect(response.data).to.be.eql(expectResponse))
    });
  });

  describe('Create a books: create()', () => {
    it('should create a book', () => {
      const Books = {
        create: td.function()
      };

      const requestBody = {
        name: 'Test Book'
      };

      const expectResponse = [{
        id: 1,
        name: 'Test Book',
        created_at: '2016-08-06T23:36.6922',
        updated_at: '2016-08-06T23:36.6922'
      }];

      td.when(Books.create(requestBody)).thenResolve(expectResponse);

      const booksController = new BooksController(Books);
      return booksController.create(requestBody)
        .then(response => {
          expect(response.statusCode).to.be.eql(201)
          expect(response.data).to.be.eql(expectResponse)
        });
    });
  });

  describe('Update a book: update()', () => {
    it('should update an existing book', () => {
      const Books = {
        update: td.function()
      };

      const requestBody = {
        id: 1,
        name: 'Test Book Updated'
      };

      const expectResponse = [{
        id: 1,
        name: 'Test Book Updated',
        created_at: '2016-08-06T23:36.6922',
        updated_at: '2016-08-06T23:36.6922'
      }];

      td.when(Books.update(requestBody, { where: { id: 1 } })).thenResolve(expectResponse);

      const booksController = new BooksController(Books);
      return booksController.update(requestBody, { id: 1 })
        .then(response => expect(response.data).to.be.eql(expectResponse));
    });
  });

  describe('Delete a book: delete()', () => {
    it('should delete an existing book', () => {
      const Books = {
        destroy: td.function()
      };

      td.when(Books.destroy({ where: { id: 1 } })).thenResolve({});

      const booksController = new BooksController(Books);
      return booksController.delete({ id: 1 })
        .then(response => expect(response.statusCode).to.be.eql(204));
    });
  });
});