import React from 'react'
import './Homepage.scss'

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>Welcome to Equilibrium!</h1>
            <p>This is a place where I gather what's important in my life to keep balance.<br />
            Here you will find useful tools, such as:
            </p>
            <ul className="features-list">
                <li>🏋️ Gym schedule</li>
                <li>🍽️ Diet plan</li>
                <li>📝 A todo list</li>
                <li>🧘 Meditation</li>
                <li>💭 Philosophy</li>
            </ul>
            <button className="cta-button">Start your journey</button>
        </div>
    )
}

export default HomePage
