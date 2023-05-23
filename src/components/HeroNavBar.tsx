import React from 'react';
import LocationSelector from './LocationSelector';
import DatePickerIn from './DatePickerIn';
import DatePickerOut from './DatePickerOut';
import GuestsPicker from './GuestsPicker';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const HeroNavBar : React.FC = () => {
    return (
        <div className='flex absolute top-[150px] left-[200px] bg-white rounded-full py-4 pl-9 pr-5 gap-3 items-center'>
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