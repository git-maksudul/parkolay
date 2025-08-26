import img1 from '../../../public/images/Rectangle1.png'
import img2 from '../../../public/images/Rectangle2.png'
import car1 from '../../../public/images/car1.png'
import car2 from '../../../public/images/car2.png'

const Page1 = () => {

    return (
        <div className="font-inter lg:flex lg:gap-[80px]">
            <div className='w-3/5'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
            </div>

            <div className='flex gap-3 lg:grid w-1/5'>
                <div>
                    <h2 className='lg:text-[16px] text-[10px] font-bold'>CONFIGURATION</h2>
                    <div className='flex text-[8px] lg:text-[16px] justify-between lg:mt-2.5'>
                        <p>LIFT WITH TURNTABLE</p>
                        <p>10</p>
                    </div>
                    <div>
                        <hr className='border-[0.5px] border-[#AFABAB] lg:mt-2.5 w-[65px] lg:w-[405px]' />
                    </div>
                    <div className='flex text-[8px] lg:text-[16px] justify-between lg:mt-2.5'>
                        <p>ENTRY/EXIT ROOM</p>
                        <p>10</p>
                    </div>
                    <div>
                        <hr className='border border-[#AFABAB] lg:mt-2.5 w-[65px] lg:w-[405px]' />
                    </div>
                    <div className='flex text-[8px] lg:text-[16px] justify-between lg:mt-2.5'>
                        <p>SHELVES</p>
                        <p>177</p>
                    </div>
                    <div>
                        <hr className='border border-[#AFABAB] lg:mt-2.5 w-[65px] lg:w-[405px]' />
                    </div>
                    <div className='flex text-[8px] lg:text-[16px] justify-between lg:mt-2.5'>
                        <p>4 ROWS</p>
                        <p>70</p>
                    </div>
                    <div>
                        <hr className='border border-[#AFABAB] lg:mt-2.5 w-[65px] lg:w-[405px]' />
                    </div>
                    <div className='flex text-[8px] lg:text-[16px] justify-between lg:mt-2.5'>
                        <p>3 ROWS</p>
                        <p>5</p>
                    </div>
                    <div>
                        <hr className='border border-[#AFABAB] lg:mt-2.5 w-[65px] lg:w-[405px]' />
                    </div>
                    <div className='flex text-[8px] lg:text-[16px] justify-between lg:mt-2.5'>
                        <p>1 ROWS</p>
                        <p>87</p>
                    </div>
                    <div>
                        <hr className='border border-[#AFABAB] lg:mt-2.5 w-[65px] lg:w-[405px]' />
                    </div>
                    <div className='flex text-[8px] lg:text-[16px] justify-between lg:mt-2.5'>
                        <p>BUFFER CAPACITY</p>
                        <p>45</p>
                    </div>
                    <div>
                        <hr className='border border-[#AFABAB] lg:mt-2.5 w-[65px] lg:w-[405px]' />
                    </div>
                </div>
                <div className='lg:mt-10'>
                    <h2 className='lg:text-[16px] text-[10px] font-bold'>PERFORMANCE*</h2>
                    <div className='flex text-[8px] lg:text-[16px] justify-between lg:mt-2.5'>
                        <p>MINS. EXIT TIME</p>
                        <p>90 s.</p>
                    </div>
                    <div>
                        <hr className='border border-[#AFABAB] lg:mt-2.5 w-[65px] lg:w-[405px]' />
                    </div>
                    <div className='flex text-[8px] lg:text-[16px] justify-between lg:mt-2.5'>
                        <p>AVERAGE EXIT TIME</p>
                        <p>135 s.</p>
                    </div>
                    <div>
                        <hr className='border border-[#AFABAB] lg:mt-2.5 w-[65px] lg:w-[405px]' />
                    </div>
                    <div className='flex text-[8px] lg:text-[16px] justify-between lg:mt-2.5'>
                        <p>SIMULTANEOUS OPERATION</p>
                        <p>10 cars</p>
                    </div>
                    <div>
                        <hr className='border border-[#AFABAB] lg:mt-2.5 w-[65px] lg:w-[405px]' />
                    </div>
                    <div className='flex text-[8px] lg:text-[16px] justify-between lg:mt-2.5'>
                        <p>HOURLY OPERATION</p>
                        <p>240 cars</p>
                    </div>
                    <div>
                        <hr className='border border-[#AFABAB] lg:mt-2.5 w-[65px] lg:w-[405px]' />
                    </div>
                    <div className='flex text-[8px] lg:text-[16px] justify-between lg:mt-2.5'>
                        <p>FULL EVACUATION TIME</p>
                        <p>4h. 50mins.</p>
                    </div>
                    <div>
                        <hr className='border border-[#AFABAB] lg:mt-2.5 w-[65px] lg:w-[405px]' />
                    </div>
                    <div><p className='font-black mt-2.5 text-[8px] lg:text-base'>*including45 s.usertime</p></div>
                </div>
                <div className='lg:mt-10 flex lg:grid'>
                    <h2 className='lg:text-[16px] text-[10px] font-bold'>CAR SIZES</h2>
                    <div className='lg:mt-5 lg:flex items-center justify-around'>
                        <div>
                            <img src={car1} alt="" />
                            <div className='flex items-center gap-2'>
                                <p className='lg:text-[16px]'>H:200 cmx</p>
                                <p className='lg:text-[30px] font-semibold'>90</p>
                            </div>
                        </div>
                        <div>
                            <img src={car2} alt="" />
                            <div className='flex items-center gap-2'>
                                <p className='lg:text-[16px]'>H:160 cmx</p>
                                <p className='lg:text-[30px] font-semibold'>348</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page1