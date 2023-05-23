import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}: any) => {
    return (
        <div>
            <Header/>
                <main className='px-10'>{children}</main>
            <Footer/>
        </div>
    );
};

export default Layout;