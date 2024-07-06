import Image from "next/image";
import MobileHeader from "./components/MobileHeader";
import AnimeNews from "./components/AnimeNews";
import Cosplay from "./components/Cosplay";
import { getData } from "./services/getData";
export default async function Home() {
  const noticias = await getData("noticias-anime/");
  const cosplay = await getData("cosplay-y-arte/");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 min-w-full bg-cyan-100">
      <MobileHeader />
      <AnimeNews data={noticias} />
      <Cosplay data={cosplay} />
    </main>
  );
}
