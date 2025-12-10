
import { useContext, useEffect, useState } from "react";
import Container from "../../others/container/Container";
import AuthContext from "../../authContext/AuthContext";
import Loading from "../../others/loading/Loading";

import MyBookCard from "./myBookCard/MyBookCard";
import AllBookCard from "../allBooks/allBookCard/AllBookCard";

const MyBooks = () => {
    const [myBooks, setMyBooks] = useState([]);
 const {user} = useContext(AuthContext);
 const[loading, setLoading] = useState(true);
//  console.log(h);
 
useEffect(() => {
    if(!user.email) return;

    fetch(`http://localhost:5000/my-books?userEmail=${user.email}`,{
        headers:{
             authorization: `Bearer ${user.accessToken}`
        }
    })
    .then((res) => res.json())
    .then((data) =>{
        // console.log(data);
        setMyBooks(data);
       
        setLoading(false)
    }).catch((error) => {
        console.log(error);
        
    })
},[]);
if(loading){
    return <Loading />
}
  return (
    <Container>
      <div className="flex flex-col justify-center items-center mt-6">
        <h2 className="card-title font-bold text-2xl text-black/15">My books</h2>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
               {
                myBooks.map((book) => <AllBookCard key={book?._id} onbook={book}/>)
               }
            </div>
      </div>
    </Container>
  );
};

export default MyBooks;
