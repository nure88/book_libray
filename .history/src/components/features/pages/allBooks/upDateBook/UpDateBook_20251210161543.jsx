import { useContext, useEffect, useState } from 'react';
import Container from '../../../others/container/Container';
import { useNavigate, useParams } from 'react-router';
import Loading from '../../../others/loading/Loading';
import AuthContext from '../../../authContext/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

const UpDateBook = () => {
    const{user} = useContext(AuthContext);
const {id} = useParams();
const[book, setBook] = useState(null);
// console.log(id);
const navigate = useNavigate();
useEffect(() => {
    if(!id) return;

    fetch(`http://localhost:5000/books/${id}`,{
        headers: {
            authorization: `Bearer ${user.accessToken}`
        }
    })
    .then((res) => res.json())
    .then((book) => {
        console.log(book);
        
        setBook(book);
        // navigate('/all-books')
        // alert('Book updated! 👍')
    }).catch((error) => {
        console.log(error.message);
        
    })
},[id]);

if(!book){
    return(
        <Container>

            <Loading />
        </Container>
    )
}

const handleUpdatedFun = (event) => {
event.preventDefault();
const title = event.target.title.value || book.title;
const author = event.target.author.value || book.author;
const genre = event.target.genre.value || book.genre;
const rating = event.target.rating.value || book.rating;
const summary = event.target.summary.value || book.summary;
const coverImage = event.target.coverImage.value || book.coverImage;
const userEmail = event.target.userEmail.value || book.userEmail;
const newBody = {
title,
author,
genre,
rating,
summary,
coverImage,
userEmail
};

// console.log(title, author, genre, rating, summary, coverImage, userEmail);
fetch(`http://localhost:5000/books/${id}`,{
    method: "PUT",
    body:JSON.stringify(newBody),
    headers: {
        "Content-type":"application/json"
    },
})
.then((res) => res.json())
.then((data) => {
//    console.log(data);
   toast.success('book updated successfully!')
    navigate('/all-books');
})
.catch((error) => {
    // console.log(error);
     toast.error('Fail to added book');  
})
};



    return (
        <Container>
            <Toaster position='top-center'/>
            <div className='flex flex-col justify-center items-center'>
  <legend className="fieldset-legend text-center">Book UPdate page</legend>
           <form onSubmit={handleUpdatedFun}>
           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

            {/* Title field */}
  <label className="label">Update Book Title</label>
  <input name='title' defaultValue={book?.title} type="text" className="input" placeholder="Update book title..." />
            {/*Author filed  */}
  <label className="label">Update Author Name:</label>
  <input name='author' defaultValue={book?.author} type="text" className="input" placeholder="Update author name..." />
            {/* Update Genre */}
  <label className="label">Update Genre:</label>
  <input name='genre' defaultValue={book?.genre} type="text" className="input" placeholder="Update genre..." />
  {/* Update Rating */}
  <label className="label">Update Rating:</label>
  <input name='rating' defaultValue={book?.rating} type="text" className="input" placeholder="Update rating..." />
  {/* summary field */}
  <label className="label">Update SUmmary:</label>
  <input defaultValue={book?.summary} name='summary' type="text" className="input" placeholder="Update summary..." />
  {/* Update book img filed */}
  <label className="label">Update Book ImgUrl:</label>
  <input name='coverImage' defaultValue={book?.coverImage} type="text" className="input" placeholder="Update book imgURL..." />
  {/* Update userEmail userEmail*/}
  <label className="label">Update User Email:</label>
  <input defaultValue={book?.userEmail} name='userEmail' type="" className="input" placeholder="Update userEmail..." />
  <button className='btn btn-md mx-auto cursor-pointer link-btn' type="submit">Submit book</button>
</fieldset>

           </form>
        </div>
        </Container>
    );
};

export default UpDateBook;