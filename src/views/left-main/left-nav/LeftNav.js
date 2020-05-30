import React from 'react';
import {NavLink} from "react-router-dom";
import './index.css'

function LeftNav(props) {
    return (
        <div className="left-nav">
            <div className='manage'>学生管理</div>
            <nav className='nav'>
                <NavLink to={`${props.match.path}/studentList`}>学生列表</NavLink>
                <NavLink to={`${props.match.path}/studentAdd`}>添加学生</NavLink>
            </nav>
        </div>
    );
}

export default LeftNav;