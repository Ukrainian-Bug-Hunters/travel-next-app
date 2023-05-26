import { Button } from '@mui/material';

const TryHosting = () => {
  return (
    <div className='try-hosting-bg h-[380px] rounded-2xl flex flex-col justify-center'>
      <div className='pl-24'>
        <h2 className='text-white text-[46px] font-semibold font'>Try hosting</h2>
        <p className='text-white text-[18px] w-[300px] pb-10'>Earn extra income and unlock new opportunities by sharing your space.</p>
        <Button className='bg-white text-black border-black hover:text-white hover:border-white' size='large' variant='outlined' href='/host'>Learn More</Button>
      </div>
    </div>
  );
};

export default TryHosting;