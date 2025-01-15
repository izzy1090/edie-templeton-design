// eslint-disable-next-line
import { ReactComponent as InstagramLogo } from '../assets/instagram.svg';
import { ReactComponent as LinkedInLogo } from '../assets/linkedin.svg';
import { ReactComponent as EmailLogo } from '../assets/email.svg';
import useGlobalStates from '../hooks/use-globalStates.js';

function FooterPage () {
  const { isNavOpen } = useGlobalStates(); 

  return <div className='footer' style={isNavOpen ? { display: 'none'} : null}>
      <div className='contentContainer'>
        <div className="socialLogos">
          <a href='mailto:ediesnyder@gmail.com'
            target='_blank' rel='noreferrer'>
            <EmailLogo id="emailLogo"/>
          </a>
          <a href='https://www.instagram.com/interiors_and_such/' 
            target='_blank' rel="noreferrer">
            <InstagramLogo id='instagram'/>
          </a>
          <a href='https://www.linkedin.com/in/edie-snyder-28b4b92b/'
            target='_blank' rel='noreferrer'>
            <LinkedInLogo id="linkedin"/>
          </a>
        </div>
        <div className='llc'>
          <p>Edie Templeton Design, LLC © 2024</p>
          <p style={{fontSize: "smaller", textAlign: 'center', padding: "5px"}}>378 Myrtle Ave, Brooklyn, NY 11205</p>
        </div>
    </div>
  </div>
}

export default FooterPage;
