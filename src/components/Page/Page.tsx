import Page1 from '../Page1/Page1';
import logo from '../../../public/images/logo.png'

const Page = () => {

    return (
        <div>
            <Page1></Page1>
            <div className='flex flex-row justify-between mt-12 lg:mt-5 gap-5'>
                <div>
                    <img className='lg:w-full w-[82px]' src={logo} alt="" />
                </div>
                <div className='flex gap-5 lg:gap-1 lg:mt-5'>
                    <div className='lg:mx-10'>
                        <hr className='lg:border-[0.5px] border-[0.24px] border-[#606568] lg:w-[172px]' />
                        <p className='lg:text-[16px] text-[10px] text-[#606568] mt-0.5 lg:mt-2.5'>info@parkolay.com</p>
                    </div>
                    <div>
                        <hr className='lg:border-[0.5px] border-[0.24px] border-[#606568] lg:w-[172px]' />
                        <p className='lg:text-[16px] text-[10px] text-[#606568] mt-0.5 lg:mt-2'>parkolay.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
