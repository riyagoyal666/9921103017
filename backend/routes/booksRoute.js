

import express from 'express';
import { Book } from '../models/bookModel.js';

const router = express.Router();


router.post('/', async (request, response) => {
  try {
    const {
     
      productName,
      price,
      rating,
      discount,
      availability
    } = request.body;

    if ( !productName || !price || !rating || !discount || availability === undefined) {
      return response.status(400).send({
        message: 'Send all required fields:  productName, price, rating, discount, availability',
      });
    }

    const newBook = {
     
      productName,
      price,
      rating,
      discount,
      availability
    };

    const book = await Book.create(newBook);

    return response.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

router.get('/', async (request, response) => {
  try {
    const books = await Book.find({});

    return response.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default router;
