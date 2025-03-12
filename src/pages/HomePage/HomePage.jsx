import React from 'react'

export default function HomePage() {
  return (
    <>
    <main className='md:h-[90svh] h-[100vh] relative'>
        <div className="hero p-4 absolute top-[-1] h-[100vh] md:h-[90vh] w-full text-white flex lg:flex-nowrap flex-wrap lg:flex-row  justify-center gap-6 py-30">
          <div className="left md:pl-20 md:w-[70%] flex flex-col gap-7">
            <h1 className='text-red-600 font-bold text-7xl'>
              ROTSO
            </h1>
            <p className='text-2xl'>
              Best & Luxury Cars Rental HTML5 Template.
            </p>
            <div className='flex gap-3'>
              <a href="#" className='text-white font-bold p-3 px-7 rounded-1 bg-red-600 hover:bg-red-800'>
                VIEW DEMOS
              </a>
              <a href="#" className='hover:text-white text-red-600 border-2 font-bold p-3 px-7 rounded-1 hover:bg-red-600 hover:border-red-600'>
                PURCHASE CARS
              </a>
            </div>

            <div className='text-white font-bold text-xl flex gap-9'>
                <div className='px-5' >
                  <p className='text-2xl' >2000+</p>
                  <p>
                    New Car
                  </p>
                </div>
                <div className='px-5' >
                  <p className='text-2xl' >1300+</p>
                  <p>
                    For Rent Cars
                  </p>
                </div>
                <div  className='px-5'>
                  <p className='text-2xl'>90+</p>
                  <p>
                    Used Cars
                  </p>
                </div>
              </div>

          </div>
          <div className="right mt-17 ">
            <img src="../../../public/car.png" className="object-contain h-[250px] lg:h-full" alt="car" />
          </div>
        </div>
      </main>
    </>
  )
}
