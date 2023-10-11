import React from 'react'

const Aboutus = () => {
  return (
    <secttion id='aboutus'>
      <div className='xs:p-10 sm:padding-lg font-sarabun '>
        <div className='grid grid-flow-col max-lg:grid-flow-row max-lg:grid-cols-2 gap-10 justify-evenly border-b-[1px] border-gray-400 pb-10 '>
          <h3 className='text-lg font-semibold '>Air Freight</h3>
          <h3 className='text-lg font-semibold '>Rail Freight</h3>
          <h3 className='text-lg font-semibold '>LTL Freight</h3>
          <h3 className='text-lg font-semibold '>Sea Freught</h3>
          <h3 className='text-lg font-semibold '>Land Freight</h3>
          <h3 className='text-lg font-semibold '>Warehousing</h3>
        </div>

        <div className='flex max-md:flex-col mt-20 '>

          <div className='mr-10 mt-10'>
            <img src='https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-tabbed-info-1.png' alt='' />
          </div>

          <div className="mt-10 grow-0">
                <div className="pb-7 border-b-[1px] border-gray-400">
                    <h1 className="text-4xl font-bold pb-5 text-primary">Secure courier for <br/> small & big packages</h1>
                    <span className="text-dark-grey text-lg">Lorem ipsum dolor sit amet, id has nihil discere vocibus. <br/> No novum cu labor probatus cum, te utamur scripta ei legat cum qui ei sapere quo noster sum periculis ad.</span>
                </div>

                <div className="flex pt-5 ">
                    <div className="">
                        <div className="yellow-btn">+</div>
                    </div>
                    <div className="text-primary text-md font-semibold ml-4">View more <br/> about our services</div>
                </div>
            </div>

        </div>
      </div>
    </secttion>
  )
}

export default Aboutus