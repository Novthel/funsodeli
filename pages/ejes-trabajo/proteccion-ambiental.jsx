import Carousel from "@/components/Carousel";
import Layout from "@/components/Layout";
import styles from '../../styles/Protection.module.css'

export default function Protection() {

  return (
    <Layout title ='Proteccion Ambiental'>

        <div className={ styles.container }>
            <h1  className={ styles.title }>PROTECCION Y CONSERVACION DEL MEDIO AMBIENTE</h1>
            
            <section className={ styles.information }>
                Lorem ipsum  Lorem Ipsum of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.
            </section>

            <section className={ styles.carousel }>
              <Carousel />
            </section>

        </div>
    </Layout>
  )
}
