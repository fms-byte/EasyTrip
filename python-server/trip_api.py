from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from jsonOutputParser import JSONOutputParser
from langserve import add_routes
import uvicorn

import streamlit as st
from dotenv import load_dotenv
from utility import extract_json
import json
import os
import random
load_dotenv()


app=FastAPI(
    title="Easy Trip API Server",
    version="1.0",
    description="API Server of Easy Trip Planner"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

## Prompt Template
trip_data_extract_prompt=ChatPromptTemplate.from_messages(
   [ ("system","""you are good at extracting data from natural language. your response will be in pure JSON format. Example Response Structure:
        'origin': 'Dhaka',
        'destination': 'Sajek',
        'days': 5,
        'budget': 5000,
        'people': 2,
        'preferences': 'hill',
        'tripType': 'oneWay' | 'roundTrip' | 'multiCity',
        'journeyDate': today Date,
        'travelClass': 'economy' | 'business' | 'luxury',
     """),
     ("user","extract the data from this input: {trip_text}. default value for tripType is oneWay, journeyDate is today, travelClass is economy. all data will be in string. dont use null value for any field,use blank string if not available.")]
)

trip_plan_prompt=ChatPromptTemplate.from_messages(
    [
       ("system", """You are a good trip planner specialized in Bangladeshi trips and provide accurate data. You will provide the response in pure JSON format. Example Response Structure:
            'trip_name': 'Dhaka to Sajek 5 days trip with 2 people to enjoy the hill',
            'origin': 'Dhaka',
            'destination': 'Sajek',
            'days': '5',
            'budget': '5000',
            'people': '2',
            'preferences': 'hill',
            'tripType': 'oneWay',
            'journeyDate': '24/10/2024',
            'travelClass': 'economy',
            'checkpoints': [ 
                'origin': 
                    'location': 'Dhaka',
                    'latitude': '23.8103',
                    'longitude': '90.4125'
                ,
                'destination': 
                    'location': 'Sylhet',
                    'latitude': '24.8949',
                    'longitude': '91.8687'
                ,
                'logistics': 
                    'departure_time': '06:00 AM',
                    'arrival_time': '12:00 PM',
                    'tips': 'Take an early morning bus from Dhaka to Sylhet to enjoy the scenic beauty along the way.'
                
                ,
                
                'origin': 
                    'location': 'Sylhet',
                    'latitude': '24.8949',
                    'longitude': '91.8687'
                ,
                'destination': 
                    'location': 'Sajek',
                    'latitude': '23.3814',
                    'longitude': '92.2938'
                ,
                'logistics': 
                    'departure_time': '07:00 AM',
                    'arrival_time': '03:00 PM',
                    'tips': 'Hire a local jeep from Sylhet to Sajek for a thrilling ride through the hills.'
                
                
            ],
            'food': 
                '1': 
                'breakfast':
                            'name': 'BFC',
                            'type': 'Fast Food',
                            'cost': '400'
                        ,
                'launch':
                            'name': 'Local Restaurants',
                            'type': 'Bengali Cuisine',
                            'cost': '250'
                        ,
                'dinner':
                        'name': 'Continental Hotel',
                        'type': 'Chinese Dish',
                        'cost': '550'
                        
                ,
            ,
            'accommodation': 
                '1': 
                'location': 'Sylhet',
                'type': 'Budget hotel',
                'cost_per_night': '800'
                ,
                '2': 
                'location': 'Sajek',
                'type': 'Cottage',
                'cost_per_night': '1000'
                ,
                '3': 
                'location': 'Sajek',
                'type': 'Cottage',
                'cost_per_night': '1000'
                ,
                '4': 
                'location': 'Sylhet',
                'type': 'Budget hotel',
                'cost_per_night': '800'
                
            ,
            'budget': 
                'total': '5100',
                'breakdown': 
                'transportation': '1500',
                'food': '1500',
                'accommodation': '2000',
                'miscellaneous': '100'
            """),
       ("user","create a trip plan for {origin} to {destination} for {days} days with {people} people and budget {budget} taka. preferences are {preferences}. tripType is {tripType} and journeyDate is {journeyDate}. travelClass is {travelClass}. default value for tripType is oneWay, journeyDate is today, travelClass is economy. all values will in string. use blank instead of null")
    ]
)

# openAI LLm 
llm_gpt = ChatOpenAI(
    model="gpt-4o",
    temperature=0,
    max_tokens=None,
    timeout=None,
    max_retries=2,
)
output_parser=StrOutputParser()
json_output_parser=JSONOutputParser()



add_routes(
    app,
    trip_data_extract_prompt|llm_gpt|json_output_parser,
    path="/extract_trip_data",
)

add_routes(
    app,
    trip_plan_prompt|llm_gpt|json_output_parser,
    path="/trip_plan",
)


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)