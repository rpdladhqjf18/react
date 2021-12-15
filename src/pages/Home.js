import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/hjt" style={({ isActive }) => ({ color:isActive?'green':'blue'})}>
                        황진태
                    </NavLink>
                </li>
                <li>
                    <NavLink to="csi" style={({ isActive }) => ({ color:isActive?'green':'blue'})}>
                        최숑이
                    </NavLink>
                </li>
                <li>
                    <NavLink to="lhi" style={({ isActive }) => ({ color:isActive?'green':'blue'})}>
                        이혜인
                    </NavLink>
                </li>
                <li>
                    <NavLink to="hyg" style={({ isActive }) => ({ color:isActive?'green':'blue'})}>
                        한유경
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Home;