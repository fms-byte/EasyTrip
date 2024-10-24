import { NextResponse } from 'next/server';
import prisma from "@/prisma/prisma-client";

export async function GET() {
  return NextResponse.json({ message: 'Hello, World!' });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { email, tripPlan } = body;

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  if (tripPlan) {
    // If email is not null and tripPlan is not null:
    // Insert the tripPlan to the database with email and return the tripPlanId
    try {
      const newTripPlan = await prisma.tripPlan.create({
        data: {
          author : {
            connect : {
              email : email
            }
          },
          members : {
            connect : {
              email : email
            }
          },
          data: tripPlan,
        },
      });
      return NextResponse.json({
        message: 'Trip plan saved',
        tripPlanId: newTripPlan.id,
      });
    } catch (error) {
      console.error('Error saving trip plan:', error);
      return NextResponse.json({ error: 'Error saving trip plan' }, { status: 500 });
    }
  } else {
    // If email is not null and tripPlan is null:
    // Return the tripPlanId from the database with email
    try {
      const existingTripPlan = await prisma.tripPlan.findFirst({
        where: { email },
      });

      if (existingTripPlan) {
        return NextResponse.json({
          message: 'Trip plan found',
          tripPlanId: existingTripPlan.id,
        });
      } else {
        // Create a new trip plan if none exists
        const newTripPlan = await prisma.tripPlan.create({
          data: {
            email,
            tripData: {}, // Initialize with empty data if needed
          },
        });
        return NextResponse.json({
          message: 'New trip plan created',
          tripPlanId: newTripPlan.id,
        });
      }
    } catch (error) {
      console.error('Error retrieving trip plan:', error);
      return NextResponse.json({ error: 'Error retrieving trip plan' }, { status: 500 });
    }
  }
}


export async function PUT(request: Request) {
  const body = await request.json();
  const { email, tripPlan, tripPlanId } = body;

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  if (tripPlan) {
    // If email is not null and tripPlan is not null:
    // Insert the tripPlan to the database with email and return the tripPlanId
    try {
      const newTripPlan = await prisma.tripPlan.update({
        where:{
          id : tripPlanId
        },
        data: { 
          members : {
            connect : {
              email : email
            }
          },
          data: tripPlan,
        },
      });
      return NextResponse.json({
        message: 'Trip plan Updated',
        tripPlanId: newTripPlan.id,
      });
    } catch (error) {
      console.error('Error saving trip plan:', error);
      return NextResponse.json({ error: 'Error saving trip plan' }, { status: 500 });
    }
  } else {
    // If email is not null and tripPlan is null:
    // Return the tripPlanId from the database with email
    try {
      const existingTripPlan = await prisma.tripPlan.findFirst({
        where: { email },
      });

      if (existingTripPlan) {
        return NextResponse.json({
          message: 'Trip plan found',
          tripPlanId: existingTripPlan.id,
        });
      } else {
        // Create a new trip plan if none exists
        const newTripPlan = await prisma.tripPlan.create({
          data: {
            email,
            tripData: {}, // Initialize with empty data if needed
          },
        });
        return NextResponse.json({
          message: 'New trip plan created',
          tripPlanId: newTripPlan.id,
        });
      }
    } catch (error) {
      console.error('Error retrieving trip plan:', error);
      return NextResponse.json({ error: 'Error retrieving trip plan' }, { status: 500 });
    }
  }
}
