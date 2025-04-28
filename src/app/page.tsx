import { Hero } from "@/component/Hero";
import MatchCard from "@/component/MatchCard";
import { Navbar } from "@/component/Navbar";
import { MatchList } from "@/lib/CricketData";

export default function Home() {
  return (
    <div className="m-1 p-1">
      <Navbar />
      <Hero />
      <section className="">
        <div className="container">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <h1 className="mb-6 text-4xl font-semibold text-pretty lg:text-5xl">
              Upcoming Match List
            </h1>

            <div className="mt-10 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {MatchList.map((item: any) => (
                <MatchCard key={item._id} match={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
