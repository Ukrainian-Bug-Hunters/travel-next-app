import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <div className='pb-4 fixed bottom-0 w-[100%] bg-white'>
            <hr className='border-slate-300 mb-5'/>
            <div className="flex ml-10 justify-between">
                <div className='flex gap-5'>
                    <p>© 2023 Airbnb, Inc.</p>
                    <a href="https://www.airbnb.com/terms">Terms</a>
                    <a href="https://www.airbnb.com/sitemaps/v2">Sitemap</a>
                    <a href="https://www.airbnb.com/terms/privacy_policy">Privacy</a>
                </div>
                <div className='flex gap-5 mr-10'>
                    <p>$ USD</p>
                    <div className='flex gap-2'>
                        <a href='https://www.facebook.com/' target='_blank'><FacebookIcon/></a>
                        <a href='https://twitter.com/' target='_blank'><TwitterIcon/></a>
                        <a href='https://www.instagram.com/' target='_blank'><InstagramIcon/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;