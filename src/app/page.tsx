/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Footer } from "@/component/Footer";
import { Hero } from "@/component/Hero";
import MatchCard from "@/component/MatchCard";
import { Navbar } from "@/component/Navbar";
import { Pricing } from "@/component/Pricing";
import { WorkUs } from "@/component/WorkUs";
import { Button } from "@/components/ui/button";
import { MatchList } from "@/lib/CricketData";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const matchesToShow = MatchList.slice(0, 6); // Show only first 6 matches

  const handleViewMoreClick = () => {
    router.push("/match-list"); // Redirects to match list page
  };
  return (
    <div className="m-1 p-1">
      <Navbar />
      <Hero />
      <section className="p-5">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {matchesToShow.map((item: any) => (
              <MatchCard key={item._id} match={item} />
            ))}
          </div>
          {MatchList.length > 6 && (
            <div className="mt-6 text-center">
              <Button
                onClick={handleViewMoreClick}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                View More
              </Button>
            </div>
          )}
        </div>
      </section>
      <Pricing />
      <WorkUs />
      <Footer />
    </div>
  );
}
