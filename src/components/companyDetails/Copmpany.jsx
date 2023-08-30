
const Copmpany = () => {
    return (
        <>
            <section className="bg-[#F0F0F0] xl:py-[136px] py-12 ">
        <div className="max-w-container mx-auto">
            <div className="xl:flex grid grid-cols-2">
                <div className="bg-primary py-12 sm:py-20 xl:py-[100px] xl:px-[72px] px-5 inline-block">
                    <h3 className="xl:text-4xl w-52 text-2xl font-bold font-pops xl:w-64 sm:w-40  text-white">Learn more about our company</h3>
                </div>
                <div className="bg-company bg-no-repeat bg-center bg-cover w-full flex items-center justify-center">
                    <button
                        className="font-pops xl:text-base font-semibold text-primary p-2 rounded-sm xl:pt-3.5  xl:pb-[13px]  xl:pl-[30px]  xl:pr-[30px] p bg-white border-2 border-white hover:border-white hover:bg-primary hover:text-white duration-500 ">Learn
                        More</button>
                </div>
            </div>
        </div>
    </section>
        </>
    );
};

export default Copmpany;