import styles from '../styles/Footer.module.css'


export default function FooterPage() {

    
  return (
    <footer className={ styles.container }>
        <div className={ styles.foundationData }>
            <p className={ styles.nameFoundation }>Fundacion Social Desarrollo & Liderazgo</p>
            <div className={ styles.infoDirection }><p>Calle 48B N° 2s - 58   -Barranquilla</p> | <p>(57)  313 541  51 73   -  330 440 05 03</p>  </div>
            <div className={ styles.infoCorreo }><p>funlide2018@gmail.com </p> | <p>www.funsodeli.org</p> </div>
        </div>
    </footer>
  )
}