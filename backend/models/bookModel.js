




// import mongoose from 'mongoose';

// const bookSchema = mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     author: {
//       type: String,
//       required: true,
//     },
//     publishYear: {
//       type: Number,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export const Book = mongoose.model('Book', bookSchema);




// bookModel.js

import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    
  
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    availability: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model('Book', bookSchema);
