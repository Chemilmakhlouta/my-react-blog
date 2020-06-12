import React from 'react'
import {Link} from 'react-router-dom';
import { Avatar } from 'antd';

const navLinks = [
    {
        title:'Home',
        path:'/'
    },
    {
        title:'Blog',
        path:'/blog'
    },
    {
        title:'Contact Us',
        path:'/contact-us'
    },
    {
        title:'Login',
        path:'/login'
    }
]

export default function Navigation({user}) {
    return (
    <nav className="site-navigation">
        <span className="menu-title">My React Blog</span>
        <div className="menu-content-container">
            <ul>
                { navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.path}>{link.title}</Link>
                    </li>
                ))}
            </ul>
            <span>
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={38} />
                <span>{`${user.firstName} ${user.lastName}`}</span>
            </span>
        </div>
    </nav>)
}