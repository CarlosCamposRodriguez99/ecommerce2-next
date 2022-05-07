import {useRouter} from 'next/router'

const EntradaBlog = () => {

  const router = useRouter()
  console.log(router.query)


  return (
    <div>
      <h1>Desde entradablog</h1>
      
    </div>
  )
}

export default EntradaBlog
