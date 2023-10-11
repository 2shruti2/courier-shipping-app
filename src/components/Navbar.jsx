import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFlag } from '@fortawesome/free-solid-svg-icons'

import { useEffect, useRef, useState } from 'react'

const Navbar = () => {

  const [isfixed, setIsfixed] = useState(false);

  const navRef = useRef();

  useEffect(() => {

    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY >= 620 ) { setIsfixed(true) }
      else{setIsfixed(false)}
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])


  return (
    <header className={`${isfixed ? 'fixed bg-white text-black border-none' : 'bg-transparent text-white'} w-full justify-between z-[1000] h-[12%] max-md:h-[6%] max-sm:h-[8%] `} ref={navRef} >
      <nav className=" flex w-full justify-between z-[1000] bg-transparent absolute text-center items-center  text-lg
    border-b-[1px] max-md:border-none  border-white-400 font-sarabun font-semibold "  >

          <div className="text-center pt-1 pl-1 shrink-0 nav" >
            {isfixed ?
            (
              <img alt='' src='https://globefarer.qodeinteractive.com/wp-content/themes/globefarer/assets/img/logo.svg' />
            ):
            (
              <img alt='' src='https://globefarer.qodeinteractive.com/wp-content/themes/globefarer/assets/img/logo-light.svg' />
            )
            }
          </div>

          <ul className="flex flex-1 justify-center p-2 mr-2 gap-10 max-lg:hidden ">

            <li className='relative hover-trigger nav-link '>Home

              <ul className=' hover-target absolute top-12 bg-white text-primary p-2 w-[220px] rounded  '>
                <a href='/'><li className='p-2'>Main Home</li></a>
                <a href='/'><li className='p-2'>Cargo Shipping </li></a>
                <a href='/'><li className='p-2'>Maritime Transport</li></a>
                <a href='/'><li className='p-2'>Air Freight</li></a>
                <a href='/'><li className='p-2'>Rail Freight</li></a>
                <a href='/'><li className='p-2'>Coming Soon</li></a>
                <a href='/'><li className='p-2'>Divided Slider Home </li></a>
                <a href='/'><li className='p-2'>Landing</li></a>
              </ul>

            </li>

            <li className='nav-link relative hover-trigger'>Pages

              <ul className=' hover-target absolute top-12 bg-white text-primary p-2 w-[220px] rounded  '>
                <a href='/'><li className='p-2'>Our Team </li></a>
                <a href='/'><li className='p-2'>Coming Soon</li></a>
                <a href='/'><li className='p-2'>Maritime Transport</li></a>
                <a href='/'><li className='p-2'>Air Freight</li></a>
                <a href='/'><li className='p-2'>About us</li></a>
                <a href='/'><li className='p-2'>Divided Slider Home </li></a>
                <a href='/'><li className='p-2'>Rail Freight</li></a>
                <a href='/'><li className='p-2'>Landing</li></a>
              </ul>

            </li>

            <li className='nav-link relative hover-trigger'>Services
              <ul className=' hover-target absolute top-12 bg-white text-primary p-2 w-[220px] rounded  '>
                <a href='/'><li className='p-2'>Maritime Transport</li></a>
                <a href='/'><li className='p-2'>Our Team </li></a>
                <a href='/'><li className='p-2'>About us</li></a>
              </ul>
            </li>

            <li className='nav-link relative hover-trigger'>Blog
              <ul className=' hover-target absolute top-12 bg-white text-primary p-2 w-[220px] rounded  '>
                <a href='/'><li className='p-2'>Air Freight</li></a>
                <a href='/'><li className='p-2'>Maritime Transport</li></a>
                <a href='/'><li className='p-2'>About us</li></a>
                <a href='/'><li className='p-2'>Our Team </li></a>

              </ul>
            </li>
            <li className='nav-link relative hover-trigger'>Contact
              <ul className=' hover-target absolute top-12 bg-white text-primary p-2 w-[220px] rounded  '>
                <a href='/'><li className='p-2'>About us</li></a>
                <a href='/'><li className='p-2'>Our Team </li></a>

              </ul>
            </li>
          </ul>

          <div className='flex flex-start gap-10 justify-end text-center items-center nav '>

            <div className='border-r-[1px] border-l-[1px] border-white-400 flex pr-10 pl-10 max-md:hidden items-center'>
              <FontAwesomeIcon icon={faFlag} className='pr-2' />
              <h2>  Track Your Order  </h2>
            </div>

            <div>
              <FontAwesomeIcon icon={faBars} size="xl" />
            </div>
          </div>

        </nav>
    </header>
  )
}

export default Navbar