import { Link, useNavigate } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email, phone} = user;

    const navigate = useNavigate();

    const handleShowDetail=()=>{
        navigate(`/user/${id}`)
    }
    
    return (
        <div className="userStyle">
         
            < h2>{name}</ h2>
            <p>E-Mail: {email}</p>
            <p>Phone: {phone}</p>

            {/* serial 7: for dynamic get data and show  
            1. create details component
            2. main a giye path dynamic and element add(je componenter data dekhate cai ta dite hobe jemon UserDetails), add loader
            */}
            <Link to={`/user/${id}`}>Show Details</Link>
            <button onClick={handleShowDetail}>click for details</button>
        </div>
    );
};

export default User;

// serial 5: create single component and data structure and also displayed 