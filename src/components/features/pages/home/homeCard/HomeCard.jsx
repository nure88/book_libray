import React from 'react';
import Container from '../../../others/container/Container';
import { Link } from 'react-router';

const HomeCard = ({onbook}) => {
    console.log(onbook);
    
    return (
    <Container>
           <Link to='/all-books' className="card bg-base-100  flex justify-center items-center mx-auto shadow-sm cursor-pointer">
  <figure className="p-7 hover:scale-105 transition-transform z-10 flex justify-center items-center">
    <img
      src={onbook?.coverImage}
      alt="Shoes"
      className="rounded-xl flex items-center justify-center w-[500px] h-64 object-cover" />
  </figure>
 
  
</Link>
    </Container>
    );
};

export default HomeCard;