import ReactDOM from 'react-dom';
import React from 'react';
import UserList from './component/UserList.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
    <div>
        <UserList />
    </div>,
    document.querySelector("#root")
);