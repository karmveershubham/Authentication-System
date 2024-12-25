import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold">Welcome to Passport JS + JWT Authentication</h2>
      <h3 className="text-xl font-bold">Frontend</h3>
    </div>
    </>
  );
}
