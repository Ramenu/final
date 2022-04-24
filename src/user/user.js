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

    const users = useSelector((state) => state.users.data);
    const token = useSelector((state) => state.login.token);
    const [filter, setFilter] = useState("");
    
    if (!token || token.length === 0) {
        return null;
    }

    console.log("User list rendered");
    // Filter by email or if the filter input is empty,
    // display all the users.
    return (
        <div className="user-list">
            <FilterInput filter={filter} setFilter={setFilter}/>
            <br/>
            <br/>
            <b><h1><u>List of Users</u></h1></b>
            {users.filter((e) => e.email === filter || filter === "").map(({email, avatar}) => 
                <ul>
                    <li key={email}><b>Email:</b> {email}
                    <img src={avatar} width="50" height="50" alt="Profile"/></li>
                </ul>
            )}
            <Logout/>
        </div>
    );
}


