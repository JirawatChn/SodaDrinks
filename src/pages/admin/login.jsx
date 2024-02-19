import { Link } from "react-router-dom"

export const Login = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column",marginTop: '100px',alignItems: "center" }}>
            <div>Login Form</div>
            <Link to={'/dashboard'}>
                <button className="btn btn-primary" style={{marginTop: '10px'}}>Login</button>
            </Link>
        </div>
    )
}