
const Devices = () => {
    const DeviceComponent = ({ imageSrc, title, devices }) => {
        const hasSpecialStyle = title === 'Móvil y tablet' || title === 'Ordenadores';

        return (
          <div className="flex flex-col items-center text-center">
            <div className="h-[200px] w-[400px] flex items-center justify-center">
                <img src={imageSrc} alt="devices" className={` ${hasSpecialStyle ? 'pb-[160px]' : ''} ${title == 'Videoconsolas' && 'pb-[30px]'} `}/>
            </div>
            <h1 className={`text-[28px] font-semibold mb-6 ${hasSpecialStyle ? 'mt-[-70px]' : ''}`}>
              {title}
            </h1>
            <ul>
              {devices.map((device, index) => (
                <li key={index} className={`text-[#c0c0c0] text-[20px] font-light max-w-[510px]`}>
                  {device}
                </li>
              ))}
            </ul>
          </div>
        );
    }

      const deviceData = [
        {
            imageSrc: '/images/devices1.png',
            title: 'TV',
            devices: [
                'Amazon Fire TV',
                'Dispositivos Android TV',
                'Apple TV',
                'Chromecast',
                'Televisores LG',
                'Samsung',
            ],
        },
        {
            imageSrc: '/images/devices2.png',
            title: 'Ordenadores',
            devices: [
                'Chrome OS',
                'MacOS',
                'Windows PC',
            ],
        },
        {
            imageSrc: '/images/devices3.png',
            title: 'Móvil y tablet',
            devices: [
              'Tablets Amazon Fire',
               'Móviles y Tablets Android',
                'iPhone & iPad',
            ],
        },
        {
            imageSrc: '/images/devices4.png',
            title: 'Videoconsolas',
            devices: [
                'PS4',
                'PS5',
                'Xbox One',
                'Xbox Series X',
                'Xbox Series S',
            ],
        },
      ];

      return (
        <section className="flex xl:flex-row md:flex-col justify-center items-center mt-20 mb-[100px]">
          {deviceData.map((data, index) => (
            <DeviceComponent
              key={index}
              imageSrc={data.imageSrc}
              title={data.title}
              devices={data.devices}
            />
          ))}
        </section>
      );
  }
  
  export default Devices