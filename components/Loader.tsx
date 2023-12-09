import Image from "next/image";

const Loader = () => {
  return (
    <div className="fixed h-full w-full bg-white/90 backdrop-blur-sm flex items-center justify-center z-50">
      <Image src={"/loader.gif"} height={100} width={100} alt="loader" />
    </div>
  );
};

export default Loader;
