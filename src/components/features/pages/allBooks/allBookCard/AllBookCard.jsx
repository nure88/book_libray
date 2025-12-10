import React from 'react';
import Container from '../../../others/container/Container';
import { Link } from 'react-router';

const AllBookCard = ({onbook}) => {
  //  console.log(onbook);
   
    
    return (
    <Container>
  <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={onbook.coverImage}
      alt="Shoes" className='rounded w-full h-90 '/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Title: {onbook?.title}</h2>
    <p>Author: {onbook?.author}</p>
    <p>Genre: {onbook?.genre}</p>
    <p>Rating: {onbook?.rating}</p>
    <div className="card-actions justify-center">
      <Link  className="btn btn-primary w-full cursor-pointer banner-btn" to={`/books/${onbook?._id}`}>View Details</Link>
    </div>
  </div>
</div>
    </Container>
    );
};

export default AllBookCard;