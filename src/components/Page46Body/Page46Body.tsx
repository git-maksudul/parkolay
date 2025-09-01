import img1 from '../../../public/images/page46/Rectangle.png'
import car1 from '../../../public/images/car1.png'
import car2 from '../../../public/images/car2.png'

const Page46Body = () => {

    return (
        <div className='lg:mx-96'>
            <div className="font-inter lg:flex lg:-ml-[200px] mt-8 lg:mt-0">
                <div className=' w-full mx-auto lg:mt-4 lg:mx-14'>
                    <img className='lg:-mx-26 lg:w-[full] lg:h-[full] lg:max-w-[950px]' src={img1} alt="" />
                </div>

                <div className='flex gap-5 lg:gap-5 lg:grid lg:w-1/8 mt-5 lg:mt-0 lg:mx-[5px]'>
                    <div className="py-2 w-full max-w-md mx-auto space-y-1.5 lg:space-y-0">
                        <h2 className='lg:text-[16px] text-[10px] font-bold'>CONFIGURATION</h2>
                        <div className='flex text-[10px] lg:text-[16px] justify-between mt-1 lg:mt-2'>
                            <p>LIFT WITH TURNTABLE</p>
                            <p>6</p>
                        </div>
                        <div>
                            <hr className='border-[0.5px] border-[#AFABAB] lg:mt-2.5 w-full' />
                        </div>
                        <div className='flex text-[10px] mt-1 lg:text-[16px] justify-between lg:mt-2.5'>
                            <p>ENTRY/EXIT ROOM</p>
                            <p>6</p>
                        </div>
                        <div>
                            <hr className='lg:border-[0.5px] border-[0.24px] border-[#AFABAB] lg:mt-2.5 w-full' />
                        </div>
                        <div className='flex text-[10px] mt-1 lg:text-[16px] justify-between lg:mt-2.5'>
                            <p>SHELVES</p>
                            <p>76</p>
                        </div>
                        <div>
                            <hr className='lg:border-[0.5px] border-[0.24px] border-[#AFABAB] lg:mt-2.5 w-full' />
                        </div>
                        <div className='flex text-[10px] mt-1 lg:text-[16px] justify-between lg:mt-2.5'>
                            <p>3 ROWS</p>
                            <p>16</p>
                        </div>
                        <div>
                            <hr className='lg:border-[0.5px] border-[0.24px] border-[#AFABAB] lg:mt-2.5 w-full' />
                        </div>
                        <div className='flex text-[10px] mt-1 lg:text-[16px] justify-between lg:mt-2.5'>
                            <p>2 ROWS</p>
                            <p>36</p>
                        </div>
                        <div>
                            <hr className='lg:border-[0.5px] border-[0.24px] border-[#AFABAB] lg:mt-2.5 w-full' />
                        </div>
                        <div className='flex text-[10px] mt-1 lg:text-[16px] justify-between lg:mt-2.5'>
                            <p>1 ROWS</p>
                            <p>21</p>
                        </div>
                        <div>
                            <hr className='lg:border-[0.5px] border-[0.24px] border-[#AFABAB] lg:mt-2.5 w-full' />
                        </div>
                        <div className='flex text-[10px] mt-1 lg:text-[16px] justify-between lg:mt-2.5'>
                            <p>BUFFER CAPACITY</p>
                            <p>36</p>
                        </div>
                        <div>
                            <hr className='lg:border-[0.5px] border-[0.24px] border-[#AFABAB] lg:mt-2.5 w-full' />
                        </div>
                    </div>
                    <div className='lg:mt-2 mt-2 lg:mx-0 w-full max-w-md space-y-1.5 lg:space-y-0'>
                        <h2 className='lg:text-[16px] text-[10px] font-bold'>PERFORMANCE*</h2>
                        <div className='flex text-[10px] mt-1 lg:text-[16px] justify-between lg:mt-2'>
                            <p>MINS. EXIT TIME</p>
                            <p>139 s.</p>
                        </div>
                        <div>
                            <hr className='lg:border-[0.5px] border-[0.24px] border-[#AFABAB] lg:mt-2.5 w-full' />
                        </div>
                        <div className='flex text-[10px] mt-1 lg:text-[16px] justify-between lg:mt-2.5'>
                            <p>AVERAGE EXIT TIME</p>
                            <p>160 s.</p>
                        </div>
                        <div>
                            <hr className='lg:border-[0.5px] border-[0.24px] border-[#AFABAB] lg:mt-2.5 w-full' />
                        </div>
                        <div className='flex text-[10px] mt-1 lg:text-[16px] justify-between lg:mt-2.5'>
                            <p>SIMULTANEOUS OPERATION</p>
                            <p>3 cars</p>
                        </div>
                        <div>
                            <hr className='lg:border-[0.5px] border-[0.24px] border-[#AFABAB] lg:mt-2.5 w-full' />
                        </div>
                        <div className='flex text-[10px] mt-1 lg:text-[16px] justify-between lg:mt-2.5'>
                            <p>HOURLY OPERATION</p>
                            <p>68 cars</p>
                        </div>
                        <div>
                            <hr className='lg:border-[0.5px] border-[0.24px] border-[#AFABAB] lg:mt-2.5 w-full' />
                        </div>
                        <div className='flex text-[10px] mt-1 lg:text-[16px] justify-between lg:mt-2.5'>
                            <p>FULL EVACUATION TIME</p>
                            <p>2h. 37mins.</p>
                        </div>
                        <div>
                            <hr className='lg:border-[0.5px] border-[0.24px] border-[#AFABAB] lg:mt-2.5 w-full lg:w-[405px]' />
                        </div>
                        <div><p className='font-black mb-2 lg:mt-2.5 text-[8px] lg:text-base'>*including45 s.usertime</p></div>
                    </div>
                </div>
            </div>
            <div className='mt-9 lg:mt-5 flex justify-center lg:justify-end mx-0 lg:-mx-[253px]'>
                <h2 className='lg:text-[16px] text-[10px] font-bold lg:-mx-34 mx-4'>CAR SIZES</h2>
                <div className='lg:mt-10 mt-6 flex items-center lg:gap-[73px] gap-8 lg:mx-18 -ml-18'>
                    <div>
                        <img className='w-[68px] lg:w-[120px]' src={car1} alt="" />
                        <div className='flex items-baseline gap-1 lg:gap-2 mt-2 lg:mt-3'>
                            <p className='lg:text-[16px] text-[10px]'>H:200 cmx</p>
                            <p className='lg:text-[25px] font-semibold'>87</p>
                        </div>
                    </div>
                    <div className='lg:mt-4'>
                        <img className='w-[68px] lg:w-[120px]' src={car2} alt="" />
                        <div className='flex items-baseline gap-1 lg:gap-2 mt-3 lg:mt-4'>
                            <p className='lg:text-[16px] text-[10px]'>H:160 cmx</p>
                            <p className='lg:text-[25px] font-semibold'>90</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page46Body