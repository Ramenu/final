
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { confirmLogin } from "../slices/loginSlice";
import { addUser } from "../slices/userSlice";
import { useState } from "react";

export const RegisterForm = () => {
    // Default profile picture users get when they log in
    let Image = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0b4c759-ad9c-4425-a9f4-ab89e2fd9837/de8cefl-35c0bc59-59b9-42ab-b19f-5c73828bb78e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwYjRjNzU5LWFkOWMtNDQyNS1hOWY0LWFiODllMmZkOTgzN1wvZGU4Y2VmbC0zNWMwYmM1OS01OWI5LTQyYWItYjE5Zi01YzczODI4YmI3OGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.81ixeN9b4cfDmfBlskK9CUyAMDtRhYNU7lfwTI8WI5Q";

    const token = useSelector((state) => state.login.token);
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const dispatch = useDispatch();
    if (!token || token.length === 0)
    {
        console.log("Register form rendered");

        const handleRegistration = () => {
            if (Email.includes("@") && Email.includes(".")) // <-- Terrible check to see if valid email address
            {
                let status = "Logged in";
                dispatch(addUser({Email, Image, Password}));
                dispatch(confirmLogin({email: Email, password: Password, token: token, status: status}));
                setEmail("");
                setPassword("");
            }
            else {
                alert("Please enter a valid email address.");
            }
        };
        const form = (
            <div className="login-form">
                <br/>
                <br/>
                <br/>
                <br/>
                <h1><b>New here? Register!</b></h1>
                Email:
                <br/>
                <input type="text"
                 value={Email}
                 onChange={(e) => setEmail(e.target.value)}></input>
                <br/>
                Password:
                <br/>
                <input 
                 type="password"
                 value={Password}
                 onChange={(e) => setPassword(e.target.value)}></input>
                <br/>
                <Button 
                 disabled={Email.length === 0 || Password.length === 0}
                 variant="primary" 
                 onClick={() => handleRegistration()}>Login</Button>
            </div>
        );
        return form;

    }

}


export const LoginForm = () => {
    
    const token = useSelector((state) => state.login.token);
    const users = useSelector((state) => state.users);
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const dispatch = useDispatch();
    if (!token || token.length === 0)
    {
        const emailAndPasswordExist = () => {
            for (let i = 0; i < users.length; i++)
            {
                if (users[i].Email === Email && users[i].Password === Password) {
                    return true;
                }
            }
            return false;
        };
        const handleLogin = () => {
            if (emailAndPasswordExist()) 
            {
                dispatch(confirmLogin({email: Email, password: Password, token: token, status: "Logged in"}));
                setEmail("");
                setPassword("");
            }
            else {
                alert("Invalid email/password.");
            }
        };
        console.log("Login form rendered");
        const form = (
            <div className="login-form">
                <h1><b>Login</b></h1>
                Email:
                <br/>
                <input type="text"
                 value={Email}
                 onChange={(e) => setEmail(e.target.value)}></input>
                <br/>
                Password:
                <br/>
                <input 
                 type="password"
                 value={Password}
                 onChange={(e) => setPassword(e.target.value)}></input>
                <br/>
                <Button 
                 disabled={Email.length === 0 || Password.length === 0}
                 variant="success" 
                 onClick={() => handleLogin()}>Login</Button>
            </div>
        );
        return form;
    }
    return null;
}