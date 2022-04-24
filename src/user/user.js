import React, { useState } from "react";
import "./user.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";
import { Logout } from "../logout/logout";



const FilterInput = ({filter, setFilter}) => {
    console.log("Filter input rendered");

    const input = (
        <div className="filter-input">
            <h3>Filter by email:</h3>
            <input type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}/>
        </div>
    );
    return input;
}


export const UserList = () => {
    console.log("User list rendered");

    const users = useSelector((state) => state.users);
    const token = useSelector((state) => state.login.token);
    const [filter, setFilter] = useState("");
    
    if (!token || token.length === 0) {
        return null;
    }

    
    return (
        <div className="user-list">
            <FilterInput filter={filter} setFilter={setFilter}/>
            <br/>
            <br/>
            <b><h1><u>List of Users</u></h1></b>
            {users.filter((e) => e.Email === filter || filter === "").map(({Email, Image}) => 
                <ul>
                    <li><b>Email:</b> {Email}
                    <img src={Image} width="50" height="50" alt="Profile"/></li>
                </ul>
            )}
            <Logout/>
        </div> // add inactive/active status bar later?? idk
    );
}


