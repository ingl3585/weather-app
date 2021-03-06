import './Footer.css';
import { Link } from 'react-router-dom';
import github from '../../img/icons8-github-48.png';
import linkedin from '../../img/icons8-linkedin-48.png';

const Footer = () => {
	return (
		<footer className='footer-container'>
			<div className='social-icons'>
				<a href='https://github.com/ingl3585' target='_blank' rel='noreferrer'>
					<img className='github-icon' src={github} alt='github-icon' />
				</a>
				<a
					href='https://www.linkedin.com/in/anthonyingle/'
					target='_blank'
					rel='noreferrer'>
					<img className='linkedin-icon' src={linkedin} alt='linkedin-icon' />
				</a>
			</div>
			<Link className='contact-me-link' to='/weather-app/contact/'>
				Contact Me
			</Link>
			<Link className='icon-credits-link' to='/weather-app/credits/'>
				Icon Credits
			</Link>
		</footer>
	);
};

export default Footer;
