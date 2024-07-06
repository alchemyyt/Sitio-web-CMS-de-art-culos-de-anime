import Image from "next/image";
import MobileHeader from "./components/MobileHeader";
import AnimeNews from "./components/AnimeNews";
import Cosplay from "./components/Cosplay";
import Comunity from "./components/Community";
import Footer from "./components/Footer";
import { getData } from "./services/getData";
export default async function Home() {
  const noticias = await getData("noticias-anime/");
  const cosplay = await getData("cosplay-y-arte/");

  return (
    <main className="flex flex-col justify-between aling-center text-center min-h-screen min-w-full bg-white">
      <MobileHeader />
      <AnimeNews data={noticias} />
      <Cosplay data={cosplay} />
      <Comunity data={noticias} />
      <Footer/>
    </main>
  );
}
