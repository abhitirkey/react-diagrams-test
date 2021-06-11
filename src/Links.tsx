import React from 'react'
import {Link} from 'react-router-dom'
import styled from '@emotion/styled';

function Links() {

    const Sidebar = styled.div`
        display: flex;
        flex-direction: column;
        flex-basis: 30%;
        align-items: center;
        margin-top: 5rem;
    `;

    return (
        <Sidebar>
            <Link to="/">Simple Demo</Link>
            <Link to="/animation">Animation</Link>
            <Link to="/listeners">Events and Listeners</Link>
            <Link to="/something3">Simple Demo 4</Link>
        </Sidebar>
    )
}

export default Links
