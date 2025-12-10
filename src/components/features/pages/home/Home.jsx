import React, { useEffect, useState } from 'react';
import Container from '../../others/container/Container';
import AllBookCard from '../allBooks/allBookCard/AllBookCard';
import Banner from '../Banner/Banner';
import About from '../about/About';

const Home = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/latest-books`)
        .then((res) => res.json())
        .then((book) => {
            // console.log(book);
            
       setBooks(book)
        })
    }, []);
    return (
        <div>
            
        <div>
                <Banner />
            </div>
       <Container>
        
         <div className='flex flex-col items-center'>
            
            <h1 className='card-title font-bold'>Latest 6 book</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
               {
                books.map((book) => <AllBookCard key={book?._id} onbook={book}/>)
               }
            </div>
        </div>
        {/* about section */}
        <section>
            <About />
        </section>
       </Container>
       </div>
    );
};

export default Home;