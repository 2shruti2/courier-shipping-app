
const Team = () => {
    return (
        <section id="team">
            <div className="flex max-md:flex-col-reverse xs:p-10 sm:padding-lg font-sarabun ">
                <div className="mt-10 grow-0 border-r-[1px] border-gray-400 ">
                    <div className="pb-7 border-b-[1px] border-gray-400 pr-2">
                        <h1 className="text-4xl font-bold pb-5 text-primary">Secure courier for <br /> all your packages</h1>
                        <span className="text-dark-grey text-lg">Lorem ipsum dolor sit amet, et sale ad mutat nusqua ius ea has autem aeterno divine sum.</span>
                    </div>

                    <div className="flex pt-5 ">
                        <div className="">
                            <div className="yellow-btn">+</div>
                        </div>
                        <div className="text-primary text-md font-semibold ml-4">View more <br /> about our services</div>
                    </div>
                </div>

                <div className=" pl-16 max-md:pl-0 pt-10 ">
                    <img className="" src="https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-img-2.jpg" alt="" />
                </div>

            </div>

            <div className=" xs:p-10 sm:pl-28 sm:pr-28 text-primary mb-40">
                <h1 className="text-4xl font-bold">Meet the team</h1>

                <div className="flex gap-10 justify-between max-md:flex-col">
                    <div className="flex mt-16  ">
                        <img className="rounded-full w-[100px] h-[100px]" src="https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-team-1-1.png" alt="" />
                        <div className="mt-6 ml-6">
                        <h6 className="text-dark-grey text-md font-semibold">Developer</h6>
                        <h4 className="text-xl font-bold" >Lionel Todd</h4>
                        </div>
                    </div>
                    <div className="flex mt-16  ">
                        <img className="rounded-full w-[100px] h-[100px]" src="https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/team-single-img1.png" alt="" />
                        <div className="mt-6 ml-6">
                        <h6 className="text-dark-grey text-md font-semibold">Copywriter</h6>
                        <h4 className="text-xl font-bold" >Nina West</h4>
                        </div>
                    </div>
                    <div className="flex mt-16  ">
                        <img className="rounded-full w-[100px] h-[100px]" src="https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-team-3-1.png" alt="" />
                        <div className="mt-6 ml-6">
                        <h6 className="text-dark-grey text-md font-semibold">Co Founder</h6>
                        <h4 className="text-xl font-bold" >Scott Moran</h4>
                        </div>
                    </div>
                    <div className="flex mt-16  ">
                        <img className="rounded-full w-[100px] h-[100px]" src="https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-team-4-1.png" alt="" />
                        <div className="mt-6 ml-6">
                        <h6 className="text-dark-grey text-md font-semibold">Web Designer</h6>
                        <h4 className="text-xl font-bold" >Suzie Marsh</h4>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}

export default Team