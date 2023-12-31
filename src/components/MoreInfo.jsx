

const MoreInfo = () => {

    return (
      <section id="moreinfo" className="overflow-hidden md:h-[50vh] sm:h-[120vh]">
            <main className="flex md:flex-row sm:flex-col justify-center items-center">
                <div className="flex flex-col items-center text-center pb-[109px]">
                    <img src="/images/info2.png" alt="info2" className="md:h-[121px] sm:h-[90px] w-[570px] mb-5"/>
                    <h1 className="text-[28px] font-semibold mb-6">
                        Entretenimiento sin límite
                    </h1>
                    <h2 className="text-[#c0c0c0] text-[20px] font-light max-w-[510px]">
                        Explora miles de horas de series, películas y originales.
                    </h2>
                </div>
                <div className="flex flex-col items-center text-center pb-20">
                    <img src="/images/info3.png" alt="info3" className="md:h-[121px] sm:h-[90px] w-[570px] mb-5"/>
                    <h1 className="text-[28px] font-semibold mb-6">
                        Disponible en tus dispositivos favoritos
                    </h1>
                    <h2 className="text-[#c0c0c0] text-[20px] font-light max-w-[510px] ">
                        Disfruta hasta en cuatro pantallas a la vez en dispositivos compatibles.
                    </h2>
                </div>
                <div className="flex flex-col items-center text-center pb-20">
                    <img src="/images/info4.png" alt="info4" className="md:h-[121px] sm:h-[90px] w-[570px] mb-5"/>
                    <h1 className="text-[28px] font-semibold mb-6">
                        Controles parentales fáciles de usar
                    </h1>
                    <h2 className="text-[#c0c0c0] text-[20px] font-light max-w-[510px]">
                        Cuida de tu familia con nuestros intuitivos controles parentales.
                    </h2>
                </div>
            </main>
      </section>
    )
  }
  
  export default MoreInfo