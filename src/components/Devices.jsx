import DeviceComponent from "./DeviceComponent";

const Devices = () => {

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
        <section className="flex md:flex-row sm:flex-col justify-center items-center mt-20 mb-[100px]">
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