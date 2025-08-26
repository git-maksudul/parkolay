import arrow from '../../../public/images/Vector.png';
import circle from '../../../public/images/circle.png'

const Header = () => {

    return (
        <div className='justify-around flex pt-[13px] lg:mb-[50px]'>
            <div className='flex items-center lg:mx-36'>
                <div>
                    <img className='lg:w-6 w-[10px] static' src={arrow} alt="" />
                </div>
                <div className='font-inter mx-5'>
                    <h2 className='lg:text-2xl text-xs text-[#383E42]'>ISTANBUL, ACIBADEM : TURKIYE</h2>
                </div>
            </div>

            <div className='flex font-inter gap-2.5 justify-end'>
                <div>
                    <h2 className='font-medium text-[16px] lg:text-[28px]'>435CARS</h2>
                    <h2 className='lg:text-[28px] text-[16px] font-black text-[#A1A1A0] -mt-2'>Ongoing</h2>
                </div>
                <div>
                    <img className='lg:mt-2' src={circle} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header