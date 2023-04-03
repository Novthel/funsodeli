import Layout from "@/components/Layout";
import Training from "@/components/Training";
import { getItems } from "@/services/ItemService";


export default function ListTrainings({training}) {
  return (
    <Layout>
        <Training item={ training } />
    </Layout>
  )
}


export async function getStaticPaths(){
    const items = await getItems()
    const paths = items.map( item => {
        return {
            params: {
                id: item.id.toString()
            }
        }
    })
    return {
        paths: paths,
        fallback: false
    }  
}


export async function getStaticProps({ params }){
    const id = params.id

    const items = await getItems()
    const res = items.find(item => item.id.toString() === id)

    return {
        props:{
            training: res
          }
    }

}
