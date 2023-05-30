import HeroNavBar from '~/components/HeroNavBar';
import HeroImg from '../../public/imgs/HeroImgM.jpg';
import Image from 'next/image';


const Hero : React.FC = () => {
    return (
        <div>
            <Image src={HeroImg} alt='HeroImg'/>
            <HeroNavBar/>
        </div>
    );
};

export default Hero;