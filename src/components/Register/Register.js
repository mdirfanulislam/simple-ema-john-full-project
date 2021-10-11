import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Context/useAuth';

const Register = () => {
    const {loginWithGoogle} = useAuth();
    return (
        <div className="authentication">
            <div>
                <form>
                    <h2>Please Register</h2>
                    <input className="input" type="email" name="email" id="" placeholder="Your Email" />
                    <br />
                    <input className="input" type="password" name="password" id="" placeholder="Your Password" />
                    <br />
                    <input className="input" type="password" name="password" id="" placeholder="Re-enter Password" />
                    <br /> <br />
                    <input className="btn-authentication" type="submit" value="submit" />
                </form>
                <p>Already Have An Account ? <Link className="link" to="/login">Login</Link></p>
                <button className="btn-regular" 
                onClick={loginWithGoogle}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;