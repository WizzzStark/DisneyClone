

const Info = () => {
    return (
      <section id="info" className="overflow-hidden h-[115vh]">
          <main className="w-full relative box-border flex flex-col items-center mt-20">
              { /* Background */ }
              <div className="h-[90vh] bg-top bg-cover bg-no-repeat absolute top-[130px] right-0 left-0 z-[-1]" style={{ backgroundImage: 'url("/images/info.jpg")', backgroundSize: 'contain' }}></div>
              { /* Main text */ }
              <div className="text-center">
                  <h1 className="text-[44px] font-semibold mb-8">
                    Disfruta como quieras
                  </h1>
                  <h2 className="text-[#c0c0c0] text-[20px] font-light ">
                    Disfruta de las mejores historias, en cualquier momento y en cualquier lugar.
                  </h2>
              </div>
          </main>
      </section>
    )
  }
  
  export default Info