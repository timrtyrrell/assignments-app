import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Weekly Assignments</h1>
            <p>Planner made by Tim Tyrrell with React</p>
        </header>
    )
}

const headerStyle = {
    background: '#00435B',
    color: '#f4f4f4',
    textAlign: 'center',
    padding: '10px'
}

export default Header;