import Image from 'next/image'
import style from '../styles/Training.module.css'
import { BsCheck2Circle } from "react-icons/bs";


export default function Training({ item }) {

    const { title, img, training } = item

    
  return (

    <section className={ style.container }>
      <div className={ style.card }>
        <div className={ style.cardHeader }>
          <h2> { title } </h2>
        </div>
        <div className={ style.cardImage }>
            <Image src={ img } alt={ title } width={500} height={ 300 } /> 
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
  )
}
