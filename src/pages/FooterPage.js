import { ReactComponent as InstagramLogo } from '../assets/instagram.svg';
import { ReactComponent as LinkedInLogo } from '../assets/linkedin.svg';
import useGlobalStates from '../hooks/use-globalStates';

function FooterPage () {
  const { isNavOpen } = useGlobalStates(); 

    return <div className='footer' style={isNavOpen ? { display: 'none'} : null}>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div className="socialLogos">
          <a href='https://www.instagram.com/templetweed/' 
            target='_blank' rel="noreferrer">
            <InstagramLogo id='instagram'/>
          </a>
          <a href='https://www.linkedin.com/in/edie-snyder-28b4b92b/'
            target='_blank' rel='noreferrer'>
            <LinkedInLogo id="linkedin" />
          </a>
        </div>
        <div className='llc'>Edie Templeton Design, LLC © 2024</div>
    </div>
  </div>
}

export default FooterPage;
