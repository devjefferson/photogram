import React from 'react'
import Logo from './components/Logo'
import Photo from './components/Photo'

export default function App(){
  const imagem = [{item: require('./assets/image/emilly1.jpg')},{item: require('./assets/image/emilly2.jpg')}]
  
  return(
    <>
      <Logo/>
      {imagem.map(img=>{
        return(
          <Photo Img={img.item}/>
        )
      })}
    </>
  )
}
