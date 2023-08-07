

const Exclusives = () => {
  return (
    <section id="exclusives" className="overflow-hidden h-[100vh]">
        <main className="w-full relative box-border flex flex-col justify-center items-start h-full">
            { /* Background */ }
            <div className="h-full bg-top bg-cover bg-no-repeat absolute top-0 right-0 left-0 z-[-1]" style={{ backgroundImage: 'url("/images/exclusives.jpg")' }}></div>
            { /* Main text */ }
            <div className="md:ml-[100px] md:mb-40 max-w-[590px]">
                <h1 className="text-[44px] font-semibold mb-8">
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