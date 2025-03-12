import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset} from '@fortawesome/free-solid-svg-icons'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-solid-svg-icons';
const services=[
  {
    icon: faShieldHalved,
    title: 'Secured Payment Guarantee',
    description: 'Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum'
  },
  {
    icon: faHeadset,
    title: 'Help Center & Support 24/7',
    description: 'Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum'
  },
  {
    icon: faShieldHalved,
    title: 'Booking any Class Vehicles',
    description: 'Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum'
  },
  {
    icon: faBriefcase,
    title: 'Corporate and Business Services',
    description: 'Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum'
  },
  {
    icon: faUserPlus,
    title: 'Car Sharing Options',
    description: 'Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum'
  },
  {
    icon: faGem,
    title: 'Limousine and Chauffeur Hire',
    description: 'Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum'
  }
  ]
export default function About() {
  return (
    <>

      <section className='about bg-white min-h-[90svh]' id='about'>
        <div className="title mt-20 flex items-center justify-center">
          <div className="red-line w-[70px] h-[7px] bg-red-600 mt-2">

          </div>
          <h2 className='font-bold text-3xl mx-3'>Why Us</h2>
          <div className="red-line w-[70px] h-[7px] bg-red-600 mt-2">

          </div>

        </div>

        <div className='services grid md:grid-cols-3 sm:grid-cols-2  pt-10'>
          {
            services.map((service, index) => (
              <div key={index} className='service p-10 text-center flex flex-col gap-3'>
                <div className='icon text-red-600'>
                  <FontAwesomeIcon icon={service.icon} size='3x' />
                </div>
                <h3 className='font-bold text-xl'>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))
          }
        </div>
      </section>

    </>
  )
}
