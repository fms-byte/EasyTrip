import requests
import json

def getHotels(place):
    url = "https://google.serper.dev/places"

    payload = json.dumps({
        "q": f"{place} hotel list bangladesh",
        "gl": "bd"
    })
    headers = {
    'X-API-KEY': 'eedc6b3c24e1ecd3d4be0950fb9b85fd567a0096',
    'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)
    print(response.text)
    return response.text