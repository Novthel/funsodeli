import Image from "next/image";
import logo from '../public/img/logo.png'
import styles from '../styles/Footer.module.css'
import { AiFillHome, AiTwotonePhone, AiOutlineMail, AiOutlineGlobal } from "react-icons/ai";


export default function Footer() {
  return (
    <footer className={ styles.container }>
        <Image  className={ styles.logo } src={ logo }  alt='logo funsodeli'  />
        <ul className={ styles.info }>
            <li className={ styles.item }><AiFillHome size={20}/>  Calle 48B  N°  2s - 58   -Barranquilla</li>
            <li className={ styles.item }><AiTwotonePhone size={20}/>  (57)  313 541  51 73   -  330 440 05 03</li>
            <li className={ styles.item }><AiOutlineMail size={20}/>  funlide2018@gmail.com</li>
            <li className={ styles.item }><AiOutlineGlobal size={20}/>  www.funsodeli.org</li>
        </ul>
    </footer>
  )
}
