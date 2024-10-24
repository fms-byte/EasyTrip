BUET CSE FEST 2024 Hackathon

JSON Data Format: 
{
    "tripType": "oneWay" | "roundTrip" | "multiCity",
    "journeyDate": new Date,
    "travelClass": "economy" | "business" | "luxury",
    "trip_name": "Dhaka to Saint Martin 2 days trip with 1 person to enjoy the island",
    "origin": "Dhaka",
    "destination": "Saint Martin",
    "days": 2,
    "max_budget": 1000,
    "people": 1,
    "preferences": "bus",
    "checkpoints": [
        {
            "origin": {
                "location": "Dhaka",
                "latitude": 23.8103,
                "longitude": 90.4125
            },
            "destination": {
                "location": "Teknaf",
                "latitude": 20.8637,
                "longitude": 92.3018
            },
            "logistics": {
                "departure_time": "10:00 PM",
                "arrival_time": "08:00 AM",
                "tips": "Take an overnight bus from Dhaka to Teknaf to save on accommodation costs."
            }
        },
        {
            "origin": {
                "location": "Teknaf",
                "latitude": 20.8637,
                "longitude": 92.3018
            },
            "destination": {
                "location": "Saint Martin",
                "latitude": 20.6273,
                "longitude": 92.3226
            },
            "logistics": {
                "departure_time": "09:00 AM",
                "arrival_time": "11:00 AM",
                "tips": "Take a local ferry from Teknaf to Saint Martin. Book in advance to ensure availability."
            }
        }
    ],
    "food": {
        "1": {
            "breakfast": {
                "name": "Local Tea Stall",
                "type": "Light Snacks",
                "cost": 50
            },
            "launch": {
                "name": "Local Restaurants",
                "type": "Bengali Cuisine",
                "cost": 150
            },
            "dinner": {
                "name": "Street Food",
                "type": "Seafood",
                "cost": 200
            }
        }
    },
    "accommodation": {
        "1": {
            "location": "Saint Martin",
            "type": "Budget guest house",
            "cost_per_night": 300
        }
    },
    "budget": {
        "total_budget": 1000,
        "breakdown": {
            "transportation": 400,
            "food": 400,
            "accommodation": 300,
            "miscellaneous": 0
        }
    }
}