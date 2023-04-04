import Layout from "@/components/Layout";
import data from '../../data.json'
import Image from 'next/image'
import style from '../../styles/Training.module.css'
import { BsCheck2Circle } from "react-icons/bs";


export default function Training({ userData }) {

    const { title, img, training } = userData

  return (
    <Layout>
        <section className={ style.container }>
            <div className={ style.card }>
                <div className={ style.cardHeader }>
                    <h2> { title } </h2>
                </div>
                <div className={ style.cardImage }>
                    <Image src={ img } alt={ title } width={500} height={ 300 } priority /> 
                </div>
                <ul className={ style.cardText }>
                    { 
                        training && training.map((t,i)=>(
                        <div key={i}>
                            <li><p><BsCheck2Circle style={{ color: 'green '}} />  {t.item}</p></li>
                        </div>
                        ))
                    }
                </ul>
            </div>

        </section>  
    </Layout>
  )
}


export async function getStaticPaths(){
    const ids = data.map(({ id }) => id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));
    return {
      paths,
      fallback: false,
    };
}


export async function getStaticProps(context){
    
    const userData = data[context.params.id - 1]

    return {
        props:{
            data,
            userData,
          }
    }

}
