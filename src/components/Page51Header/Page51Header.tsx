import arrow from '../../../public/images/Vector.png';
import circle from '../../../public/images/page51/circle.png'

const Page51Header = () => {

    return (
        <div className='justify-between lg:justify-around flex pt-[13px] lg:pt-0 lg:mb-[50px]'>
            <div className='flex items-center lg:mx-44 lg:-mt-8'>
                <div className='lg:w-6 w-[10px]'>
                    <img className='lg:mx-24' src={arrow} alt="" />
                </div>
                <div className='font-inter mx-5 lg:ml-28'>
                    <h2 className='lg:text-2xl text-xs text-[#383E42]'>RIYADH : SAUDI ARABIA</h2>
                </div>
            </div>

            <div className='flex font-inter gap-2.5 justify-end lg:ml-24'>
                <div>
                    <h2 className='font-medium text-[16px] lg:text-[28px]'>375CARS</h2>
                    <h2 className='lg:text-[28px] text-[16px] font-black text-[#A1A1A0] -mt-2 ml-2'>Ongoing</h2>
                </div>
                <div className='lg:w-10 w-[18px]'>
                    <img className='mt-1' src={circle} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Page51Header