import Loader from "@/components/Loader";
import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import { UserAuth } from "@/context/AuthContext";
import { auth } from "@/firebase";

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
