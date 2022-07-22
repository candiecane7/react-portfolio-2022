import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

function Footer () {
    return (
        <footer id='footer'>
        <div className='icon-container'>
            <a href='https://www.facebook.com/candiecane'><AiFillFacebook /></a>
<a href='https://github.com/candiecane7'><AiFillGithub /></a>
<a href='https://www.linkedin.com/in/hallcandice7/'><AiFillFacebook /></a>
        </div>
        </footer>
    )
}

export default Footer;