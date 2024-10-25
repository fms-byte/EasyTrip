"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import TripPlan from "@/components/layout/TripPlan";
import { useSession } from "next-auth/react";

export default function Page() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [tripPlanId, setTripPlanId] = useState(
    searchParams.get("tripPlanId") || "",
  );
  const [tripPlans, setTripPlans] = useState([]);
  const [selectedTripPlan, setSelectedTripPlan] = useState({});
  const [hasSavedTripPlan, setHasSavedTripPlan] = useState(false);

  const { data: session } = useSession();

  // Function to update URL with tripPlanId
  const updateURL = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tripPlanId", tripPlanId);
    router.replace(`${pathname}?${params.toString()}`);
  }, [tripPlanId, pathname]);

  useEffect(() => {
    updateURL();
  }, [updateURL]);

  // Save or retrieve tripPlan from localStorage
  useEffect(() => {
    const saveTripPlan = async () => {
      const tripPlan = localStorage.getItem("tripPlan");
      if (!tripPlan || hasSavedTripPlan) return; // Prevent multiple saves
      setLoading(true);

      try {
        const res = await fetch("/api/trip", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: session?.user?.email, tripPlan }),
        });
        const data = await res.json();

        console.log("Trip plan saved:", data);

        setTripPlans(data.tripPlans);
        if (data.tripPlans.length > 0) {
          localStorage.removeItem("tripPlan");
          setTripPlanId(data.tripPlans[0].id);
          setSelectedTripPlan(data.tripPlans[0]);
          setHasSavedTripPlan(true); // Update the state variable
          alert("Trip plan saved successfully");
        }
      } catch (error) {
        console.error("Error saving trip plan:", error);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.email) {
      saveTripPlan();
    }
  }, [session?.user?.email, hasSavedTripPlan]); // Removed searchParams and pathname

  return (
    <div className="relative flex flex-col p-8 bg-gray-50 min-h-screen">
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">My Trip Plans</h1>

        {loading ? (
          <div className="flex justify-center items-center">
            <div className="loader"></div>
          </div>
        ) : tripPlans?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tripPlans?.map((trip) => (
              <div
                key={trip.id}
                className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-blue-50 transition duration-200 transform hover:scale-105"
                onClick={() => {
                  setTripPlanId(trip.id);
                  setSelectedTripPlan(trip);
                  localStorage.setItem("tripPlan", JSON.stringify(trip?.data));
                  updateURL();
                }}
              >
                {trip?.data?.name}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">
            No trips found. Join a{" "}
            <a href="/public-trip" className="text-blue-600 underline">
              <u>Public Trip</u>
            </a>{" "}
            or{" "}
            <a href="/" className="text-blue-600 underline">
              <u>Create a New Trip</u>
            </a>
          </p>
        )}

        {/* Render TripPlan */}
        {selectedTripPlan && <TripPlan tripPlan={selectedTripPlan} />}
      </div>
    </div>
  );
}
