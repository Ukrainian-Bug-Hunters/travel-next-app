import React from 'react';
import LocationSelector from './LocationSelector';
import DatePickerIn from './DatePickerIn';
import DatePickerOut from './DatePickerOut';
import GuestsPicker from './GuestsPicker';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const HeroNavBar : React.FC = () => {
    return (
        <div className='flex absolute w-[75%] top-[20%] left-[12.5%] bg-white rounded-full py-4 pl-9 pr-5 gap-3 justify-around items-center'>
            <LocationSelector/>
            <DatePickerIn/>
            <DatePickerOut/>
            <GuestsPicker/>
            <button type='submit'>
                <SearchOutlinedIcon fontSize='large' className='ml-2 cursor-pointer'/>
            </button>
        </div>
    );
};

export default HeroNavBar;