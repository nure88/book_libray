import { useEffect, useState } from 'react';
import Container from '../../others/container/Container';

import AllBookCard from './allBookCard/AllBookCard';

const AllBooks = () => {
const[books, setBooks] = useState([]);

useEffect(()=> {
fetch("http://localhost:5000/books")
.then((res) => res.json())
.then((data) =>{
  setBooks(data)
})
},[]);

    return (
       <Container>
          <h3 className='font-bold text-2xl'>All Book</h3>
         <div className='mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
               {
                books.map((book) => <AllBookCard key={book?._id} onbook={book}/>)
               }
            </div>
        </div>
       </Container>
    );
};

export default AllBooks;