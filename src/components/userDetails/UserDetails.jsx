import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {userId} = useParams();
    const {name, website} = user;
    const navigate = useNavigate();

    console.log(userId);

    // Tips: navigate use korar karon holo eventHandler use kore linkUp kora and also back kora 
    const handleGoBack= () =>{
navigate(-1);
    }
    return (
        <div>
            <h2>Details About User: {name}</h2>
            <h2>Website: {website}</h2>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;