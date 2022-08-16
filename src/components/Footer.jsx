import {BsGithub,BsLinkedin} from 'react-icons/bs';


export default function Footer(){
  return(
    <footer className='footer'>
      <a className='footer_icon' href="https://github.com/JimLoy" alt="GitHub"><BsGithub/></a>
      <a className='footer_icon' href="https://www.linkedin.com/in/juanignaciomoldes-js/" alt="Linkedin"><BsLinkedin/></a>
    </footer>
  )
}