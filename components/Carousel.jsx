import Image from 'next/image'
import styles from '../styles/Carousel.module.css'
import { motion } from 'framer-motion';

export default function Carousel() {

    const listImg = [
        '/img/amb1.jpg',
        '/img/amb2.jpg',
        '/img/amb3.jpg',
        '/img/amb4.jpg',
    ]

    const handleSubmit =()=>{
        console.log('hola')
    }

  return (
    <motion.div className={ styles.container }>
       <motion.div className={ styles.slider } drag='x'
       dragConstraints={{ right:0, left: -214 }} >
        {
            listImg.map((img, i) => (
                <motion.div className={ styles.containerImg } key={ i }>
                    <Image  className={ styles.img } src={ img } alt='' width={300} height={ 300 } onClick={()=> handleSubmit } />
                </motion.div>
            ))
        }
       </motion.div>
    </motion.div>
  )
}

