import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Container from "../../others/container/Container";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../../authContext/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa"
import toast, { Toaster } from "react-hot-toast";
const Register = () => {
const[toggle, setToggle] = useState(false);
const {createUser,setUser,updateUser,logInWithGoogle, loading} = useContext(AuthContext);
 const navigate = useNavigate();
 const location = useLocation();

const handleRegister = (event) => {
event.preventDefault();
const name = event.target.name.value;
const email = event.target.email.value;
const password = event.target.password.value;
const photoURL = event.target.PhotoURL.value;
// console.log(email,password, PhotoURL);
createUser(email,password)
.then((result) => {
const user = result.user;
updateUser({ displayName: name, photoURL: photoURL})
.then(() =>{

setUser({ ...user, displayName: name, photoURL: photoURL })
event.target.reset();
toast.success("Your register successfully!")
navigate(location.state || '/login');

}).catch((err) => {
  setUser(user)
  toast.error(err.message)
})

})
.catch((error) => {
  alert(error.message)
  
})
};

const handleGoogle = () => {
  logInWithGoogle()
  .then((result) => {
 console.log(result.user);
 toast.success('google login successfully!')
  // navigate(location.state || '/')
  }).catch((error) => {
    console.log(error);
    toast.error(error.message);
  })
}

const handleToggle = () => {
setToggle(!toggle)
};
  return (
    <Container>
      <Toaster position="top-center"/>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10 dark:bg-base-300">
        <h1 className="text-5xl font-bold text-center">Register now!</h1>
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input className="input" type="text" name="name" placeholder="name" required/>
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <div className="flex justify-center items-center relative">
              
                <input name="password" type={toggle?'text':"password"} className="input" placeholder="Password" />
                 <button className="absolute ml-70" onClick={handleToggle}>
                {
                  toggle? <FaEye className="" size={30}/>:<FaEyeSlash size={30}/>
                }
               </button>
              </div>
              <label className="label">User PhotoURL</label>
              <input className="input" name="PhotoURL" type="text" placeholder="PhotoURL" />
              <button className="btn btn-neutral mt-4" type="submit">
                Register
              </button>
            </fieldset>
          </form>
           <button className="btn flex dark:bg-amber-00 dark:text-2xl text-black cursor-pointer" onClick={handleGoogle}>
           <FcGoogle size={30}/>
            Login With Google
          </button>
          <p className="font-semibold text-center">
            Already have an account? Please <Link className="loginandregister-btn" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Register;
