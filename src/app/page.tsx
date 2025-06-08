/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Hero } from "@/component/Hero";
import MatchCard from "@/component/MatchCard";
import { Pricing } from "@/component/Pricing";
import { WorkUs } from "@/component/WorkUs";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  // Show only first 6 matches
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.post(
          "/api/schedule",
          {},
          { headers: { "Content-Type": "application/json" } }
        );
        console.log(response.data);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchMatches();
  }, []);

  const handleViewMoreClick = () => {
    router.push("/match-list"); // Redirects to match list page
  };

  return (
    <div className="m-1 p-1">
      <Hero />
      <section className="p-5">
        <div className="container">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {data.slice(0, 6).map((item: any) => (
              <MatchCard key={item._id} match={item} />
            ))}
          </div>
          {data.length > 6 && (
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
    </div>
  );
}
