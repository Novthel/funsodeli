import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/img/logo.png'
import { useState } from 'react';
import style from '../styles/Menu.module.css'
import { BsFillCaretDownFill, BsList } from "react-icons/bs";


export default function Menu() {

    const [showMenu, setShowMenu] = useState(false);
    const [showMenu2, setShowMenu2] = useState(false);
    const [view, setView] = useState(false);

    const viewMenu =()=>{
        setView(!view)  
    }

    const handleToggle=()=>{
        setShowMenu((prev)=> !prev)
        setShowMenu2(false)
    }

    const handleToggle2=()=>{
        setShowMenu2((prev)=> !prev)
        setShowMenu(false)
    }

    const onMouseLeave=()=>{
        setShowMenu(false)
        setShowMenu2(false)
    }


  return (
    <header className={ style.header }>

        <section className={ style.logocompany }>
            <Image src={ logo } alt='logo funsodeli' width={70} height={70} placeholder="blur" />
            <p className={ style.nameCompany } >Fundacion Social Desarrollo & Liderazgo</p>
        </section>

        <nav className={ `${ style.navmenu } ${ view? style.show: style.hide }` }>
            <li><Link href='/'>Inicio</Link></li>

            <li onClick={ handleToggle }  onMouseLeave={ onMouseLeave } >
                <p>Conocenos <BsFillCaretDownFill size={10}/> </p>

                <ul className={ `${ style.dropdown } ${ showMenu?style.showMenu: style.hideMenu}` }>
                   <li><Link href='/conocenos/quienes-somos'>Quienes Somos</Link></li> 
                    <li><Link href='/conocenos/mision-vision'>Mision - Vision</Link></li>
                </ul>

            </li>

            <li onClick={ handleToggle2 }  onMouseLeave={ onMouseLeave } >
                <p>Ejes de Trabajo <BsFillCaretDownFill size={10}/> </p>

                <ul className={ `${ style.dropdown } ${ showMenu2?style.showMenu: style.hideMenu}` }>
                    <li><Link href='/ejes-trabajo/proteccion-ambiental'>Proteccion Ambiental</Link></li>
                    <li><Link href='/ejes-trabajo/desarrollo-social'>Desarrollo Social</Link></li>
                </ul>
            </li>

            <li><Link href='/'>Impacto Social</Link></li>

            <li><Link href='/'>Contactanos</Link></li>
        </nav>

        <div className={ style.hamb } onClick={ viewMenu }>
            <BsList size={40} />
        </div>
    </header>
  )
}
