import React from 'react';
import './style.css';


export interface Props {
    handleshow: () => void
}

const Header: React.FC<Props> = ({handleshow}) => {
    return (
        <>
            <header className='header'>
                <div className='overlay'>
                    <h1>Space X</h1>
                    <h3>Rocket Launches History</h3>
                    <p>SpaceX's achievements all details of every launch.</p>
                    <button id='handleshow-id'  onClick={handleshow} >SHOW LAUNCHES</button>
                </div>
            </header>
        </>
    )
}

export default Header

