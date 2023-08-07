import {BsChevronDown} from 'react-icons/bs';

const Hero = () => {
  return (
    <section id='Hero' className="overflow-hidden text-center h-[100vh]">
        { /* Background */ }
        <main className="w-full relative box-border flex flex-col justify-center items-center h-full pt-[340px]">
            <div className="h-full bg-top bg-cover bg-no-repeat absolute top-0 right-0 left-0 z-[-1]" style={{ backgroundImage: 'url("/images/login-bg.jpg")' }}></div>
            { /* Main text */ }
            <h1 className="text-[43px] leading-[54px] font-semibold max-w-[1300px]">
                Contenidos Originales exclusivos, películas de éxito y series para maratonear
            </h1>
            <h2 className="text-[24px] leading-[80px] font-normal">
                Cancela cuando quieras.*
            </h2>
            { /* Button */ }
            <button className="bg-[#0063e5] text-[#fff] text-[18px] leading-[24px] font-light rounded-[4px] w-[360px] h-[60px] px-[24px] py-[20px] mb-10 hover:bg-[#0076e5] transition-all duration-200">
                SUSCRÍBETE YA
            </button>
            { /* secondary text */ }
            <p className=" text-[#c0c0c0] text-[20px] leading-[30px] max-w-[1200px] font-light block">
                Consigue 12 meses por el precio de 10 con una suscripción anual. Ahorro aplicable a suscripciones anuales en comparación con el precio de 12 meses a precio de suscripción mensual.
            </p>
            { /* disclaimer */ }
            <p className="text-[#c0c0c0] text-[12px] leading-[50px] max-w-[1200px] font-normal block">
                *Cancelación con efecto al finalizar el periodo de suscripción mensual o anual en curso. No se realizarán devoluciones o reembolsos parciales. Imprescindible tener una suscripción.
            </p>
            { /* chevron */ }
            <a href="#exclusives" className="absolute bottom-0 left-0 right-0 mb-10">
                <BsChevronDown className="text-[#c0c0c0] text-[26px] mx-auto animate-bounce" />
            </a>
        </main>
    </section>
  )
}

export default Hero