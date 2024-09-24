import { BarLoader } from "react-spinners";

const SplashScreen = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <p className="mb-6 text-body text-gray-450 text-center">
        Gathering your listing data...
      </p>
      <BarLoader
        width={280}
        color="transparent"
        speedMultiplier={0.85}
        className="mx-auto [&>span]:bg-[linear-gradient(90deg,_#1E31CA_0%,_rgba(30,_49,_202,_0.48)_31%,_rgba(30,_49,_202,_0.00)_100%)]"
      />
    </div>
  );
};

export default SplashScreen;
