import { useState, useEffect } from 'react'


const NavBar = () => {
    const [showButtons, setShowButtons] = useState(false);

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

  return (
    <nav className={`fixed z-20 ${showButtons && 'bg-[#040714]'} w-full h-[70px] transition-all duration-500`}>
    <div className="flex justify-between mt-3 mr-10">
        <a href="#Hero">
            <img className={`w-[110px] h-[44px] ml-10 transition-all duration-300 ${showButtons ? 'opacity-100' : 'opacity-0'}`} src="/images/navlogo.svg" alt="logo del navbar" />  
        </a>
        <div>
            <button className={`${showButtons ? 'opacity-100' : 'opacity-0'} w-[181px] h-[50px] mr-3 bg-[#0063e5] text-[#f9f9f9] text-[18px] tracking-wide rounded-[5px] hover:bg-[#0076e5] transition-all duration-300`}>
                SUSCRÍBETE YA
            </button>
            <button className='w-[181px] h-[50px] bg-black text-[#f9f9f9] text-[18px] tracking-wide border-white border-[0.5px] rounded-[5px] hover:bg-[#f9f9f9] hover:text-black transition-all duration-300'>
                INICIAR SESIÓN
            </button>
        </div>
    </div>
</nav>
  )
}

export default NavBar