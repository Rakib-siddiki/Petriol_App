
import supplier1 from '../../assets/images/supplier1.jpg'
import supplier2 from '../../assets/images/supplier2.jpg'
import supplier3 from '../../assets/images/supplier3.jpg'
import supplier4 from '../../assets/images/supplier4.jpg'

const Gallery = () => {
    return (
        <>
            <section className=" max-w-screen mb-[30px]">
                <div className="w-full grid grid-cols-2 md:grid-cols-4 md:gap-5 gap-3 ">
                <img className="" src={supplier1} alt="supplier1" />
                <img className="" src={supplier2} alt="supplier2" />
                <img className="" src={supplier3} alt="supplier3" />
                <img className="" src={supplier4} alt="supplier4" />
                </div>
            </section>
        </>
    )
}

export default Gallery