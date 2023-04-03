import Image from 'next/image'
import style from '../styles/Principal.module.css'
import principal from '../public/img/principal.jpg'
import logo from '../public/img/logo.png'
import { motion } from 'framer-motion'

export const Principal = () => {
  return (
    <section className={ style.container }>
        <div className={ style.containerImage }>
         <Image src={ principal } alt='' className={ style.imagen } placeholder="blur"
             />
         <Image src={ logo } alt='logo' className={ style.logo } width={ 130 } height={ 130 }/>
         <div className={ style.slogan }>
          <motion.p 
            initial={{ opacity:0 } }
            animate={{ opacity:1 }}
            transition={{ ease:'ease', duration:1  }}
          >
            Impulsando el
          </motion.p>
          <motion.p className={ style.sloganCursivo }
            initial={{ opacity:0 } }
            animate={{ opacity:1 }}
            transition={{ ease:'ease', delay:0.5 , duration:1 }}
          >
            desarrollo 
          </motion.p>
          <motion.h1 className={ style.sloganh1 }
            initial={{ opacity:0, scale:0.5 } }
            animate={{ opacity:1, scale:1 }}
            transition={{ ease:'linear', delay:1, duration:0.5, scale: {
              type: "spring",
              damping: 7
            } }}
          > 
            Social
          </motion.h1>
         </div>
        </div>
        <div className={ style.containerComments }>
            <p className={ style.comments }>Impulsamos el capital Humano y social de poblaciones vulnerables para el mejoramiento de la calidad de vida, desarrollo economico y habilidades sociales</p>
        </div>
    </section>
  )
}

