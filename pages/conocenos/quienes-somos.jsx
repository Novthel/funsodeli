import Layout from '@/components/Layout'
import Image from 'next/image'
import img2 from '../../public/img/img2.jpg'
import styles from '../../styles/About.module.css'
import { motion } from "framer-motion"

export default function About() {
  return (
    <Layout title ='Quienes Somos'>

        <div className={styles.container}>
            <h1 className={styles.title}>Quienes Somos</h1>
            <section className={styles.info}>
                <motion.div className={styles.infoImg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }} 
                    transition={{  ease: "easeOut", duration: 1 }}
                >
                    <Image className={styles.img} src={ img2 } alt=''/>
                </motion.div>
                <motion.div className={styles.infoText}
                    initial={{opacity: 0 }}
                    animate={{ opacity: 1 }} 
                    transition={{  ease: "easeOut", duration: 0.5 }}
                >
                    <p className={styles.infoDescription}> 
                        Somos una fundación sin ánimo de lucro que aportamos al desarrollo de las mujeres vulnerables fortaleciendo sus capacidades y habilidades logrando que puedan emprender o vincularse al campo laboral; 
                        consiguiendo con esto oportunidades de ingresos y mejor bienestar para sus hogares. <br/> <br/>
                        Realizamos acompañamiento y capacitación a Jóvenes entre 15 y 22 años fortaleciendo sus habilidades socioemocionales necesarias para su futuro.
                    </p>
                </motion.div>
            </section>

        </div>
    </Layout>
  )
}
