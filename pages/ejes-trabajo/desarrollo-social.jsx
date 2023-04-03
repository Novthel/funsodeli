import Layout from '@/components/Layout'
import styles from '../../styles/SocialDev.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { getItems } from '@/services/ItemService';


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      ease: "easeOut",
      duration: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0, scale:0.9 },
  show: { opacity: 1, scale: 1, transition:{ ease: "easeInOut", duration:1} }
}



export default function SocialDev({ trainings }) {
  
  return (
    <Layout title ='Desarrollo Social'>
      <section className={ styles.container }>
        <h1 className={ styles.title }>DESARROLLO SOCIAL</h1>

        <section className={ styles.information }>
            Lorem ipsum  Lorem Ipsum of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged.
        </section>
        <motion.section  className={ styles.grid }
            variants={container}
            initial="hidden"
            animate ="show"
        >
            {
              trainings && trainings.map((cap)=>(
                <motion.div className={ styles.cards } key={ cap.id }
                variants={item}
                >
                  <Link href= {`/ejes-trabajo/${ cap.id }`}>
                    <Image priority className={ styles.imgCard } src={ cap.img } alt={ cap.title }  width={150} height={ 150 }/>
                    <div className={ styles.cardTitle }>
                      { cap.title }
                    </div>
                    <div className={ styles.cardFooter }>
                      <p>Ver mas ...</p>
                    </div>
                  </Link>  
                </motion.div>
              ))
            }
        </motion.section>
      </section>    
    </Layout>
  )
}



export async function getStaticProps(){
  const res = await getItems()

  return {
    props:{
      trainings: res
    }
  }
}

