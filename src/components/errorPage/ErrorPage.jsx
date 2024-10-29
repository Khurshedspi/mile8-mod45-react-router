import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    // error dekhar jonno 
    console.error(error);

    return (
        <div>
            <h2>OOPS!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    
                    <h3>Page not found</h3>
                    <p>Go Back Home Page</p>
                    <Link to="/"><button>Home</button></Link>
                    </div>
            }
        </div>
    );
};

export default ErrorPage;