import BreakingAnimeNews from "./components/BreakingAnimeNews";
import Cosplay from "./components/Cosplay";
import Opiniones from "./components/Opiniones";
import Facebook from "./components/Facebook";
import { getData } from "./services/getData";
export default async function Home() {
  const noticias = await getData("noticias/");
  const cosplay = await getData("cosplay-y-arte/");

  return (
    <main className="flex flex-col justify-between aling-center text-center min-h-screen min-w-full bg-white lg:grid lg:grid-cols-3  ">
      <div className="col-span-2 ">
        <BreakingAnimeNews data={noticias} />
        <Cosplay data={cosplay} />
        <Opiniones />
        <div className="lg:hidden">
          <Facebook />
        </div>
      </div>
      <aside className="hidden lg:block border-2">
        <Facebook />
      </aside>
    </main>
  );
}
