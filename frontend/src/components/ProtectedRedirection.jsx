import { Navigate } from "react-router-dom";

const ProtectedRedirection = ({children}) => {
     const user = JSON.parse(localStorage.getItem("user"));
     if(user?.token){
          return <Navigate to="/task" replace />; 
     }

     return children;
};


export default ProtectedRedirection; 