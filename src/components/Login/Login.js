import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Context/useAuth';
import './Login.css';

const Login = () => {
    const {loginWithGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const Redirect_uri = location.state?.from || '/shop';

    const handleGoogleLogin = () => {
        loginWithGoogle()
        .then(result => {
            history.push(Redirect_uri)
        })
    }
    
    return (
        <div className="authentication">
            <div>
                <h2>Please Login</h2>
                <form>
                    <input className="input" type="email" name="email" id="" placeholder="Your Email" />
                    <br />
                    <input className="input" type="password" name="password" id="" placeholder="Your Password" />
                    <br /><br />
                    <input className="btn-authentication" type="submit" value="submit" />
                </form>
                <p>New User ? <Link className="link" to="/register">Create New Account</Link></p>
                <button className="btn-regular" 
                onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;