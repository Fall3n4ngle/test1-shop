import noDevicesImage from "@/assets/no-devices.png";

const NoDevices = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={noDevicesImage}
        alt="No devices"
        width={406}
        height={406}
        className="mb-4"
      />
      <h2 className="heading-1 mb-4 leading-[1.36]">No devices</h2>
      <p className="text-[1rem] leading-[1.31]">
        Order a device first and it will show up here.
      </p>
    </div>
  );
};

export default NoDevices;
