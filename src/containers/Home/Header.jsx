
const Header = () => {
  return (
    <main className="w-full">
      <div className="flex overflow-hidden h-screen md:h-full relative">
        <img className='w-full h-auto object-cover' src='https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-rev-slide-1-1.jpg' alt='' />
        <img className='w-full h-auto object-cover' src='https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-rev-slide-2.jpg' alt='' />
        <img className='w-full h-auto object-cover' src='https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-rev-slide-3.jpg' alt='' />
        <img className='w-full h-auto object-cover ' src='https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-rev-slide-4.jpg' alt='' />
      </div>


      <div className='grid grid-flow-col max-lg:grid-flow-row absolute top-[40%] max-lg:top-[28%] max-lg:left-[8%] max-md:left-[14%] left-[12%] gap-10'>

        <div className="max-lg:w-[90%] lg:pt-20">
          <img className=' ' src='https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/Main-Home-Slider-Logo.png' alt='' />
        </div>

        <div className='text-white font-sarabun items-center w-[90%]'>
          <h1 className='text-6xl font-[700] pb-2 '>
            Worldwide Shipping and Professional Solutions
          </h1>
          <h3 className='text-lg'> No matter what the location we got your shipping covered! </h3>
        </div>

      </div>


    </main>
  )
}

export default Header