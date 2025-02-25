import React from 'react'
import '../styles/footer.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";

const Footer = () => {
    return (
        <div className='footer'>
            <p>Website made by Kamil Wiącek</p>
            <div className='aboutMe'>
                <a href='https://github.com/wiacix' target='_blank' rel='noreferrer'><FaGithub size={30} /></a>
                <a href='https://linkedin.com/in/kamil-wiącek-5919b9277' target='_blank' rel='noreferrer'><FaLinkedin size={30} /></a>
                <a href='https://financialapp.pl/APP/CV_Wiącek_Kamil.pdf' target='_blank' rel='noreferrer'><TbFileCv size={30} /></a>
            </div>
        </div>
    )
}

export default Footer
