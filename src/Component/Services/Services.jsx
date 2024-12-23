import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard/ServiceCard'

const Services=()=>{

    const[serviceData,setserviceData]=useState([])

    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/newaz-sourav/ServicesApi/posts')
        .then(res=>res.json())
        .then(data=>setserviceData(data))
    }),[]
    return(

     <div class="grid grid-cols-1 gap-2 p-10 pt-2 sm:grid-cols-2 sm:gap-4 sm:p-12 sm:pt-2 md:grid-cols-2 md:gap-4 md:p-14 md:pt-4 lg:grid-cols-2 lg:gap-4 lg:p-12 lg:pt-4 xl:grid-cols-3 xl:gap-6 xl:p-14 xl:pt-4 2xl:grid-cols-4 2xl:gap-6 2xl:p-14 2xl:pt-4">

        
        {
            
            serviceData.map(item=><ServiceCard key={item.id} jinish={item}></ServiceCard>)
        }
       </div>

     
    )
}

export default Services;