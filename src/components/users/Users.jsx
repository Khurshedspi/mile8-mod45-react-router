import { useLoaderData } from "react-router-dom";
import User from "../user/User";
import "./User.css"

const Users = () => {
// state ==> data
// state ==> loader 
// useEffect ===> 
//     fetch ==> state set ==> set state 



// serial 4: load kora data dekhanur jonno useLoaderData()
const users = useLoaderData();

    return (
        <div>
            {/* <h3>Our users: {users.length}</h3> */}
            {/* serial 6: all data display korar jonno caile alada single component use kora jabe  */}

           <div className="userContainer">
           {
                users.map(user => <User 
                key={user.id}
                user = {user}
                ></User>)
            }

           </div>
        </div>
    );
};

export default Users;


// serial 1: create only componennt
