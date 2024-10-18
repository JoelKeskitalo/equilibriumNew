import React from 'react'
import './Footer.scss'
import githubIcon from '../../assets/icons/github.png'
import youtubeIcon from '../../assets/icons/youtube.png'
import kickIcon from '../../assets/icons/kick.png'

const Footer = () => {
    return (
        <div className='footer'>
            <nav>
                <ul>
                    <li className='footer-item'>
                        <a href='https://github.com/JoelKeskitalo'>GitHub</a>
                        <img className='icon' src={githubIcon}></img>
                    </li>
                    <li className='footer-item'>
                        <a href='https://www.youtube.com/@J0113'>Youtube</a>
                        <img className='icon' src={youtubeIcon}></img>
                    </li>
                    <li className='footer-item'>
                        <a href='https://kick.com/j0113'>Stream</a>
                        <img className='icon' src={kickIcon}></img>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Footer