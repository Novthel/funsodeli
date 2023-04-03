import Head from "next/head"
import Footer from "./Footer"
import FooterPage from "./FooterPage"
import styles from '../styles/Layout.module.css'
import { motion, AnimatePresence } from "framer-motion"
import Redes from "./Redes"
import Menu from "./Menu"


export default function Layout({ children, title, home }) {
  return (
    <div className={ styles.container }>
        <Head>
            <title> { `Funsodeli  -  ${ title? title : ''}` }</title>
            <link rel="icon" href="/funsodeli.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <nav>
          <Menu />
        </nav>

        <AnimatePresence>
          <motion.main
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exist={{ opacity:0 }}
            transition={{ delay: 0.2, duration:0.5 }}
          >
            <div className={ styles.children }>
              { children }
            </div>
            <div className={ styles.redes }>
              <Redes />
            </div>
           
          </motion.main>
        </AnimatePresence>
       

        <footer >
          {
            home?
            <Footer />
            :
            <FooterPage />
          }
        </footer>
        
    </div>
  )
}


