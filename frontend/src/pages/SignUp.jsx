import React from 'react';

import  '../styles/SignUp.css';

const SignUp = () => {
    return (
        <div className='SignUpWrapper'>
            <h1>Sign Up</h1>
                <section>
                        <div class="SignUpItem">
                            <label for="Name">Name</label>
                            <input type="text" placeholder="FullName"/>
                        </div>

                        <div class="SignUpItem">
                            <label for="Email">Email</label>
                            <input type="text" placeholder="name@gmail.com"/>
                        </div>

                        <div class="SignUpItem">
                            <label for="Email">Phone Number</label>
                            <input type="text" placeholder="000-000-000"/>
                        </div>
    
                        <div class="SignUpItem">
                            <label for="Password">Password</label>
                            <input type="text" placeholder="Password"/>
                        </div>
    
                        <button>Login</button>
                </section>
        </div>
    );
}

export default SignUp;
