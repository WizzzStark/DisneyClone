import { useState, useEffect } from 'react'
import { auth, provider } from '../firebase'
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'
import { Toaster, toast } from 'sonner'

import { useDispatch, useSelector } from 'react-redux'
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../features/user/userSlice'

import { BiSolidHome, BiSearch, BiSolidStar } from 'react-icons/bi'
import {IoMdAdd} from 'react-icons/io'
import {PiFilmReelFill, PiTelevisionSimpleFill} from 'react-icons/pi'


const NavBar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const [showButtons, setShowButtons] = useState(false);

    const handleAuth = () => {
        if(userName) {
            signOut(auth)
                .then(() => {
                    dispatch(setSignOutState());
                    navigate('/');
                }).catch((error) => {
                    console.log(error);
                });
        } else {
        signInWithPopup(auth, provider)
            .then((result) => {
                setUser(result.user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
        });
        }
    };

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }));
    };

    const alert = () => {
        toast.error('Los filtros están deshabilitadas dada la poca cantidad de películas en esta prueba');
    };


    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrollThreshold = 600;
            setShowButtons(scrollY > scrollThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                navigate('/home');
            }
        });
    }, [userName]);

    return (
        <nav className={`fixed z-20 ${showButtons && 'bg-[#040714] pb-2'} w-full transition-all duration-500 ${window.location.pathname === '/home' && 'navbarbg'} ${window.location.pathname === '/home' && 'bg-transparent'}`}>
        <Toaster position="top-center" richColors/>
        <div className="flex justify-between mt-3 mr-7">
            <div className='flex flex-row'>
                <Link to={userName ? "/home" : "#Hero"}>
                    <img className={`w-[110px] h-[44px] md:ml-10 sm:ml-0 transition-all duration-300 ${showButtons ? 'opacity-100' : 'opacity-0'} ${userName && 'opacity-100'}`} src="/images/navlogo.svg" alt="logo del navbar" />  
                </Link>
                {/* Menu if logged in*/}
                {userName && (
                    <div className='flex flex-row items-center font-semibold text-[13px] tracking-wider'>
                        <Link to="/home" className='md:flex flex-row items-center gap-2 sm:hidden'>
                            <BiSolidHome className='w-[17px] h-[17px] rounded-full ml-10 text-underline'/>
                            <span> INICIO </span>
                        </Link>
                        <Link to="/home" className='md:flex flex-row items-center gap-2 sm:hidden' onClick={alert}>
                            <BiSearch className='w-[17px] h-[17px] rounded-full ml-10'/>
                            <h2> BÚSQUEDA </h2>
                        </Link>
                        <Link to="/home" className='md:flex flex-row items-center gap-2 sm:hidden' onClick={alert}>
                            <IoMdAdd className='w-[17px] h-[17px] rounded-full ml-10'/>
                            <h2> MI LISTA </h2>
                        </Link>
                        <Link to="/home" className='md:flex flex-row items-center gap-2 sm:hidden' onClick={alert}>
                            <BiSolidStar className='w-[17px] h-[17px] rounded-full ml-10'/>
                            <h2> ORIGINALES </h2>
                        </Link>
                        <Link to="/home" className='md:flex flex-row items-center gap-2 sm:hidden' onClick={alert}>
                            <PiFilmReelFill className='w-[17px] h-[17px] rounded-full ml-10'/>
                            <h2> PELÍCULAS </h2>
                        </Link>
                        <Link to="/home" className='md_flex flex-row items-center gap-2 sm:hidden' onClick={alert}>
                            <PiTelevisionSimpleFill className='w-[17px] h-[17px] rounded-full ml-10'/>
                            <h2> SERIES </h2>
                        </Link>
                    </div>
                )}
            </div>

            {/* Login buttons or photo*/}
            {
                !userName ? (
                    <div className='flex'>
                        <button 
                            className={`${showButtons ? 'opacity-100' : 'opacity-0'} md:w-[181px] md:h-[50px] sm:w-[120px] mr-3 bg-[#0063e5] text-[#f9f9f9] md:text-[18px] sm:text-[14px] tracking-wide rounded-[5px] hover:bg-[#0076e5] transition-all duration-300`}
                            onClick={() => toast.error('Los pagos no están implementados para mejorar la experiencia de usuario en la navegación, prueba a iniciar sesión')}
                            >
                            SUSCRÍBETE YA
                        </button>
                        <button 
                            className='md:w-[181px] h-[50px] sm:w-[120px] bg-black text-[#f9f9f9] md:text-[18px] sm:text-[14px] tracking-wide border-white border-[0.5px] rounded-[5px] hover:bg-[#f9f9f9] hover:text-black transition-all duration-300'
                            onClick={handleAuth}
                            >
                            INICIAR SESIÓN
                        </button>
                    </div>
                )
                :
                (
                    <div className='flex flex-row items-center'>
                        <h2 className=' text-[14px] text-[#f9f9f9]'>
                            {userName}
                        </h2>
                        <div className='relative group'>
                            <img className={`w-[40px] h-[40px] rounded-full ml-5 transition-all duration-300 `} src={userPhoto} alt="foto de perfil" />
                            <div className='absolute top-[40px] right-0 bg-[#0e0b14] border-[#2c2c2c] border-[1px] rounded-md px-5 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <button onClick={handleAuth} className="whitespace-nowrap">Cerrar sesión</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </nav>
    )
}

export default NavBar