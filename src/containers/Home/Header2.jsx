
import YellowBtn from "../../components/YellowBtn"


const Header2 = () => {
  return (
    <section id="header2" >
        <div className="bg-grey flex max-md:flex-col-reverse xs:p-10 sm:padding-lg font-sarabun "> 
            <div className="mt-10 grow-0 border-r-[1px] border-gray-400 ">
                <div className="pb-7 border-b-[1px] border-gray-400">
                    <h1 className="text-4xl font-bold pb-5 text-primary animate-[slideRight_1s_ease-in-out]">Fast and reliable shipping services</h1>
                    <span className="text-dark-grey text-lg">Lorem ipsum dolor sit amet, et sale ad mutat <br/> nusqua ius ea has autem aeterno divine sum.</span>
                </div>

                <div className="flex pt-5 ">
                    <YellowBtn/>
                    <div className="text-primary text-md font-semibold ml-4">View more <br/> about our services</div>
                </div>
            </div>

            <div className="  pl-16 max-md:pl-0 pt-10 overflow-hidden transition-all min-h-[200px] animate-[fade-in-down_1s_ease-in-out] ">
                <img className="" src="https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-img-1.jpg" alt="" />
            </div>
        </div>

    </section>
  )
}

export default Header2