import React from 'react';
import Services from '../Services/Services';
import ImgSlide from '../ImgSlide/ImgSlide';
import Cavin from '../Cavin/Cavin';




const Home=()=>{

    return(
        <div class="p-4">
            <div>
               
               <ImgSlide></ImgSlide>
              

               <div class="w-full mt-8 pl-10 sm:pl-12 md:pl-14 lg:pl-12 xl:pl-14 2xl:pl-14">
                
              
                <div>
                <h1 class="text-xl font-bold text-gray-700">Services :</h1>
                </div>
                
             
                </div>
              
           
            
           <Services></Services>

           
           <div class="w-full mt-8 pl-10 sm:pl-12 md:pl-14 lg:pl-12 xl:pl-14 2xl:pl-14">
                
                
                 <div>
                 <h1 class="text-xl font-bold text-gray-700">Cabin :</h1>
                 </div>
                 
               
                 </div>

           <Cavin></Cavin>
            </div>
            
        </div>
    )
}

export default Home