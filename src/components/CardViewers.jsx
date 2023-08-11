const CardViewers = () => {
    const cardData = [
      { imageSrc: '/images/card1.png', videoSrc: '/videos/card1.mp4' },
      { imageSrc: '/images/card2.png', videoSrc: '/videos/card2.mp4' },
      { imageSrc: '/images/card3.png', videoSrc: '/videos/card3.mp4' },
      { imageSrc: '/images/card4.png', videoSrc: '/videos/card4.mp4' },
      { imageSrc: '/images/card5.png', videoSrc: '/videos/card5.mp4' },
      { imageSrc: '/images/card6.png', videoSrc: '/videos/card6.mp4' },
    ];
  
    return (
      <section className="mt-[30px] grid py-[30px] pb-[26px] gap-[25px] md:grid-cols-6 md:grid-rows-1 grid-cols-3 grid-rows-2">
        {cardData.map((card, index) => (
          <div key={index} className="sectionCard relative group">
            <img src={card.imageSrc} alt={`logo de disney ${index + 1}`} className="imageCard" />
            <video autoPlay loop playsInline muted className="w-[100%] h-[100%] absolute top-0 z-0 opacity-0 group-hover:opacity-100">
              <source src={card.videoSrc} type="video/mp4" />
            </video>
          </div>
        ))}
      </section>
    );
  };
  
  export default CardViewers;