import Hero from './Hero';
import Exclusives from './Exclusives';
import Info from './Info';
import MoreInfo from './MoreInfo';
import FAQs from './FAQs';
import Devices from './Devices';


const Login = () => {

    return (
        <main className='md:mx-0 sm:mx-1'>
            <Hero />
            <Exclusives />
            <Info />
            <MoreInfo />
            <FAQs />
            <Devices />
        </main>
    )
};

export default Login;