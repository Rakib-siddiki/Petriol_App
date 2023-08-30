
import partnerLogo1 from '../../assets/images/Logo1.png'
import partnerLogo2 from '../../assets/images/Logo2.png'
import partnerLogo3 from '../../assets/images/Logo3.png'
import partnerLogo4 from '../../assets/images/Logo4.png'

const ConnectWith = () => {
    return (
        <>
            <section className="py-9 sm:py-5 xl:py-[117px]">
                <div className="max-w-container px-2.5 xl:px-0 mx-auto">
                    <div className=" xl:flex xl:justify-between">
                        <img src={partnerLogo1} alt="partner logo" />
                        <img src={partnerLogo2} alt="partner logo" />
                        <img src={partnerLogo3} alt="partner logo" />
                        <img src={partnerLogo4} alt="partner logo" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default ConnectWith