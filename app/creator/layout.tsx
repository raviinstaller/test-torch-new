import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />
      <div className="ps-20">
        <TopBar />
        <div className="p-6 max-w-[1400px] mx-auto">{children}</div>
      </div>
    </>
  );
}
