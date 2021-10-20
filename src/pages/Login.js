import React,{useState} from 'react'
import SignUp from './../Components/auth/SignUp';
import SignIn from './../Components/auth/SignIn';
const Login = (props) => {
    const [moveLeft, setMoveLeft] = useState(false);
    return (
        <div className="login">
           <div className="container">
           <div className="col-left">
               <div className="bullet">
               <img src="images/time.png" alt="time" />
               </div>
                <h1>Time Manager</h1>
                <p>.............</p>
            </div>
           <div className="col-right">
           <SignUp moveLeft={moveLeft} setMoveLeft={setMoveLeft}/>
            <SignIn moveLeft={moveLeft} setMoveLeft={setMoveLeft}/>
           </div>
           </div>
        </div>
    )
}

export default Login
