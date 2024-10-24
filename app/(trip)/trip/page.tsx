/* eslint-disable import/no-unresolved */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { ScrollArea } from "@/components/ui/scroll-area";
import { trpc } from "@/utils/trpc";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import { addDays, set } from "date-fns";
import { useEffect, useState, useCallback } from "react";

import { DateRange } from "react-day-picker";  
import { Slider } from "@/components/ui/slider";
import { useSearchParams, usePathname, useRouter } from "next/navigation"; 

export default function Page() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

 
  const [tripPlanId, setSelectedOption] = useState(
    searchParams.get("tripPlanId") || ""
  );

  
  const [lat, setLat] = useState(() => {
    try {
      return searchParams.get("lat") || "23.8103";
    } catch (error) {
      console.error("Error parsing latitude parameter:", error);
      return "23.8103";
    }
  });
  
  const [lon, setLon] = useState(() => {
    try {
      return searchParams.get("lon") || "90.4125";
    } catch (error) {
      console.error("Error parsing longitude parameter:", error);
      return "90.4125";
    }
  });

  const [cloud, setCloud] = useState(() => {
    try {
      return parseInt(searchParams.get("cloud") || "20");
    } catch (error) {
      console.error("Error parsing cloud parameter:", error);
      return 20;
    }
  });

  const [loading, setloading] = useState(true);
  
  const [locationError, setLocationError] = useState<string | null>(null);
  const [isFetchingLocation, setIsFetchingLocation] = useState(false);

  const updateURL = useCallback(() => {
    const params = new URLSearchParams(searchParams);
   
    params.set("lat", lat);
    params.set("lon", lon);
    params.set("tripPlanId", tripPlanId);

    router.push(`${pathname}?${params.toString()}`);
  }, [lat, lon, tripPlanId, pathname, searchParams]);

  useEffect(() => {
    updateURL();
  }, [updateURL]);

  // New useEffect to fetch user's geolocation
  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      return;
    }

    setIsFetchingLocation(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLat(latitude.toString());
        setLon(longitude.toString());
        setIsFetchingLocation(false);
      },
      (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError("User denied the request for Geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            setLocationError("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            setLocationError("The request to get user location timed out.");
            break;
          default:
            setLocationError("An unknown error occurred.");
            break;
        }
        setIsFetchingLocation(false);
      }
    );
  }, []);

  

  useEffect(() => { 
    setloading(true);
  }, [lat, lon, tripPlanId]);

  return (
    <div className="relative">
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
         
        {/* Optional: Show location fetching status or errors */}
        <div className="mb-4">
          {isFetchingLocation && (
            <p className="text-gray-500">Fetching your location...</p>
          )}
          {locationError && (
            <p className="text-red-500">Error: {locationError}</p>
          )}
        </div>

        <div className="mt-8">
            {loading && (
              <div>
              <p>Latitude: {lat}</p>
              <p>Longitude: {lon}</p> 
              </div>
            )}
             
        </div>
      </div>
    </div>
  );
}
