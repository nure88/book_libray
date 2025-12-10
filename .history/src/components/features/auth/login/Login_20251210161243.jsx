import { useContext, useState } from 'react';
import Container from '../../others/container/Container';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../../authContext/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
 const[error, setError] = useState("");
 const[password, setPassword] = useState("");
  const[toggle, setToggle] = useState(false);
const {signInUser} = useContext(AuthContext);

const navigate = useNavigate();
const location = useLocation();

const handleLogin = (event) => {
event.preventDefault();

setError("");
setPassword("");
const email = event.target.email.value;
const password = event.target.password.value;
 const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
if (!passwordRegex.test(password)) {
  setPassword("Password must be at least 6 characters long and include uppercase, lowercase, number, and special character.");
  return;
}

// console.log(email, password);


signInUser(email,password)
.then((result) => {
const user =result.user;
console.log(user);
toast.success('Your Login successfully!');
event.target.reset();
navigate(`${location.state ? location.state : "/"}`)
})
.catch((error) =>{
  setError(error.message)
  toast.error(error.message);
 
})
};


const handleToggle = () => {
  setToggle(!toggle);
};

    return (
   
    <Container>
      <Toaster position='top-center'/>
        <div className="card bg-base-100 dark:bg-base-300 dark:text-white  shrink-0 shadow-2xl mt-10 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <div className="card-body flex flex-col justify-center items-center text-center">
       <form onSubmit={handleLogin} className='flex flex-col justify-center'>
         <fieldset className="fieldset flex flex-col justify-center items-center">
         <div className='flex flex-col justify-center items-start'>
          <label className="label">Email</label>
           <input name='email' type="email" className="input w-md" placeholder="Please enter your Email here..." />
           {error && <p className='text-red-500 text-sm'>{error}</p>}
         </div>
         <div className='relative flex flex-col justify-center items-start'>
          <label className="label">Password</label>
         
      
         <input name='password' type={toggle? "text":"password"} className="input w-md" placeholder="Please enter your Password here..." />
         <button className='absolute flex justify-center items-center ml-101 mt-4 cursor-pointer'onClick={handleToggle} type='button'>
          {
            toggle? <FaEye size={25}/>: <FaEyeSlash size={25}/>
          }
         </button>
         
    
         </div>
         <div className='w-md'>
          {
          password && <p className='text-red-500 text-sm'>{password}</p>
         }
         </div>
         
          <div><a className="link link-hover">Forgot password?</a></div>
          <div>
            <button className="btn btn-neutral mt-4 w-md" type='submit'>Login</button>
          </div>
        </fieldset>
       </form>
       <p>Don't have an account? Please <Link className='loginandregister-btn' to='/register'>Register</Link></p>
      </div>
    </div>
    </Container>
 
    );
};

export default Login;