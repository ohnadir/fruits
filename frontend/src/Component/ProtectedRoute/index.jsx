import { useEffect } from "react";
import Loader from "../Loader";
import { useSelector } from 'react-redux'

const ProtectedRoute = ({children, setModal}) => {
    const { isAuthenticated, loading } = useSelector(state => state.auth);
    useEffect(()=>{
        if (loading) {
            <Loader/>
        }
    },[loading])
    
    if (isAuthenticated === true) {
        return children;
    }else{
        return setModal(true)
    }
}

export default ProtectedRoute