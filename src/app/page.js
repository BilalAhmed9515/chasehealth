import Image from "next/image";

export default function Home() {
  return (
    <>

    <div style={{ backgroundImage: "url('/images/tratment-chamber.webp')" }} className="h-128 bg-no-repeat bg-center w-full bg-cover flex flex-col justify-end items-center p-5">
    <h1 className="text-white text-4xl font-semibold">Hyperbaric Oxygen Therapy</h1>
    </div>

    </>
  );
}
