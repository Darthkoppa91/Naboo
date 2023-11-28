import React from 'react'
import "./main.css"
import { data } from '../../data';
import Card from '../Card/Card';


const Main = () => {
  return (
    <div className='main-div'>
      {/* {data?.map((e, index) => {
              props su slika i ime - property nesto sto zelimo da prosledimo drugoj komponenti
        return <Card key={index} slika={e.src} ime={e.name} />
      })} */}
      <Card 
      ime = "Pavle"
      slika = "https://6.soompi.io/wp-content/uploads/image/b727497eee2c45bb819c02d69df3a767/dummy.jpeg?s=900x600&e=t"
      city = "Kingslanding"
      boja="red" />
      <Card 
      ime = "Joca"
      slika = "https://as1.ftcdn.net/v2/jpg/03/51/55/94/1000_F_351559445_CDYTBTCj6lkRBgNfIafINje08bFHLDhN.jpg"
      city = "Storms End" boja="purple"/>
      <Card 
      ime = "Vedran"
      slika = "https://as2.ftcdn.net/v2/jpg/06/52/36/53/1000_F_652365380_ePN9Fp06D5PR8J1gWPMtIt638TSszplL.jpg"
       city = "Castely Rock"boja="yellow" />
      <Card 
      ime = "Lazar"
      slika = "https://t3.ftcdn.net/jpg/00/97/15/60/240_F_97156022_JDh67aSV5HqqY5c098JNJvZHk7aeWSMg.jpg"
       city = "Suns Spear"boja="brown"/>
      <Card 
      ime = "Marko"
      slika = "https://as1.ftcdn.net/v2/jpg/02/92/78/88/1000_F_292788885_E2rNXUHGtt7nNUUtGIhxvFRp8HUzWAGb.jpg" 
      city = "The Eyerie" boja="orange"/>
      <Card 
      ime = "Martin"
      slika = "https://as2.ftcdn.net/v2/jpg/06/28/49/97/1000_F_628499748_lmdUQVI3JFoF6aiju0XvoiJVGIg7GF7P.jpg"
       city = "Winterfell"boja="black" />
      <Card 
      ime = "Milan"
      slika = "https://www.fortressofsolitude.co.za/wp-content/uploads/2023/03/Henry-Cavill-Is-The-Perfect-Aegon-Targaryen-the-Conqueror-1536x1024.jpeg"
       city = "Rivia" boja="green"/>
      <Card 
      ime = "Stefan"
      slika = "https://bookanalysis.com/wp-content/uploads/2022/11/Robert-Baratheon-Artwork.jpg"
       city = "Harenhall"boja="cyan" />
    </div>
  )
}

export default Main 