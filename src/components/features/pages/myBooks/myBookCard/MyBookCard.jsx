import React from 'react';
import { Link } from 'react-router';
import Container from '../../../others/container/Container';

const MyBookCard = (book) => {
    const bookDetails = book.book;
     console.log(bookDetails);
     
    return (
        <Container>
            <div className="card bg-base-100 h-97 w-full shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={bookDetails?.coverImage}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </Container>
    );
};

export default MyBookCard;