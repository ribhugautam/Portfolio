"use client";
import { LinkedInProfile } from "@/models/linkedIn-data";
import Timeline from "../components/timeLineItem";
import HeroSection from "../components/heroSection";
import StackSection from "../components/stackSection";
import CompatibleWithSection from "../components/compatibleWithSection";
import useStore from "@/store/linkedInData";
import { useEffect, useState } from "react"

export type LinkedInDataStore = {
  linkedInData: LinkedInProfile;
  setLinkedInData: (data: LinkedInProfile) => void;
};

export default function Home() {
  const { linkedInData, setLinkedInData } = useStore() as LinkedInDataStore;
  const [loading, setLoading] = useState(true);
  const API_KEY = process.env.NEXT_PUBLIC_SECRET_API_KEY;

  useEffect(() => {
    const fetchLinkedInData = async () => {
      try {
        const response = await fetch(
          "https://linkedin-data-api.p.rapidapi.com/?username=ribhugautam",
          {
            method: "GET",
            headers: {
              "x-rapidapi-key": API_KEY ?? "",
              "x-rapidapi-host": "linkedin-data-api.p.rapidapi.com",
            },
          }
        );
        const data = await response.json();
        setLinkedInData(data);
      } catch (error) {
        console.error("Error fetching LinkedIn data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLinkedInData();
  }, [API_KEY, setLinkedInData]);

  if (loading) {
    return (
      <div className="pattern h-dvh">
        <div className="h-dvh flex items-center justify-center">
          <div className="loader"></div>
        </div>
      </div>
    );
  }

  const { fullPositions, summary } = linkedInData;

  return (
    <div className="pattern h-dvh">
      <div className="w-11/12 max-w-[80%] mx-auto font-Caveat">
        {/* Hero */}
        <HeroSection summary={summary} />

        {/* Timeline */}
        <Timeline fullPositions={fullPositions} />

        {/* Skills */}
        <StackSection />

        {/* Cards */}
        <CompatibleWithSection />
      </div>
    </div>
  );
}
