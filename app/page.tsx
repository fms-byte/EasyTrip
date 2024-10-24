"use client";
import React, { useEffect, useState } from "react";
import {
  Plane,
  Building2,
  Palmtree,
  FileText,
  ArrowLeftRight,
  ChevronDown,
  Search,
  Menu,
  User,
  Check,
  X,
  Send,
} from "lucide-react";
import { useRouter } from "next/navigation";

// LocationInput Component for Reusability
const LocationInput = ({ label, city, airport, isFrom = true }) => (
  <div className="border border-gray-300 hover:border-purple-500 rounded-lg p-4 transition-all duration-200 cursor-pointer bg-white shadow-md hover:shadow-lg">
    <label className="text-xs font-medium text-gray-600 tracking-wide">
      {label}
    </label>
    <div className="text-lg font-semibold text-gray-900 mt-1">{city}</div>
    <div className="text-sm text-gray-600 flex items-center gap-1">
      <span className="font-medium">{airport.split(",")[0]}</span>
      <span className="text-gray-400">{airport.split(",")[1]}</span>
    </div>
  </div>
);

const Header = () => {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push("/signin");
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <div className="text-2xl font-bold text-purple-800">EasyTrip</div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md cursor-pointer hover:bg-gray-200 transition-all">
            <span className="text-sm font-medium text-gray-800">BDT</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <button
            onClick={handleSignInClick}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-700 transition-all flex items-center gap-2 shadow-lg"
          >
            <User className="w-5 h-5" />
            <span>Sign In</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Homepage() {
  const [selectedTab, setSelectedTab] = useState("flight");
  const [tripType, setTripType] = useState("oneWay");
  const [showForm, setShowForm] = useState(false);
  const [showInputField, setShowInputField] = useState(true);

  // Array of suggestions
  const suggestions = [
    "Inspire me where to go",
    "Create a new Trip",
    "Cheap Flights to Coxs Bazar",
    "Best hikes around me",
    "Family safari",
    "Vacation spots with beaches",
    "Northern lights",
    "Road trip in Dhaka",
  ];

  const [inputText, setInputText] = useState(""); // Holds the user input or auto-typed text
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0); // Tracks which suggestion to show
  const [typingIndex, setTypingIndex] = useState(0); // Tracks the typing progress
  const [isUserTyping, setIsUserTyping] = useState(false); // Flag to detect if the user started typing

  useEffect(() => {
    // If the user is typing, stop the auto-typing effect
    if (isUserTyping) return;

    const currentSuggestion = suggestions[currentSuggestionIndex];

    if (typingIndex < currentSuggestion.length) {
      const timeoutId = setTimeout(() => {
        setInputText((prev) => prev + currentSuggestion[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 100); // Typing speed in milliseconds
      return () => clearTimeout(timeoutId);
    } else {
      // Pause before starting to type the next suggestion
      const pauseTimeout = setTimeout(() => {
        setTypingIndex(0); // Reset typing index
        setCurrentSuggestionIndex(
          (prev) => (prev + 1) % suggestions.length, // Loop through suggestions
        );
        setInputText(""); // Clear the input for the next suggestion
      }, 2000); // Delay between typing suggestions
      return () => clearTimeout(pauseTimeout);
    }
  }, [typingIndex, currentSuggestionIndex, suggestions, isUserTyping]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    setIsUserTyping(true); // Stop the auto-typing when the user types
  };

  const handleClearInput = () => {
    setInputText("");
    setIsUserTyping(false); // Resume auto-typing when the input is cleared
    setTypingIndex(0);
    setCurrentSuggestionIndex(0); // Optionally reset to the first suggestion
  };

  const handleYesClick = () => {
    setShowInputField(false); // Hide the input field and suggestions
    setShowForm(true); // Show the booking form
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-purple-100 to-purple-200">
      <Header />
      <div className="pt-32 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* EasyTrip Intro */}
          <div className="text-center mb-12 space-y-6">
            <div className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-normal">
              Hi, I'm EasyTrip AI, <br /> Your Personal Travel Agent
            </div>

            {/* Conditional rendering for Search Input */}
            {showInputField && (
              <div className="bg-white p-6 rounded-full shadow-md flex items-center justify-center">
                <input
                  type="text"
                  value={inputText}
                  onChange={handleInputChange}
                  placeholder="Ask Anything"
                  className="flex-grow text-xl font-semibold bg-transparent text-gray-700 outline-none px-4"
                />
                <button
                  className="flex font-semibold items-center gap-1 bg-purple-500 text-white px-5 py-3 rounded-full shadow-md hover:bg-purple-600 transition-all"
                  onClick={() => console.log("User prompt:", inputText)}
                >
                  <Send className="w-6 h-6" />
                  Ask Anything
                </button>
              </div>
            )}

            {/* Suggestion Tags */}
            {showInputField && (
              <div className="flex flex-wrap gap-4 justify-center mt-10 text-gray-800">
                {suggestions.map((tag, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-white border rounded-full hover:bg-gray-100 text-sm shadow-lg transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Manual Search Section */}
          <div className="text-center mb-8">
            <div className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
              Want to search manually?
            </div>
            <div className="flex justify-center gap-4 text-gray-700">
              <button
                onClick={handleYesClick}
                className={`px-4 py-2 rounded-full hover:bg-green-100 text-sm flex items-center gap-1 shadow-md transition-all ${
                  showForm
                    ? "bg-green-500 text-white font-semibold hover:bg-green-600"
                    : "bg-white"
                }`}
              >
                <Check
                  className={`w-6 h-6 ${
                    showForm ? "text-white" : "text-green-600"
                  }`}
                />
                Yes
              </button>
              <button
                onClick={() => {
                  setShowForm(false);
                  setShowInputField(true);
                }}
                className="px-4 py-2 bg-white rounded-full hover:bg-red-100 text-sm flex items-center gap-1 shadow-md transition-all"
              >
                <X className="w-6 h-6 text-red-600" />
                No
              </button>
            </div>
          </div>
        </div>

        {/* Conditionally Show the Form with Transition */}
        <div
          className={`transform transition-opacity duration-1000 ${
            showForm
              ? "opacity-100 fade-in-50"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {showForm && (
            <div className="py-4 px-6">
              <div className="max-w-7xl mx-auto">
                {/* Booking Card */}
                <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-5xl mx-auto transition-transform duration-500 ease-in-out transform scale-100">
                  {/* Trip Type Selection */}
                  <div className="flex gap-6 mb-8 justify-center">
                    {["oneWay", "roundWay", "multiCity"].map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <div className="relative w-6 h-6">
                          <input
                            type="radio"
                            name="tripType"
                            checked={tripType === type}
                            onChange={() => setTripType(type)}
                            className="peer absolute opacity-0 w-full h-full cursor-pointer"
                          />
                          <div className="w-6 h-6 rounded-full border-2 border-gray-300 peer-checked:border-purple-600 transition-colors" />
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-600 scale-0 peer-checked:scale-100 transition-transform" />
                        </div>
                        <span className="text-gray-700 font-medium">
                          {type === "oneWay"
                            ? "One Way"
                            : type === "roundWay"
                            ? "Round Trip"
                            : "Multi City"}
                        </span>
                      </label>
                    ))}
                  </div>

                  {/* Search Form */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-2 grid grid-cols-2 gap-6 relative">
                      <LocationInput
                        label="FROM"
                        city="Dhaka"
                        airport="DAC, Hazrat Shahjalal International Airport"
                      />
                      <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-2xl transition-all z-10 group">
                        <ArrowLeftRight className="w-5 h-5 text-purple-600 group-hover:rotate-180 transition-transform duration-300" />
                      </button>
                      <LocationInput
                        label="TO"
                        city="Cox's Bazar"
                        airport="CXB, Cox's Bazar Airport"
                        isFrom={false}
                      />
                    </div>

                    <div className="border border-gray-300 hover:border-purple-500 rounded-lg p-6 transition-all duration-200 cursor-pointer bg-white shadow-md hover:shadow-lg">
                      <label className="text-xs font-medium text-gray-600 tracking-wide">
                        JOURNEY DATE
                      </label>
                      <div className="text-lg font-semibold text-gray-900 mt-1">
                        29 Oct'24
                      </div>
                      <div className="text-sm text-gray-500">Tuesday</div>
                    </div>

                    <div className="border border-gray-300 hover:border-purple-500 rounded-lg p-6 transition-all duration-200 cursor-pointer bg-white shadow-md hover:shadow-lg">
                      <label className="text-xs font-medium text-gray-600 tracking-wide">
                        PASSENGERS & CLASS
                      </label>
                      <div className="text-lg font-semibold text-gray-900 mt-1">
                        1 Adult
                      </div>
                      <div className="text-sm text-gray-500">Economy</div>
                    </div>
                  </div>

                  {/* Search Button */}
                  <div className="mt-10 flex justify-center">
                    <button className="bg-purple-600 text-white px-12 py-4 rounded-lg font-semibold shadow-lg hover:bg-purple-700 transition-all">
                      Search Flights
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
