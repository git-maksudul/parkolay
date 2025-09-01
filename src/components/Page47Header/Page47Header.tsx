import arrow from '../../../public/images/Vector.png';
import circle from '../../../public/images/page46/circle.png'

const Page47Header = () => {

    return (
        <div className='justify-between lg:justify-around flex pt-10 lg:pt-0 lg:mb-[50px]'>
            <div className='flex items-center lg:mx-52 lg:-mt-8 mb-5 lg:mb-0'>
                <div className='lg:w-6 w-[10px]'>
                    <img className='lg:mx-24' src={arrow} alt="" />
                </div>
                <div className='font-inter mx-1 lg:mx-5 lg:ml-28'>
                    <h2 className='lg:text-2xl text-xs text-[#383E42]'>COLOMBO : SRI LANKA</h2>
                </div>
            </div>

            <div className='flex font-inter lg:gap-2.5 justify-end lg:ml-59'>
                <div className='mx-1 lg:mx-0'>
                    <h2 className='font-medium text-[16px] lg:text-[28px]'>177CARS</h2>
                    <h2 className='lg:text-[28px] text-[16px] font-black text-[#A1A1A0] -mt-1 lg:-mt-2 lg:ml-2 ml-1'>Ongoing</h2>
                </div>
                <div className='lg:w-10 w-[18px]'>
                    <img className='lg:mt-1 mt-0.5' src={circle} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Page47Header