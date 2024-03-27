




import React from 'react';

import { Link } from 'react-router-dom';
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({ books }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='text-stone-950 border border-slate-5000 rounded-md'>No</th>
          <th className='border border-slate-500 rounded-md'>Product</th>
          <th className='border border-slate-500 rounded-md'>Rating</th>
          <th className='border border-slate-500 rounded-md'>Discount</th>
          <th className='border border-slate-500 rounded-md'>Availability</th>
       
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {book.productName}
            </td>
           
            <td className='border border-slate-700 rounded-md text-center'>
              {book.rating}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {book.discount}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {book.availability}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
              
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
