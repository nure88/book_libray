
import { Link, useNavigate, useParams } from 'react-router';
import Container from '../../../others/container/Container';
import { useContext, useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../../../others/loading/Loading';
import AuthContext from '../../../authContext/AuthContext';

const BookDetails = () => {
   const [book, setBook] = useState(null);
   const[loading, setLoading] = useState(true);
  const {user} = useContext(AuthContext);
   
const{id}= useParams();
// console.log(id);
const navigate = useNavigate();


useEffect(() => {
 fetch(`http://localhost:5000/books/${id}`,{
  headers: {
    authorization: `Bearer ${user.accessToken}`
  }
 })
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    setBook(data);
    setLoading(false);
  }).catch((error) => {
    console.log(error.message);
    
  });
},[]);

const handleRemove = (id) => {
fetch(`http://localhost:5000/books/${id}`,{
  method: "DELETE"
})
.then((res) => res.json())
.then((data) => {
  console.log(data);
  toast.success("Book Deleted Successfully")
  navigate('/all-books')
}).catch((error) => {
  console.log(error);
  toast.error("don't update book successfully!")
})


};
if(loading){
  return <Loading />
}

    return (
       <Container>
        <Toaster />
       <div className="hero bg-base-200 w-11/12 shadow-md m-10 p-1">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={book?.coverImage}
      className="w-md rounded-lg shadow-2xl"
    />
    <div className='flex flex-col'>
      <h2 className="text-5xl font-bold">Title: {book?.title}</h2>
  <span>Author: {book?.author}</span>
      <span>Genre: {book?.genre}</span>
      <span>Rating: {book?.rating}</span>
      <p className="py-6 font-medium">
      Summary: {book?.summary}
      </p>
      <div className='flex  justify-center gap-x-7'>
        <Link className='btn btn-active link-btn' to={`/update-book/${book?._id}`} >Book Update</Link>
        <button className='btn btn-active link-btn' onClick={() => handleRemove(book?._id)} >Book Delete</button>
      </div>
    </div>
  </div>
</div>
       </Container>
    );
};

export default BookDetails;