import Layout from '@/components/Layout'
import Image from 'next/image'
import mision from '../../public/img/imagen1.jpg'
import styles from '../../styles/Mision.module.css'
import { motion } from 'framer-motion'


export default function Mision() {
  return (
    <Layout title ='Mision - Vision'>

        <div className={styles.container}>
            
            <motion.section className={styles.info}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
            >
                <div className={styles.infoImg}>
                    <Image className={styles.img} src={ mision } alt=''/>
                </div>
                <div className={styles.infoText}>
                    <h1 className={styles.infoTitle}>MISION</h1>
                    <p className={styles.infoDescription}> 
                        Somos una fundación sin ánimo de lucro que aportamos al desarrollo de las mujeres vulnerables fortaleciendo sus capacidades y habilidades logrando que puedan emprender o vincularse al campo laboral; 
                        consiguiendo con esto oportunidades de ingresos y mejor bienestar para sus hogares. <br/>
                        Realizamos acompañamiento y capacitación a Jóvenes entre 15 y 22 años fortaleciendo sus habilidades socioemocionales necesarias para su futuro.
                    </p>
                </div>
            </motion.section>

            <motion.section className={styles.info}
                initial={{ opacity: 0, x:100 }}
                animate={{ opacity: 1, x:0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
            >

                <div className={styles.infoImg}>
                    <Image className={styles.img} src={ mision } alt=''/>
                </div>
                <div className={styles.infoText}>
                    <h1 className={styles.infoTitle}>VISION</h1>
                    <p className={styles.infoDescription}> 
                        La Fundación social desarrollo & Liderazgo desea para el 2028 ser reconocida a  nivel nacional por nuestra labor y compromiso.
                        Inaugurar un centro de desarrollo infantil, para la primera infancia e infancia extendida que cuente con escuela, comedor, 
                        juegos infantiles, piscina, cancha de fútbol, otros escenarios deportivos, zonas verdes y salón múltiple entre otros espacios, 
                        de modo que podamos atender a los niños principalmente de padres que laboran de manera informal y en las calles.
                    </p>
                </div>
            </motion.section>
        </div>
    </Layout>
  )
}
