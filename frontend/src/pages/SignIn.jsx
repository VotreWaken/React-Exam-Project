import React from 'react';

import  '../styles/SignIn.css';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='SignInWrapper'>
            <h1>Sign In</h1>
            <section>
                    <div class="LoginItem">
                        <label for="Email">Email</label>
                        <input type="text" placeholder="name@gmail.com"/>
                    </div>

                    <div class="LoginItem">
                        <label for="Password">Password</label>
                        <input type="text" placeholder="Password"/>
                    </div>

                    <button>Login</button>

                    <p>Don’t have an account? <Link to="/signup" className="nav__item-link">Sign Up</Link></p>
            </section>
        </div>
    );
}

export default SignIn;
