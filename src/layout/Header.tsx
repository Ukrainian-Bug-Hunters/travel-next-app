import Image from 'next/image';
import AirBnbLogo from '../../public/imgs/AirLogo.png'
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MyProperties from '~/components/MyProperties';
import { useState } from 'react';

const Header = () => {
    const [isProperties, setIsProperties] = useState(false);
    return (
        <div className='flex justify-between items-center py-1'>
            <Image src={AirBnbLogo} alt='Logo' className='w-[100px] mx-10 my-2'/>
            <div className='flex gap-3 pr-8 items-center'>
                <p className='cursor-default'>Become a host</p>
                <LanguageIcon className='cursor-pointer'/>
                <div onClick={() => setIsProperties((prev)=>!prev)} className='flex border rounded-full p-1 cursor-pointer'>
                    <MenuIcon/>
                    <AccountCircleIcon/>
                </div>
                {
                    isProperties && (
                        <MyProperties/>
                    )
                }
            </div>
        </div>
    );
};

export default Header;