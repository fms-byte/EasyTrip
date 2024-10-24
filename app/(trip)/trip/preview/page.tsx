'use client';
import React, { useState, useEffect } from 'react';
import { Edit, MapPin, Clock, Users, Calendar, Utensils, Hotel, Navigation, Banknote } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

const TripPreview = () => {
  const [tripData, setTripData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const savedTrip = localStorage.getItem('tripPlan');
    if (savedTrip) {
      setTripData(JSON.parse(savedTrip));
    }
  }, []);

  const handleSave = async () => {
    // Call API to update trip plan
    try {
      const response = await fetch('/api/tripPlan/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editData),
      });
      const updatedData = await response.json();
      setTripData(updatedData);
      localStorage.setItem('tripPlan', JSON.stringify(updatedData));
      setEditMode(false);
    } catch (error) {
      console.error('Error updating trip plan:', error);
    }
  };

  if (!tripData) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Trip Overview Card */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl">Trip Overview</CardTitle>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Trip
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Edit Trip Details</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Trip Name</Label>
                    <Input 
                      defaultValue={tripData.trip_name}
                      onChange={(e) => setEditData({...editData, trip_name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Journey Date</Label>
                    <Input 
                      type="date"
                      defaultValue={tripData.journeyDate}
                      onChange={(e) => setEditData({...editData, journeyDate: e.target.value})}
                    />
                  </div>
                  {/* Add more fields as needed */}
                </div>
                <Button onClick={handleSave}>Save Changes</Button>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">From - To</p>
                <p className="font-medium">{tripData.origin} - {tripData.destination}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-medium">{tripData.days} Days</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">People</p>
                <p className="font-medium">{tripData.people} Travelers</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Banknote className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Total Budget</p>
                <p className="font-medium">{tripData.budget.total}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Budget Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Budget Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(tripData.budget.breakdown).map(([category, amount]) => (
              <div key={category} className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground capitalize">{category}</p>
                <p className="text-lg font-medium">{amount}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Daily Itinerary */}
      <Card>
        <CardHeader>
          <CardTitle>Daily Itinerary</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px]">
            {Array.from({ length: tripData.days }).map((_, dayIndex) => {
              const dayNumber = (dayIndex + 1).toString();
              return (
                <div key={dayIndex} className="mb-8">
                  <h3 className="text-lg font-semibold mb-4">Day {dayNumber}</h3>
                  
                  {/* Food Schedule */}
                  <div className="space-y-4 mb-6">
                    {['breakfast', 'launch', 'dinner'].map((meal) => {
                      const mealData = tripData.food[dayNumber]?.[meal];
                      return mealData ? (
                        <div key={meal} className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                          <Utensils className="h-5 w-5 mt-1" />
                          <div>
                            <p className="font-medium capitalize">{meal}</p>
                            <p className="text-sm">{mealData.title}</p>
                            <p className="text-sm text-muted-foreground">{mealData.address}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>Rating: {mealData.rating}</span>
                              <span>•</span>
                              <span>{mealData.category}</span>
                              <span>•</span>
                              <span>{mealData.phoneNumber}</span>
                              <span>•</span>
                              <span>{mealData.website}</span>
                            </div>
                          </div>
                        </div>
                      ) : null;
                    })}
                  </div>

                  {/* Accommodation */}
                  {tripData.accommodation[dayNumber] && (
                    <div className="p-4 bg-muted rounded-lg">
                      <div className="flex items-start gap-4">
                        <Hotel className="h-5 w-5 mt-1" />
                        <div>
                          <p className="font-medium">Accommodation</p>
                          <p className="text-sm">{tripData.accommodation[dayNumber].title}</p>
                          <p className="text-sm text-muted-foreground">
                            {tripData.accommodation[dayNumber].address}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Rating: {tripData.accommodation[dayNumber].rating}</span>
                            <span>•</span>
                            <span>{tripData.accommodation[dayNumber].category}</span>
                            <span>•</span>
                            <span>{tripData.accommodation[dayNumber].phoneNumber}</span>
                            <span>•</span>
                            <span>{tripData.accommodation[dayNumber].website}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Checkpoints */}
      <Card>
        <CardHeader>
          <CardTitle>Travel Checkpoints</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Departure</TableHead>
                <TableHead>Arrival</TableHead>
                <TableHead>Tips</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tripData.checkpoints.map((checkpoint, index) => (
                <TableRow key={index}>
                  <TableCell>{checkpoint.origin.location}</TableCell>
                  <TableCell>{checkpoint.destination.location}</TableCell>
                  <TableCell>{checkpoint.logistics.departure_time}</TableCell>
                  <TableCell>{checkpoint.logistics.arrival_time}</TableCell>
                  <TableCell>{checkpoint.logistics.tips}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default TripPreview;