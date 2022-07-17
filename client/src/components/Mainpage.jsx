import React from 'react'
import Logo from "../assets/autosaleslogo.png"
import Photo1 from "../assets/carlotcars.jpg"
import Photo2 from "../assets/carlotoffice.jpg"
import Vette1 from "../assets/2017-Vette-Z06/1.jpg"
import Vette2 from "../assets/2017-Vette-Z06/2.jpg"
import Vette3 from "../assets/2017-Vette-Z06/3.jpg"
import Vette4 from "../assets/2017-Vette-Z06/4.jpg"
import Jeep1 from "../assets/2011-Jeep/jeep1.jpg"
import Jeep2 from "../assets/2011-Jeep/2.jpg"
import Jeep3 from "../assets/2011-Jeep/3.jpg"
import Jeep4 from "../assets/2011-Jeep/4.jpg"

import 'tw-elements'

const Mainpage = () => {
  return (

  <div className='bg-gradient-to-b from-white to-green-600'>
    <div className="flex flex-col md:max-w-screen mx-auto">

      <div className="md:flex md:flex-row md:items-center md:p-4 md:justify-between hidden">   
          <img src= {Logo} className="w-64 mx-4 md:mx-12" />
          <p className='font-bold text-xl'>We Buy</p>
          <p className='font-bold text-xl'>We Sell</p>
          <p className='font-bold text-xl'>We Trade</p>
          <p className='mx-12 font-bold text-2xl'>Call us! 570-672-2611 </p>
      </div>

      <div>   
          <img src= {Logo} className="w-64 mx-16 my-4 md:hidden" />
      </div>

      <div className='mx-auto'>
        <div>
          <p className='font-bold md:max-w-90 italic text-xl text-center'>
            At Elysburg Auto Sales, we specialize in used cars sales,
            making sure that our prices are unmatchable.
          </p>
        </div>

        <div>
          <p className='md:mx-48 my-8 md:max-w-90 font-bold text-base text-center'>
          Feel free to stop by anytime! Our inventory, along with our hours and location, is listed below.
          Our prices are unbeatable and if we don't have what you're looking for, let us know!
          We can source your choice at a great price!
          </p>
        </div>

        <div className='font-bold md:max-w-90 italic text-2xl text-center'>
          Inventory

          <section class="md:flex md:flex-row my-2 border-2 border-black md:mx-48 items-center overflow-hidden text-lg text-black">
          <div>
                2008 Jeep Wrangler<br/>
                Unlimited X Sport 4x4<br/>
                Manual Transmission<br/>
                177K Miles<br/>
                <p className='text-green-700'>$12,400</p>

              </div>
            <div class="container justify-between py-2">
              <div class="flex flex-row md:mx-2">
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full md:h-48 p-1 md:p-2">
                    <a href='https://i.imgur.com/6FV292f.jpeg'>
                    <img alt="gallery" class="block object-cover object-center w-full h-full border-2 border-black cursor-pointer hover:scale-110"
                      src= {Jeep1}/>
                      </a>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <a href='https://i.imgur.com/BiaI4nB.jpg'>
                      <img alt="gallery" class="block object-cover object-center w-full h-full border-2 border-black cursor-pointer hover:scale-110"
                        src= {Jeep2}/>
                      </a>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <a href='https://i.imgur.com/Po2TqIB.jpeg'>
                      <img alt="gallery" class="block object-cover object-center w-full h-full border-2 border-black cursor-pointer hover:scale-110"
                        src= {Jeep3}/>
                      </a>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <a href='https://i.imgur.com/ONY8cra.jpeg'>
                      <img alt="gallery" class="block object-cover object-center w-full h-full border-2 border-black cursor-pointer hover:scale-110"
                        src= {Jeep4}/>
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="md:flex md:flex-row my-2 border-2 border-black md:mx-48 items-center overflow-hidden text-lg text-black">
          <div>
                2017 Chevy Corvette<br/>
                Z06 3LZ Convertible<br/>
                5,900 Miles<br/>
                <p className='text-blue-700'>See by appointment!</p>
                <p className='text-green-700'>$87,500</p>

              </div>
            <div class="container justify-between py-2">
              <div class="flex flex-row md:mx-2">
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full md:h-48 p-1 md:p-2">
                    <a href='https://i.imgur.com/pSqQA42.jpg'>
                    <img alt="gallery" class="block object-cover object-center w-full h-full border-2 border-black cursor-pointer hover:scale-110"
                      src={Vette1}/>
                    </a>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <a href='https://i.imgur.com/xEB9Ubp.jpg'>
                    <img alt="gallery" class="block object-cover object-center w-full h-full border-2 border-black cursor-pointer hover:scale-110"
                      src={Vette2}/>
                      </a>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                  <a href='https://i.imgur.com/dI6v3AH.jpeg'>
                    <img alt="gallery" class="block object-cover object-center w-full h-full border-2 border-black cursor-pointer hover:scale-110"
                      src={Vette3}/>
                      </a>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <a href='https://i.imgur.com/qYfCawG.jpeg'>
                    <img alt="gallery" class="block object-cover object-center w-full h-full border-2 border-black cursor-pointer hover:scale-110"
                      src={Vette4}/>
                      </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="hidden md:hidden md:flex md:flex-row border-2 border-black md:mx-48 items-center overflow-hidden text-lg text-black">
          <div>
                2011 Subaru Outback<br/>
                2.5i Limited<br/>
                166K Miles<br/>
                <p className='text-red-700'>Sold!</p>

              </div>
            <div class="container py-2">
              <div class="flex flex-row md:mx-2">
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full md:h-36 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full border-2 border-black"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"/>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full border-2 border-black"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"/>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full border-2 border-black"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"/>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full border-2 border-black"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"/>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="hidden md:hidden md:flex md:flex-row my-2 border-2 border-black md:mx-48 items-center overflow-hidden text-lg text-black">
          <div>
                2011 Subaru Forester<br/>
                2.5x Limited<br/>
                183K Miles<br/>
                <p className='text-red-700'>Sold!</p>

              </div>
            <div class="container py-2">
              <div class="flex flex-row md:mx-2">
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full md:h-36 p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full border-2 border-black"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"/>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full border-2 border-black"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"/>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full border-2 border-black"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"/>
                  </div>
                </div>
                <div class="flex flex-wrap w-1/3">
                  <div class="w-full p-1 md:p-2">
                    <img alt="gallery" class="block object-cover object-center w-full h-full border-2 border-black"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"/>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        

        <div className='hidden md:flex md:flex-row md:justify-between md:mx-48'>
          <img src= {Photo1} className="w-64 mx-14 my-2 border-4 border-black" />
          <p className='mx-2 my-8 font-bold text-xl text-center'>Drop in and see if we've got anything you like!</p>
          <img src= {Photo2} className="w-64 mx-14 my-2 border-4 border-black" />
        </div>

        <div className='md:hidden'>
          <p className='mx-8 my-8 font-bold text-xl justify-between text-center'>
          Drop in!
          </p>
          <img src= {Photo2} className="w-64 mx-auto my-2 justify-between border-4 border-black" />
          <img src= {Photo1} className="w-64 mx-auto my-2 justify-between border-4 border-black" />
        </div>

        <div className='md:mx-48 mx-20 my-2'>
          <div className='mx-2 my-2 font-bold italic text-xl text-center'>
            <p className='text-green-200'>
              Address
            </p>
            <p className='my-2 font-bold text-base text-gray-200 text-center'>
              299 South Market Street<br/>
              Elysburg, PA 17824<br/>
              570-672-2611<br/>
              eas.cars54@gmail.com
            </p>
            <p className='text-green-900'>
              Hours of Operation
            </p>
            <p className='my-2 font-bold text-base text-gray-200 text-center'>
              Monday: 11 A.M. - 5 P.M.<br/>
              Tuesday: 11 A.M. - 5 P.M.<br/>
              Wednesday: 11 A.M. - 5 P.M.<br/>
              Thursday: 11 A.M. - 5 P.M.<br/>
              Friday: 11 A.M. - 5 P.M.<br/>
              Saturday: By appointment only.<br/>
              Sunday: Closed<br/>
            </p>

          </div>
        </div>
        
        
      </div>

    </div>
    </div>

  )
}

export default Mainpage