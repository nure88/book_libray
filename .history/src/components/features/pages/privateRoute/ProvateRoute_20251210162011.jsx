import { useContext} from 'react';
import AuthContext from '../../authContext/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../../others/loading/Loading';

const ProvateRoute = ({children}) => {
    const{user, loading} = useContext(AuthContext);
   
  const location = useLocation();
//   console.log(location);
  

 if(loading){
    return <Loading />
 }

    if(user && user?.email){
        return children;
    }



    return <Navigate state={location?.pathname} to="/login" replace/>
};

export default ProvateRoute;