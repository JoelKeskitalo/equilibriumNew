import React from 'react'
import { Link } from 'react-router-dom';
import './Homepage.scss'

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>Welcome to Equilibrium!</h1>
            <p>This is a place where I gather what's important in my life to keep balance.<br />
            Here you will find useful tools, such as:
            </p>
            <ul className="features-list">
                <li>🏋️ Gym and diet</li>
                <li>📝 Todo list</li>
                <li>💭 Philosophy</li>
            </ul>
            <button className="cta-button"><Link to='/about'>Start your journey</Link></button>
        </div>
    )
}

export default HomePage
