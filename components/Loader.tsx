import Image from "next/image";

const Loader = ({ title }: { title?: string }) => {
  return (
    <div className="fixed h-full w-full bg-white/90 backdrop-blur-sm flex items-center justify-center z-50 flex-col">
      <Image src={"/loader.gif"} height={100} width={100} alt="loader" />
      <h1 className="text-xl text-slate-950">{title}</h1>
    </div>
  );
};

export default Loader;
