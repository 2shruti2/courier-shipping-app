import { useState } from 'react'
import { YellowBtn } from '../../components';

const Aboutus = () => {

  let [currentIndex, setCurrentIndex] = useState(0);

  return (
    <secttion id='aboutus'>
      <div className='xs:p-10 sm:padding-lg font-sarabun '>
        <div className='grid grid-flow-col max-lg:grid-flow-row max-lg:grid-cols-2   '>
          
          <button className={`${currentIndex === 0  ? 'border-b-[5px] pb-10 border-yellow-400 ' : 'border-b-[1px] border-gray-400 pb-10'} `} onClick={() => {setCurrentIndex(0)} } >
          <h3 className='text-lg font-semibold '>Air Freight</h3>
          </button>
          <button className={`${currentIndex === 1  ? 'border-b-[5px] pb-10 border-yellow-400' : 'border-b-[1px] border-gray-400 pb-10'} `} onClick={() => {setCurrentIndex(1)} }>
          <h3 className='text-lg font-semibold '>Rail Freight</h3>
          </button>
          <button className={`${currentIndex === 2  ? 'border-b-[5px] pb-10 border-yellow-400' : 'border-b-[1px] border-gray-400 pb-10'} `} onClick={() => {setCurrentIndex(2)}}>
          <h3 className='text-lg font-semibold '>LTL Freight</h3>
          </button>
          <button className={`${currentIndex === 3  ? 'border-b-[5px] pb-10 border-yellow-400' : 'border-b-[1px] border-gray-400 pb-10'} `} onClick={() => {setCurrentIndex(3)}}>
          <h3 className='text-lg font-semibold '>Sea Freight</h3>
          </button>
          <button className={`${currentIndex === 4  ? 'border-b-[5px] pb-10 border-yellow-400' : 'border-b-[1px] border-gray-400 pb-10'} `} onClick={() => {setCurrentIndex(4)}}>
          <h3 className='text-lg font-semibold '>Land Freight</h3>
          </button>
          <button className={`${currentIndex === 5  ? 'border-b-[5px] pb-10 border-yellow-400' : 'border-b-[1px] border-gray-400 pb-10'} `} onClick={() => {setCurrentIndex(5)}}>
          <h3 className='text-lg font-semibold '>Warehousing</h3>
          </button>
          
        </div>


       {currentIndex === 0 && 
          <div className='flex max-md:flex-col mt-20 animate-left'>

          <div className='mr-10 mt-10'>
            <img src='https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-tabbed-info-1.png' alt='' />
          </div>
          
          <div className=''>
          <div className="mt-10 grow-0">
            <div className="pb-7 border-b-[1px] border-gray-400">
              <h1 className="text-4xl font-bold pb-5 text-primary">Secure courier for <br /> small & big packages</h1>
              <span className="text-dark-grey text-lg">Lorem ipsum dolor sit amet, id has nihil discere vocibus. <br /> No novum cu labor probatus cum, te utamur scripta ei legat cum qui ei sapere quo noster sum periculis ad.</span>
            </div>

            <div className="flex pt-5 ">
              <YellowBtn />
              <div className="text-primary text-md font-semibold ml-4">View more <br /> about our services</div>
            </div>
          </div>
          </div>
          
        </div>
       }

       {currentIndex === 1 && 
          <div className='flex max-md:flex-col mt-20 animate-left '>

          <div className='mr-10 mt-10'>
            <img src='https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-tabbed-info-2.jpg' alt='' />
          </div>

          <div className="mt-10 grow-0">
            <div className="pb-7 border-b-[1px] border-gray-400">
              <h1 className="text-4xl font-bold pb-5 text-primary">Great & affordable <br /> courier transport</h1>
              <span className="text-dark-grey text-lg">Lorem ipsum dolor sit amet, id has nihil discere vocibus. <br /> No novum cu labor probatus cum, te utamur scripta ei legat cum qui ei sapere quo noster sum periculis ad.</span>
            </div>

            <div className="flex pt-5 ">
              <YellowBtn />
              <div className="text-primary text-md font-semibold ml-4">View more <br /> about our services</div>
            </div>
          </div>
          
        </div>
       }

       {currentIndex === 2 && 
          <div className='flex max-md:flex-col mt-20 animate-left'>

          <div className='mr-10 mt-10'>
            <img src='https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-tabbed-info-3.jpg' alt='' />
          </div>

          <div className="mt-10 grow-0">
            <div className="pb-7 border-b-[1px] border-gray-400">
              <h1 className="text-4xl font-bold pb-5 text-primary">Any location and any time we’ll be there</h1>
              <span className="text-dark-grey text-lg">Lorem ipsum dolor sit amet, id has nihil discere vocibus. <br /> No novum cu labor probatus cum, te utamur scripta ei legat cum qui ei sapere quo noster sum periculis ad.</span>
            </div>

            <div className="flex pt-5 ">
              <YellowBtn />
              <div className="text-primary text-md font-semibold ml-4">View more <br /> about our services</div>
            </div>
          </div>
          
        </div>
       }

       {currentIndex === 3 && 
          <div className='flex max-md:flex-col mt-20 animate-left'>

          <div className='mr-10 mt-10'>
            <img src='https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-tabbed-info-4.jpg' alt='' />
          </div>

          <div className="mt-10 grow-0">
            <div className="pb-7 border-b-[1px] border-gray-400">
              <h1 className="text-4xl font-bold pb-5 text-primary">Quality packing <br /> material for items</h1>
              <span className="text-dark-grey text-lg">Lorem ipsum dolor sit amet, id has nihil discere vocibus. <br /> No novum cu labor probatus cum, te utamur scripta ei legat cum qui ei sapere quo noster sum periculis ad.</span>
            </div>

            <div className="flex pt-5 ">
              <YellowBtn />
              <div className="text-primary text-md font-semibold ml-4">View more <br /> about our services</div>
            </div>
          </div>
          
        </div>
       }

       {currentIndex === 4 && 
          <div className='flex max-md:flex-col mt-20 animate-left'>

          <div className='mr-10 mt-10'>
            <img src='https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-tabbed-info-5.jpg' alt='' />
          </div>

          <div className="mt-10 grow-0">
            <div className="pb-7 border-b-[1px] border-gray-400">
              <h1 className="text-4xl font-bold pb-5 text-primary">Easy & fast on-spot payment methods</h1>
              <span className="text-dark-grey text-lg">Lorem ipsum dolor sit amet, id has nihil discere vocibus. <br /> No novum cu labor probatus cum, te utamur scripta ei legat cum qui ei sapere quo noster sum periculis ad.</span>
            </div>

            <div className="flex pt-5 ">
              <YellowBtn />
              <div className="text-primary text-md font-semibold ml-4">View more <br /> about our services</div>
            </div>
          </div>
          
        </div>
       }
       {currentIndex === 5 && 
          <div className='flex max-md:flex-col mt-20 animate-left'>

          <div className='mr-10 mt-10'>
            <img src='https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-tabbed-info-6.jpg' alt='' />
          </div>

          <div className="mt-10 grow-0">
            <div className="pb-7 border-b-[1px] border-gray-400">
              <h1 className="text-4xl font-bold pb-5 text-primary">Our fleet covers your needs & pricing range</h1>
              <span className="text-dark-grey text-lg">Lorem ipsum dolor sit amet, id has nihil discere vocibus. <br /> No novum cu labor probatus cum, te utamur scripta ei legat cum qui ei sapere quo noster sum periculis ad.</span>
            </div>

            <div className="flex pt-5 ">
              <YellowBtn />
              <div className="text-primary text-md font-semibold ml-4">View more <br /> about our services</div>
            </div>
          </div>
          
        </div>
       }

      </div>
    </secttion>
  )
}

export default Aboutus

