import { NextResponse } from 'next/server'
const axios = require('axios');
 
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const placeName = searchParams.get('place') || 'saint martin';

    let data = JSON.stringify({
        "q": `${placeName} hotel list bangladesh`,
        "gl": "bd"
    });

    let config = {
        method: 'post',
        url: 'https://google.serper.dev/places',
        headers: { 
            'X-API-KEY': 'eedc6b3c24e1ecd3d4be0950fb9b85fd567a0096', 
            'Content-Type': 'application/json'
        },
        data: data
    };

    try {
        const response: { data: any } = await axios(config);
        return NextResponse.json(response.data);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// export async function POST(request: Request) {
//   const body = await request.json()
//   return NextResponse.json({ 
//     message: 'Hello, World!',
//     data: body 
//   })
// }



