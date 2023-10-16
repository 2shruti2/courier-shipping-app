import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faMinus } from '@fortawesome/free-solid-svg-icons'
import images from '../../constants/images'
import { useState, useEffect } from 'react'
import { hero } from '../../constants/data'

const Header = () => {

  const slides = [images.slide1, images.slide2, images.slide3, images.slide4];

  let [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevCick = () => {
    let isFirstSlide = currentIndex === 0;
    let newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  const handleNextCick = () => {
    let isLastSlide = currentIndex === slides.length - 1
    let newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slidesIndex) => {
    setCurrentIndex(slidesIndex)
  }


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleNextCick();
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);


  return (
    <main className=" ">

      <div className='flex overflow-hidden w-full h-screen md:h-full relative '>
        <div className="w-[100vw] transition  duration-500 ease-in-out h-screen " >
          <img alt='' src={slides[currentIndex]} className=" w-[100%] h-[100%] object-cover" />
        </div>
      </div>

      <div className="absolute max-sm:hidden w-full top-1/2 transform -translate-y-1/2 flex justify-between items-start px-10 cursor-pointer z-10">
        <button className='' onClick={handlePrevCick}><FontAwesomeIcon icon={faAngleLeft} size="2xl" style={{ color: "#ffffff", }} /></button>
        <button className='' onClick={handleNextCick}><FontAwesomeIcon icon={faAngleRight} size="2xl" style={{ color: "#ffffff", }} /></button>
      </div>

      <div className='absolute max-sm:bottom-[10px] bottom-[40px] flex w-full justify-center transition-all ease-in-out duration-300' >
        {slides.map((slides, slidesIndex) => (
          <>
          {currentIndex === slidesIndex ? 
            <FontAwesomeIcon icon={faMinus} key={slidesIndex} style={{color: "#ffdd00",}} size='2xl' className='px-2 cursor-pointer z-10'
            onClick={() => goToSlide(slidesIndex)} />
            : 
            <FontAwesomeIcon icon={faMinus} key={slidesIndex} style={{color: "#ffffff",}} size='2xl' className='px-2 cursor-pointer z-10'
            onClick={() => goToSlide(slidesIndex)} />

          }
          </>          
        ))}
      </div>

      <div className=' grid grid-flow-col max-lg:grid-flow-row absolute top-[40%] max-lg:top-[28%] max-md:top-[30%] max-sm:top-[11%] max-lg:left-[8%] max-md:left-[6%] left-[12%] gap-10'>

        <div className="max-lg:w-[90%] lg:pt-20 animate-left ">
          <img className='w-[400px] ' src='https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/Main-Home-Slider-Logo.png' alt='' />
        </div>

        <div className='text-white font-sarabun items-center w-[90%]  '>

          {hero.map((hero, Index) => (
            <div key={Index} className=' '>
              {currentIndex === Index && 
              <div className='animate-right'>
                <h1 className='text-6xl font-[700] pb-2 '> {hero.h1} </h1>
                <h3 className='text-lg'>{hero.h3}</h3>
              </div>
              }
            </div>
          ))}

        </div>

      </div>

    </main>
  )
}

export default Header