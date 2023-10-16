import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const Testimonial = () => {
    return (
        <section id="testimonial">
            <div className="bg-man-cycle bg-no-repeat top-0 bg-center relative w-full min-h-screen  bg-cover font-sarabun xs:padding-md sm:padding-lg  text-white">

                <div className='w-[50%] max-md:w-full absolute translate-y-1 '>
                    <div>
                        <FontAwesomeIcon icon={faQuoteLeft} size="2xl" style={{ color: "#ffffff" }} className='w-[80px] h-[70px]' />
                    </div>

                    <div>
                        <h2 className='text-4xl max-md:text-4xl font-bold '>Eos no dico graeci sea, debet nihil omnium quodsi quot dolores percipit.</h2>
                    </div>

                    <div className='flex mt-10'>
                        <div className='flex justify-center items-center'>
                            <img className='w-[100px]   ' src='https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-testimonial-150x150.png' alt='' />
                        </div>

                        <div className='ml-10 mt-5 max-lg:mt-2'>
                            <h6 className='text-md text-sm font-semibold'>Satisfied Client</h6>
                            <h3 className='text-3xl max-lg:text-xl font-bold'>George Moreno</h3>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Testimonial