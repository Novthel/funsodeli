import styles from '../styles/Objective.module.css'
import social from '../socialObjectives.json'
import Image from 'next/image';
import { motion } from 'framer-motion';


const Objective = () => {

    return (
        <section className={ styles.container }>
            <h1 className={ styles.titleContainer }> OBJETIVO SOCIAL</h1>
            <section className={ styles.objective }>
                {
                    social.map((obj)=> (
                            <motion.div className={ styles.card } key={ obj.id }
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className={ styles.imgCard }>
                                    <Image src={ obj.image } alt={ obj.title } width={80} height={80} />
                                </div>
                                <h3 className={ styles.titleCard }>{ obj.title }</h3>
                                <p className={ styles.textCard }>{ obj.description }</p> 
                            </motion.div>
                    ))
                }
            </section>
            
        </section>
    );
}

export default Objective;
