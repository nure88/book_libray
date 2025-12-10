
import Container from '../../others/container/Container';
import { useNavigate } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';

const AddBook = () => {
const navigate = useNavigate();
    const handleAddBook = (event) => {
        event.preventDefault();
    const title = event.target.title.value;
    const author = event.target.author.value;
    const genre = event.target.genre.value;
    const rating = event.target.rating.value;
    const summary = event.target.summary.value;
    const coverImage = event.target.coverImage.value;
 const userEmail = event.target.userEmail.value;

console.log(title, author, genre, rating,summary, coverImage,userEmail);

const addNewBook = {
title,
author,
genre,
rating,
summary,
coverImage,
userEmail
};

fetch(`http://localhost:5000/books`,{
    method:"POST",
    body: JSON.stringify(addNewBook),
    headers: {"Content-type":"application/json"}
}).then((res) => res.json())
.then((data) => {
    // console.log(data);
    toast.success('book added successfully!')
    // navigate('/all-books')
    event.target.reset();
}).catch((error) => {
    console.log(error.message);
    toast.error(e.error);  
})

    };



    return (
        <Container>
            <Toaster position='top-center'/>
            <form className='flex flex-col justify-center gap-y-4 shadow p-6 m-2' onSubmit={handleAddBook}>
             <div className='flex flex-col'>
                   {/* book tiele */}
                <label className='label'>Book Title</label>
                <input className='input w-sm' name='title' type="text" placeholder='Type book title...'/>
             </div>
                <div className='flex flex-col'>
                    {/* author name field*/}
                 <label className='label'>Author Name</label>
                <input className='input w-sm' name='author' type="text" placeholder='Type author name...'/>
                </div>
              <div className='flex flex-col'>
                  {/* Genre field*/}
                     <label className='label'>Genre</label>
                <input className='input w-sm' type="text" name='genre' placeholder='Type genre...'/>
              </div>
               <div className='flex flex-col'>
                 {/* rating field */}
                 <label className='label'>Book Rating</label>
                <input className='input w-sm' type="text" name='rating' placeholder='Type book rating...'/>
               </div>
               <div className='flex flex-col'>
                 {/* summary field */}
                 <label className='label'>Book Summary</label>
                <textarea className='input w-sm h-[100px]' type="text" name='summary' id=""></textarea>
               </div>
               <div className='flex flex-col'>
                 {/* coverImage field */}
                 <label className='label'>Image URL</label>
                <input className='input w-sm' type="url" name='coverImage' placeholder='Type image url'/>
               </div>
                <div className='flex flex-col'>
                    {/* user email field */}
                 <label className='label'>User Email</label>
                <input className='input w-sm' type="email" name='userEmail' placeholder='Type book title'/>
                </div>
                <div className='flex justify-center items-center btn-info text-white'>
                    <button type="submit" className='btn'>Add Book</button>
                </div>
            </form>
        </Container>
    );
};

export default AddBook;