const DeviceComponent = ({ imageSrc, title, devices }) => {
    const hasSpecialStyle = title === 'Móvil y tablet' || title === 'Ordenadores';

    return (
      <div className="flex flex-col items-center text-center sm:mb-20">
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

export default DeviceComponent