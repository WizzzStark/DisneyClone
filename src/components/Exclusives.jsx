

const Exclusives = () => {
    const isSmallScreen = window.innerWidth < 640
    const imageUrl = isSmallScreen ? '/images/exclusives_sm.jpg' : '/images/exclusives.jpg';

    return (
        <section id="exclusives" className="overflow-hidden md:h-[100vh] sm:h-[50vh] sm:pb-[70px]">
            <main className="w-full relative box-border md:flex md:flex-col sm:visible justify-center items-start h-full">
                { /* Background */ }
                <div className="h-full bg-top bg-cover bg-no-repeat absolute md:top-0 sm:top-[200px] right-0 left-0 z-[-1]" style={{ backgroundImage: `url("${imageUrl}")` }}></div>
                { /* Main text */ }
                <div className="md:ml-[100px] md:mb-40 max-w-[590px] md:text-start sm:text-center">
                    <h1 className="md:text-[44px] sm:text-[30px] font-semibold mb-8">
                        Solo en Disney+
                    </h1>
                    <h2 className="text-[#c0c0c0] text-[20px] max-w-[1200px] font-light block">
                        Películas, series y contenidos Originales exclusivos que no encontrarás en ningún otro servicio de streaming.
                    </h2>
                </div>
            </main>
        </section>
    )
}

export default Exclusives