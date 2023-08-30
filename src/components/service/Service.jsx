

const Services = () => {
    return (
        <>
            <section className="flex flex-wrap gap-y-2 xl:gap-y-0">
                <div className="max-w-container xl:mx-auto   h-60 pt-7  xl:pt-[104px] xl:h-[390px]">
                    <div className="p-5 xl:p-0">
                    <h3 className="text-[42px] mb-4 xl:mb-0 xl:text-[64px] font-bold font-pops">Our Services</h3>
                    <p className="text-sm xl:text-base font-medium font-pops xl:w-[405px] text-[#6C6C6C] sm:w-[300px] ">It is a long established fact that a
                        reader will be
                        distracted by
                        the readable content of a page
                        when looking at its layout.</p>
                    </div>
                </div>
                <div className="w-full xl:w-2/4 h-60 xl:h-[390px] bg-servicesImage bg-cover bg-repeat bg-center relative">
                    <div className="bg-overlay w-full h-full pl-4 pt-9 pr-1 xl:pr-0 xl:pl-[116px] xl:pt-[147px] absolute top-0 start-0 ">
                        <div className="sm:px-24 sm:py-8" >
                        <h4 className="font-pops text-2xl xl:text-[28px] xl:text-4xl font-bold text-white mb-[19px] sm:w-[20rem]" >Modern natural oil and gas refineries.
                        </h4>
                        <button
                            className="font-pops text-base font-semibold text-white px-5 py-2 xl:pt-3.5 xl:pb-[13px] xl:pl-[30px] xl:pr-[30px] bg-primary border-2 border-primary hover:border-white hover:bg-transparent duration-500  ">Learn
                            More</button>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-2/4 h-60 xl:h-[390px] bg-servicesImage2 bg-cover bg-repeat bg-center relative">
                    <div className="bg-overlay w-full h-full pl-4 pt-9 pr-1 xl:pl-[116px] xl:pt-[147px] absolute top-0 start-0">
                     <div className="sm:px-24 m:py-8">
                     <h4 className="font-pops text-2xl xl:text-[28px] w-64  xl:w-full  xl:text-4xl font-bold text-white mb-[19px] ">Supply of national industries.
                        </h4>
                        <button
                            className="font-pops text-base font-semibold text-white px-5 py-2 xl:pt-3.5 xl:pb-[13px] xl:pl-[30px] xl:pr-[30px] bg-primary border-2 border-primary hover:border-white hover:bg-transparent duration-500 ">Learn
                            More</button>
                     </div>
                    </div>
                </div>
                <div className="w-full xl:w-2/4 h-60 xl:h-[390px] bg-servicesImage3 bg-cover bg-repeat bg-center relative">
                    <div className="bg-overlay w-full h-full pl-4 pt-9 pr-1 xl:pl-[116px] xl:pt-[147px] absolute top-0 start-0">
                        <div className="sm:px-24 m:py-8">
                        <h4 className="font-pops text-2xl xl:text-[28px] xl:text-4xl font-bold text-white mb-[19px] sm:w-[20rem]">National fuel distribution and supply.
                        </h4>
                        <button
                            className="font-pops text-base font-semibold text-white px-5 py-2 xl:pt-3.5 xl:pb-[13px] xl:pl-[30px] xl:pr-[30px] bg-primary border-2 border-primary hover:border-white hover:bg-transparent duration-500 ">Learn
                            More</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services