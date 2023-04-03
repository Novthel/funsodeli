import { Principal } from '@/components/Principal'
import Objective from '@/components/Objective'
import Layout from '@/components/Layout'


export default function Home() {
  return (
    <Layout title ='Home' home >
  
      <main> 
        <Principal />
        <Objective />  
      </main>
    </Layout>
  )
}

