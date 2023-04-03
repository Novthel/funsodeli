import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import style from '../styles/Redes.module.css'

export default function Redes() {
  return (
    <div className={ style.container }>
        <ul className={ style.list}>
            <li className={ style.icon } ><a href="https://www.facebook.com/funsodeli.funsodeli" target="_blank" rel="noopener noreferrer"><BsFacebook /></a></li>
            <li className={ style.icon } ><BsTwitter /></li>
            <li className={ style.icon } ><a href="https://www.instagram.com/funsodeli_baq/" target="_blank" rel="noopener noreferrer" ><BsInstagram /> </a></li>
            <li className={ style.icon } ><BsLinkedin /></li>
        </ul>

    </div>
  )
}
