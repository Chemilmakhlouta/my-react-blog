import React from 'react'

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

export default function Navigation() {
    return (
    <nav className="site-navigation">
        <span>My React Blog</span>
        <ul>
            { navLinks.map((link, index) => (
                <li key={index}>
                    {link.title}
            
                </li>
            ))}
        </ul>
    </nav>)
}