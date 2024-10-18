import React from 'react'
import { Link } from 'react-router-dom'
import './AboutPage.scss'

const AboutPage = () => {
    return (
        <div className='about-page'>
            <section className='about-section'>
                <h2><Link to='/exercise'>🏋️ Gym</Link></h2>
                <p>Track your gym schedule, progress, diet and set personal goals to improve your fitness.</p>
            </section>

            <section className='about-section'>
                <h2><Link to='/todo'>📝 Todo List</Link></h2>
                <p>Stay organized with your personal todo list, track tasks and stay productive.</p>
            </section>

            <section className='about-section'>
                <h2><Link to='/philosophy'>💭 Philosophy & Motivation</Link></h2>
                <p>Explore philosophical ideas and motivational quotes to inspire personal growth.</p>
            </section>

            <section className='about-section'>
                <h2><Link to='/account'>🔑 Account/Register</Link></h2>
                <p>Create an account to save your data and track your progress across all areas.</p>
            </section>

            <section className='about-section'>
                <h2><Link to='/'>🏠 Home</Link></h2>
                <p>Return to the home page.</p>
            </section>

        </div>
    )
}

export default AboutPage
