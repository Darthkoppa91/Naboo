import React from 'react'
import "./main.css"
import { data } from '../../data';
import Card from '../Card/Card';

//slika, yop, km, cena, boja, model,sold, hide
const Main = () => {
  return (
    <div className='main-div'>

      <Card 
      ime = "MERCEDES"
      slika="https://renty.ae/cdn-cgi/image/format=auto,fit=contain,width=816,height=516,sharpen=0/https://renty.ae/uploads/car/photo/l/__null_5302_main_c069f30e671dccda3869f526e257ff52.jpg"
      yop ="2021"
      km="38 000km"
      cena="25 000e"
      boja = "black"
      model= "G class"
      sold = {false}
      hide = {true}
      />
      <Card 
      ime = "AUDI"
      slika="https://www.alo.rs/data/images/2023-04-26/765026_screenshot-40_f.png"
      yop ="2019"
      km="138 000km"
      cena="21 200e"
      boja = "pink"
      model= "RS 7"
      sold = {true}
      hide = {false}
      />
      <Card 
      ime = "TIGUAN"
      slika="https://www.hindustantimes.com/ht-img/img/2023/09/20/550x309/Vw_1695193552463_1695193558166.jpg"
      yop ="2018"
      km="61 000km"
      cena="18 990e"
      boja = "orange"
      model= "R Line E"
      sold = {true}
      hide = {false}
      />
      <Card 
      ime = "MG"
      slika="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO9KcfZZ2MMHUt4flFqKdtid1oxtZAN-JyZA&usqp=CAU"
      yop ="2023"
      km="3 700km"
      cena="29 000e"
      boja = "blue"
      model= "k-120"
      sold = {false}
      hide = {true}
      />
      
    </div>

    // <div className='main-div'>
    //   {/* {data?.map((e, index) => {
    //           props su slika i ime - property nesto sto zelimo da prosledimo drugoj komponenti
    //     return <Card key={index} slika={e.src} ime={e.name} />
    //   })} */}
    //   <Card 
    //   ime = "Pavle"
    //   slika = "https://6.soompi.io/wp-content/uploads/image/b727497eee2c45bb819c02d69df3a767/dummy.jpeg?s=900x600&e=t"
    //   city = "Kingslanding"
    //   boja="red" />
    //   <Card 
    //   ime = "Joca"
    //   slika = "https://as1.ftcdn.net/v2/jpg/03/51/55/94/1000_F_351559445_CDYTBTCj6lkRBgNfIafINje08bFHLDhN.jpg"
    //   city = "Storms End" boja="purple"/>
    //   <Card 
    //   ime = "Vedran"
    //   slika = "https://as2.ftcdn.net/v2/jpg/06/52/36/53/1000_F_652365380_ePN9Fp06D5PR8J1gWPMtIt638TSszplL.jpg"
    //    city = "Castely Rock"boja="yellow" />
    //   <Card 
    //   ime = "Lazar"
    //   slika = "https://t3.ftcdn.net/jpg/00/97/15/60/240_F_97156022_JDh67aSV5HqqY5c098JNJvZHk7aeWSMg.jpg"
    //    city = "Suns Spear"boja="brown"/>
    //   <Card 
    //   ime = "Marko"
    //   slika = "https://as1.ftcdn.net/v2/jpg/02/92/78/88/1000_F_292788885_E2rNXUHGtt7nNUUtGIhxvFRp8HUzWAGb.jpg" 
    //   city = "The Eyerie" boja="orange"/>
    //   <Card 
    //   ime = "Martin"
    //   slika = "https://as2.ftcdn.net/v2/jpg/06/28/49/97/1000_F_628499748_lmdUQVI3JFoF6aiju0XvoiJVGIg7GF7P.jpg"
    //    city = "Winterfell"boja="black" />
    //   <Card 
    //   ime = "Milan"
    //   slika = "https://www.fortressofsolitude.co.za/wp-content/uploads/2023/03/Henry-Cavill-Is-The-Perfect-Aegon-Targaryen-the-Conqueror-1536x1024.jpeg"
    //    city = "Rivia" boja="green"/>
    //   <Card 
    //   ime = "Stefan"
    //   slika = "https://bookanalysis.com/wp-content/uploads/2022/11/Robert-Baratheon-Artwork.jpg"
    //    city = "Harenhall"boja="cyan" />
    // </div>
  )
}

export default Main 