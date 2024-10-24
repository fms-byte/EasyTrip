'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Send, Navigation, MessageSquare, CalendarDays, Users, Banknote } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Alert, AlertDescription } from "@/components/ui/alert";

const TravelPlanner = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    days: '',
    budget: '',
    people: '1',
    preferences: '',
    tripType: 'oneWay',
    journeyDate: '',
    travelClass: 'economy'
  });

  // Natural language query state
  const [nlQuery, setNlQuery] = useState('');
  const [showNlInput, setShowNlInput] = useState(true);

  const handleNaturalLanguageProcess = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/tripPlan/extract?text=${encodeURIComponent(nlQuery)}`);
      const data = await response.json();
      console.log('Natural language query processed:', data);
      setFormData(data.output);
      setShowNlInput(false);
    } catch (error) {
      console.error('Error processing natural language query:', error);
    }
    setLoading(false);
  };

  const generateTripPlan = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams({
        origin: formData.origin,
        destination: formData.destination,
        days: formData.days,
        budget: formData.budget,
        people: formData.people,
        preferences: formData.preferences,
        tripType: formData?.tripType,
        journeyDate: formData.journeyDate,
        travelClass: formData.travelClass
      });

      const response = await fetch(`/api/tripPlan?${queryParams}`);
      const data = await response.json();
      console.log('Trip plan generated:', data.output);
      localStorage.setItem('tripPlan', JSON.stringify(data.output));
      router.push('/trip/preview');
      
    } catch (error) {
      console.error('Error generating trip plan:', error);
    }
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Navigation className="h-6 w-6" />
              Travel Planner
            </CardTitle>
            <Button 
              variant="outline" 
              onClick={() => setShowNlInput(!showNlInput)}
              className="flex items-center gap-2"
            >
              <MessageSquare className="h-4 w-4" />
              Quick Fill with Text
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {showNlInput && (
            <Alert className="mb-6">
              <AlertDescription>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Describe your trip in natural language, e.g., "journey from dhaka to sylhet with 3 friends 4 days budget 5k"
                  </p>
                  <div className="flex gap-2 w-full">
                    <Input
                      value={nlQuery}
                      onChange={(e) => setNlQuery(e.target.value)}
                      placeholder="Describe your trip..."
                      className="flex-grow w-full"
                    />
                    <Button onClick={handleNaturalLanguageProcess} disabled={loading}>
                      <Send className="h-4 w-4 mr-2" />
                      Process
                    </Button>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-6">
            <RadioGroup
              value={formData?.tripType}
              onValueChange={(value) => setFormData({ ...formData, tripType: value })}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="oneWay" id="oneWay" />
                <Label htmlFor="oneWay">One Way</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="roundTrip" id="roundTrip" />
                <Label htmlFor="roundTrip">Round Trip</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="multiCity" id="multiCity" />
                <Label htmlFor="multiCity">Multi City</Label>
              </div>
            </RadioGroup>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Origin</Label>
                <Input
                  value={formData?.origin}
                  onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                  placeholder="Enter origin city"
                />
              </div>

              <div className="space-y-2">
                <Label>Destination</Label>
                <Input
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  placeholder="Enter destination city"
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  Journey Date
                </Label>
                <Input
                  type="date"
                  value={formData.journeyDate}
                  onChange={(e) => setFormData({ ...formData, journeyDate: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  Duration (Days)
                </Label>
                <Input
                  type="number"
                  min="1"
                  value={formData.days}
                  onChange={(e) => setFormData({ ...formData, days: e.target.value })}
                  placeholder="Number of days"
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Number of People
                </Label>
                <Input
                  type="number"
                  min="1"
                  value={formData.people}
                  onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                  placeholder="Number of travelers"
                />
              </div>

              <div className="space-y-2">
                <Label>Travel Class</Label>
                <Select 
                  value={formData.travelClass}
                  onValueChange={(value) => setFormData({ ...formData, travelClass: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="first">First Class</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Banknote className="h-4 w-4" />
                Budget
              </Label>
              <Input
                type="number"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                placeholder="Enter your budget"
              />
            </div>

            <div className="space-y-2">
              <Label>Preferences</Label>
              <Textarea
                value={formData.preferences}
                onChange={(e) => setFormData({ ...formData, preferences: e.target.value })}
                placeholder="Any special preferences? (e.g., hill views, near beach, etc.)"
              />
            </div>

            <Button 
              onClick={generateTripPlan} 
              className="w-full" 
              disabled={loading}
            >
              <Navigation className="h-4 w-4 mr-2" />
              Generate Trip Plan
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TravelPlanner;