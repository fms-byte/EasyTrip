"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Calendar,
  Users,
  Wallet,
  Clock,
  Utensils,
  Building,
  Edit2,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Utility function for formatting currency
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
  }).format(amount);
};

const TripDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [saveClick, setSaveClick] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [tripData, setTripData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("tripData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setResponseData(parsedData);

      // Update tripData if output exists in responseData
      if (parsedData?.output) {
        setTripData(parsedData); // Set parsed output to tripData
      }
    }
  }, []);

  console.log("ResponseData:", responseData);
  console.log("Trip Data:", tripData);

  const handleEdit = () => {
    setIsEditing(true);
    setShowConfirmation(false);
  };

  const handleSave = () => {
    setIsEditing(false);
    setSaveClick(true);
    // Here you would typically send the updated data to your backend or local storage
    localStorage.setItem("tripData", JSON.stringify(tripData));
  };

  const handleConfirm = () => {
    setShowConfirmation(true);
    // Simulate redirect to confirmation page or trigger any navigation
    // window.location.href = '/confirmation';
  };

  const handleInputChange = (section, field, value) => {
    setTripData((prev) => ({
      ...prev,
      output: {
        ...prev?.output,
        [section]: value,
      },
    }));
  };

  // Null checks in case tripData or output isn't yet loaded
  const output = tripData?.output || {};

  // Helper component for editable fields
  const EditableField = ({ label, value, onChange }) => (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full"
      />
    </div>
  );

  // Action Buttons Component
  const ActionButtons = () => (
    <div className="fixed bottom-4 right-4 space-x-4">
      {!isEditing ? (
        <>
          <Button
            onClick={handleEdit}
            className="bg-blue-500 hover:bg-blue-600"
          >
            <Edit2 className="w-4 h-4 mr-2" />
            Modify Trip
          </Button>
          <Button
            onClick={handleConfirm}
            className="bg-green-500 hover:bg-green-600"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Confirm Trip
          </Button>
        </>
      ) : (
        <Button
          onClick={handleSave}
          className="bg-green-500 hover:bg-green-600"
        >
          Save Changes
        </Button>
      )}
    </div>
  );

  // Confirmation Alert
  if (showConfirmation) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle className="w-6 h-6 text-green-500" />
          <AlertDescription>
            Your trip has been confirmed! Redirecting to confirmation page...
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-auto">
      <div className="max-w-4xl mx-auto p-4 space-y-4 pb-20">
        {/* Trip Overview */}
        <Card>
          <CardHeader>
            {isEditing ? (
              <EditableField
                label="Trip Name"
                value={output.trip_name || ""}
                onChange={(value) =>
                  handleInputChange("trip_name", null, value)
                }
              />
            ) : (
              <CardTitle className="text-xl font-bold">
                {output.trip_name}
              </CardTitle>
            )}
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {isEditing ? (
                <>
                  <EditableField
                    label="Origin"
                    value={output.origin || ""}
                    onChange={(value) =>
                      handleInputChange("origin", null, value)
                    }
                  />
                  <EditableField
                    label="Destination"
                    value={output.destination || ""}
                    onChange={(value) =>
                      handleInputChange("destination", null, value)
                    }
                  />
                  <EditableField
                    label="Journey Date"
                    value={output.journeyDate || ""}
                    onChange={(value) =>
                      handleInputChange("journeyDate", null, value)
                    }
                  />
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <MapPin className="text-blue-500" />
                    <span>
                      {output.origin} → {output.destination}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="text-blue-500" />
                    <span>{output.journeyDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="text-blue-500" />
                    <span>{output.people} People</span>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Budget Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              <div className="flex items-center gap-2">
                <Wallet className="text-green-500" />
                Budget Breakdown
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(output?.budget?.breakdown || {}).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className="text-center p-2 bg-gray-50 rounded-lg"
                  >
                    <div className="font-medium capitalize">{key}</div>
                    {isEditing ? (
                      <Input
                        type="number"
                        value={value}
                        onChange={(e) => {
                          const newBreakdown = {
                            ...output.budget.breakdown,
                            [key]: parseInt(e.target.value),
                          };
                          setTripData((prev) => ({
                            ...prev,
                            output: {
                              ...prev.output,
                              budget: {
                                ...prev.output.budget,
                                breakdown: newBreakdown,
                                total: Object.values(newBreakdown).reduce(
                                  (a, b) => a + b,
                                  0,
                                ),
                              },
                            },
                          }));
                        }}
                        className="mt-2"
                      />
                    ) : (
                      <div className="text-lg font-bold text-green-600">
                        {formatCurrency(value)}
                      </div>
                    )}
                  </div>
                ),
              )}
            </div>
            <div className="mt-4 text-center font-bold text-xl">
              Total: {formatCurrency(output?.budget?.total || 0)}
            </div>
          </CardContent>
        </Card>

        {/* Journey Details */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              <div className="flex items-center gap-2">
                <Clock className="text-purple-500" />
                Journey Details
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {isEditing ? (
                <div className="space-y-4">
                  <EditableField
                    label="Departure Time"
                    value={output.checkpoints[0].logistics.departure_time}
                    onChange={(value) => {
                      const newCheckpoints = [...output.checkpoints];
                      newCheckpoints[0].logistics.departure_time = value;
                      handleInputChange("checkpoints", null, newCheckpoints);
                    }}
                  />
                  <EditableField
                    label="Arrival Time"
                    value={output.checkpoints[0].logistics.arrival_time}
                    onChange={(value) => {
                      const newCheckpoints = [...output.checkpoints];
                      newCheckpoints[0].logistics.arrival_time = value;
                      handleInputChange("checkpoints", null, newCheckpoints);
                    }}
                  />
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  {output?.checkpoints?.length > 0 ? (
                    <>
                      <span>
                        Departure:{" "}
                        {output.checkpoints[0].logistics.departure_time}
                      </span>
                      <span>
                        Arrival: {output.checkpoints[0].logistics.arrival_time}
                      </span>
                    </>
                  ) : (
                    <span>No checkpoints available</span>
                  )}
                </div>
              )}
              <div className="bg-blue-50 p-3 rounded-lg mt-2">
                {isEditing ? (
                  <EditableField
                    label="Travel Tips"
                    value={output.checkpoints[0].logistics.tips}
                    onChange={(value) => {
                      const newCheckpoints = [...output.checkpoints];
                      newCheckpoints[0].logistics.tips = value;
                      handleInputChange("checkpoints", null, newCheckpoints);
                    }}
                  />
                ) : (
                  <>
                    {output?.checkpoints?.length > 0 ? (
                      <p className="text-sm italic">
                        {output.checkpoints[0].logistics.tips}
                      </p>
                    ) : (
                      <span>No checkpoints available</span>
                    )}
                  </>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Food Plan */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              <div className="flex items-center gap-2">
                <Utensils className="text-orange-500" />
                Food Plan
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {output?.food?.[1] ? (
                Object.entries(output.food[1]).map(([meal, details]) => (
                  <div key={meal} className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium capitalize">{meal}</div>
                    {isEditing ? (
                      <div className="space-y-2 mt-2">
                        <Input
                          value={details.name}
                          onChange={(e) => {
                            const newFood = { ...output.food };
                            newFood[1][
                              meal as "breakfast" | "launch" | "dinner"
                            ].name = e.target.value;
                            handleInputChange("food", null, newFood);
                          }}
                          placeholder="Restaurant Name"
                        />
                        <Input
                          value={details.type}
                          onChange={(e) => {
                            const newFood = { ...output.food };
                            newFood[1][
                              meal as "breakfast" | "launch" | "dinner"
                            ].type = e.target.value;
                            handleInputChange("food", null, newFood);
                          }}
                          placeholder="Cuisine Type"
                        />
                        <Input
                          type="number"
                          value={details.cost}
                          onChange={(e) => {
                            const newFood = { ...output.food };
                            newFood[1][
                              meal as "breakfast" | "launch" | "dinner"
                            ].cost = parseInt(e.target.value);
                            handleInputChange("food", null, newFood);
                          }}
                          placeholder="Cost"
                        />
                      </div>
                    ) : (
                      <>
                        <div>{details.name}</div>
                        <div className="text-sm text-gray-600">
                          {details.type}
                        </div>
                        <div className="font-bold text-orange-600">
                          {formatCurrency(details.cost)}
                        </div>
                      </>
                    )}
                  </div>
                ))
              ) : (
                <div>No food plan available</div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Accommodation */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              <div className="flex items-center gap-2">
                <Building className="text-indigo-500" />
                Accommodation
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {output?.accommodation ? (
                Object.entries(output.accommodation).map(([day, details]) => (
                  <div key={day} className="bg-gray-50 p-3 rounded-lg">
                    <div className="font-medium">Day {day}</div>
                    {isEditing ? (
                      <div className="space-y-2 mt-2">
                        <Input
                          value={details.type}
                          onChange={(e) => {
                            const newAccommodation = {
                              ...output.accommodation,
                            };
                            newAccommodation[
                              day as keyof typeof output.accommodation
                            ].type = e.target.value;
                            handleInputChange(
                              "accommodation",
                              null,
                              newAccommodation,
                            );
                          }}
                          placeholder="Hotel Type"
                        />
                        <Input
                          value={details.location}
                          onChange={(e) => {
                            const newAccommodation = {
                              ...output.accommodation,
                            };
                            newAccommodation[
                              day as keyof typeof output.accommodation
                            ].location = e.target.value;
                            handleInputChange(
                              "accommodation",
                              null,
                              newAccommodation,
                            );
                          }}
                          placeholder="Location"
                        />
                        <Input
                          type="number"
                          value={details.cost_per_night}
                          onChange={(e) => {
                            const newAccommodation = {
                              ...output.accommodation,
                            };
                            newAccommodation[
                              day as keyof typeof output.accommodation
                            ].cost_per_night = parseInt(e.target.value);
                            handleInputChange(
                              "accommodation",
                              null,
                              newAccommodation,
                            );
                          }}
                          placeholder="Cost per Night"
                        />
                      </div>
                    ) : (
                      <div className="flex justify-between items-center mt-2">
                        <div>
                          <div>{details.type}</div>
                          <div className="text-sm text-gray-600">
                            {details.location}
                          </div>
                        </div>
                        <div className="font-bold text-indigo-600">
                          {formatCurrency(details.cost_per_night)}
                        </div>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div>No accommodation information available</div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Cancel Edit Mode Alert */}
        {isEditing && (
          <Card className="bg-yellow-50 border-yellow-200">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <p className="text-yellow-700">
                  You are in edit mode. Click 'Save Changes' to save your
                  modifications or refresh the page to cancel.
                </p>
                <Button
                  onClick={() => setIsEditing(false)}
                  className="bg-yellow-500 hover:bg-yellow-600"
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <ActionButtons />

        {/* Success Message After Save */}
        {!isEditing && saveClick && (
          <div className="sticky top-4 right-4 transition-opacity duration-500 z-10">
            <Alert className="bg-green-50 border-green-200 shadow-lg">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <AlertDescription>Changes saved successfully!</AlertDescription>
            </Alert>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripDetails;
