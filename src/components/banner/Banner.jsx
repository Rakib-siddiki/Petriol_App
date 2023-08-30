
const Banner = () => {
  return (
    <>
      <section className=" h-full  bg-bannerImage bg-cover bg-repeat bg-center ">
        <div className="w-full h-full bg-overlay xl:py-44 md:py-20 ">
          <div className="max-w-container mx-auto h-full pt-[18%] sm:pt-14 ">
            <div className="h-full ml-4 md:ml-5 ">
              <h1 className="font-pops text-white font-bold text-[20px]   xl:text-[64px]  md:text-4xl xl:leading-[80px] xl:w-[843px] md:w-96 w-52 xl:mb-[31px] mb-4  md:mx-0">
                We exist since 1975 on the oil and gas industry.
              </h1>
              <div className="">
              <button className="bg-primary hover:bg-transparent duration-500 md:py-3 py-2 px-3 rounded-sm md:rounded-none md:px-8 border-2 border-primary font-pops text-white md:text-base text-[12px] font-semibold mb-6 " >
                Learn More
              </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
