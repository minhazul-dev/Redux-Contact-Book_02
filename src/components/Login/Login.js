import React, { useState } from 'react';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const googleSignIn = () =>{

    }
    return (
        <div className="container pt-5">
            <div className="row mt-5">
                <div style={{ width: '40%', border: '1px solid black', padding: '20px', margin: 'auto' }}>
                    <h4 className="text-center">{newUser ? 'Registration' : 'Login'}</h4>
                    <br />
                    <form>
                        {newUser &&
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" name="displayName" className="form-control" />
                            </div>
                        }
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="text" name="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" />
                        </div>
                        {newUser &&
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input type="password" name="rePassword" className="form-control" />
                            </div>
                        }
                        <br />
                        <input type="submit" className="btn btn-primary form-control" value={newUser ? 'Sign up' : 'Sign in'} />
                    </form>
                    <br />
                    <p className="text-center">{newUser ? 'Already have an Account?' : "Don't have account?"}<button name="newUser" onClick={() => setNewUser(!newUser)} style={{ border: "none", backgroundColor: "white", color: "blue" }}>{newUser ? 'Login' : 'Create a new Account'}</button></p>
                </div>
                <div className="text-center mt-4 mb-5" style={{ margin: 'auto' }}>
                    <p>----------Or----------</p>
                    <button onClick={googleSignIn} style={{ borderRadius: '10px', width: '30%', border: '1px solid gray' }}>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;