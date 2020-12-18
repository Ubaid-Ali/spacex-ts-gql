import React from 'react';
import './style.css';


interface Props {
    handleshow: () => void
}

const Header: React.FC<Props> = ({handleshow}) => {
    return (
        <>
            <header className='header'>
                <div className='overlay'>
                    <h1>Space X</h1>
                    <h3>Rocket Launches History</h3>
                    <p>Original Details of every success and failure.</p>
                    <button onClick={handleshow} >SHOW LAUNCHES</button>
                </div>
            </header>
        </>
    )
}

export default Header

