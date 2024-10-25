# BUET CSE FEST 2024 Hackathon

# EasyTrip: AI-Powered Travel Planning Platform
## Documentation

### Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technical Architecture](#technical-architecture)
4. [API Documentation](#api-documentation)
5. [Project Structure](#project-structure)
6. [Security Considerations](#security-considerations)
7. [Future Enhancements](#future-enhancements)

---

## 1. Project Overview

### Introduction
EasyTrip is an AI-powered travel planning platform designed to simplify the trip planning process. By leveraging artificial intelligence, real-time data, and automation, EasyTrip provides a seamless and personalized travel experience for users. The platform offers smart itinerary generation, interactive map integration, weather intelligence, and automated content generation to help users plan, organize, and document their trips. EasyTrip aims to revolutionize the way people travel by providing a comprehensive solution that addresses the pain points of traditional travel planning.

### Problem Statement
Traditional travel planning involves multiple pain points:
- Time-consuming research across multiple platforms
- Difficulty in coordinating transportation and accommodation
- Uncertainty about weather conditions
- Complex budget management
- Manual organization of travel memories

### Solution
EasyTrip addresses these challenges through an integrated platform that leverages artificial intelligence, real-time data, and automation to provide a seamless travel planning experience. By offering smart itinerary generation, interactive map integration, weather intelligence, and automated content generation, EasyTrip simplifies the trip planning process and enhances the overall travel experience for users.

---

## 2. Features

### Core Features

#### 2.1 Smart Itinerary Generation
- Natural language input for Trip generation
- Traditional and AI-powered itinerary generation
- Detailed day-wise itinerary with activities with proper Validation
- Google Search API Integration for fetching real-time data
- Customizable preferences for:
  - Budget range
  - Travel style
  - Duration
  - Accommodation preferences
- Cost breakdown and estimation
- Real-time availability checking
- Accommodation and transportation booking
- Multi-destination trip planning with checkpoints

Workflow:
[![](https://mermaid.ink/img/pako:eNptU8FyokAQ_ZUuctXDxr0sVm2VihgTTdzVXBY9dKCRqcAMNQy6rvrvGWcAcUsO1HTPe69fN83RCUVEjutsJeYJrLz-moN-BsF7QRKmXJGMMaQNdLs_YXic8rxUMCeViOhcYe17eEGcXlGVElOYId-WuCUwhBOMgt8UEtsRVLo6u-m3mXPkpSZWeC-YkIKVZDl4pJClxeam2sj4GQcLKUIqCkuDHUMYLKY11LMgHdl4bGI_8EmFCXioEGIpMpgIsU0JloQyTGqyb8AT7YOTRKU7UexykgfYM5XAZLHqft802hMDf2rarGnRlVcrPxnoNPBYkad4aAkrYcZzVZ0a6PPRDG0QKiZ4UY_92Y5NRCxuaZzgxX46c8FCNJy69IvRmwXveXTTUn0_M_fzxprF_ddDu7zPOKbsH7UNvAZL3N0Rt4wR8pDSE7xdioQo74rPjY9FMBKFgnGhWGb6qJUW5vpXY9PAhpLwMxJ7fpUpyg-71-3lgmpnLMTsyTc7Mp-laQFvGuILmdmV9x6DZfmRsSrXb7EeLaB3Z0VucD27GlWKeNTYUwe9dve8QaytuA_xj7hTKCk-yX3o9XrVubtnkUrcx_yvlnQ6TkYyQxbpn_h40V07KqGM1o6rjxHFWKZq7az5WUOxVGJ54KHjKllSx5Gi3CaOG2Na6Kg0X9tjqIeWNdkc-R8h6vj8BYmFV2Q?type=png)](https://mermaid.live/edit#pako:eNptU8FyokAQ_ZUuctXDxr0sVm2VihgTTdzVXBY9dKCRqcAMNQy6rvrvGWcAcUsO1HTPe69fN83RCUVEjutsJeYJrLz-moN-BsF7QRKmXJGMMaQNdLs_YXic8rxUMCeViOhcYe17eEGcXlGVElOYId-WuCUwhBOMgt8UEtsRVLo6u-m3mXPkpSZWeC-YkIKVZDl4pJClxeam2sj4GQcLKUIqCkuDHUMYLKY11LMgHdl4bGI_8EmFCXioEGIpMpgIsU0JloQyTGqyb8AT7YOTRKU7UexykgfYM5XAZLHqft802hMDf2rarGnRlVcrPxnoNPBYkad4aAkrYcZzVZ0a6PPRDG0QKiZ4UY_92Y5NRCxuaZzgxX46c8FCNJy69IvRmwXveXTTUn0_M_fzxprF_ddDu7zPOKbsH7UNvAZL3N0Rt4wR8pDSE7xdioQo74rPjY9FMBKFgnGhWGb6qJUW5vpXY9PAhpLwMxJ7fpUpyg-71-3lgmpnLMTsyTc7Mp-laQFvGuILmdmV9x6DZfmRsSrXb7EeLaB3Z0VucD27GlWKeNTYUwe9dve8QaytuA_xj7hTKCk-yX3o9XrVubtnkUrcx_yvlnQ6TkYyQxbpn_h40V07KqGM1o6rjxHFWKZq7az5WUOxVGJ54KHjKllSx5Gi3CaOG2Na6Kg0X9tjqIeWNdkc-R8h6vj8BYmFV2Q)

#### 2.2 Interactive Map Integration
- Dynamic route visualization with multiple stops and modes of transport
- Points of interest mapping
- Real-time location updates
- Interactive markers with detailed information
- Distance and travel time calculations

Workflow:
[![](https://mermaid.ink/img/pako:eNptk91u2zAMhV-F0HX7AhkwoI3bJmu9pk3ai8m9IGw6FuZIhn42eHHefYpk2RlWXxgWzyeS8qGOrFQVsQXba-wa2GVfCgn-ueFvhjSspSVdY0kfcH39FW6PIXpTWqHkaURvz9KQq0rUPaytkKRR9wMs-VtXoaU59jHuWIZkWdJz7JIS31nQ73gmTNdiD4_Uw5Mq8VzVJPQuQPfHJMCu78ikpu5DUzuN0nRK2wEe-LZRv2GKwEbMuSL9Ssai84A1A6wiP8c-2bBSllrPriMblhMWwYfQ5Tc-183IomgNbFTnpnOvAvbIL8p9yq0D98Rjqf-QS0PeBfn2lbM0QM7fhXHYij8UQylfHvJ9H896VsD_ydGQSzOeL-YBg_0pxXPQN9yfG5atKH8mYROEl5h7cmns-V_DXwL6OhmeK-3HRtZqbiPOzJZv8RfBskG5p5CEXbED6QOKyg_x8cwWzDZ0oIIt_GdFNbrWFqyQJ4-is2rby5ItrHZ0xbRy-4YtamyNX7kwj5lAfxkOU7RD-UOptD79BSnIBb0?type=png)](https://mermaid.live/edit#pako:eNptk91u2zAMhV-F0HX7AhkwoI3bJmu9pk3ai8m9IGw6FuZIhn42eHHefYpk2RlWXxgWzyeS8qGOrFQVsQXba-wa2GVfCgn-ueFvhjSspSVdY0kfcH39FW6PIXpTWqHkaURvz9KQq0rUPaytkKRR9wMs-VtXoaU59jHuWIZkWdJz7JIS31nQ73gmTNdiD4_Uw5Mq8VzVJPQuQPfHJMCu78ikpu5DUzuN0nRK2wEe-LZRv2GKwEbMuSL9Ssai84A1A6wiP8c-2bBSllrPriMblhMWwYfQ5Tc-183IomgNbFTnpnOvAvbIL8p9yq0D98Rjqf-QS0PeBfn2lbM0QM7fhXHYij8UQylfHvJ9H896VsD_ydGQSzOeL-YBg_0pxXPQN9yfG5atKH8mYROEl5h7cmns-V_DXwL6OhmeK-3HRtZqbiPOzJZv8RfBskG5p5CEXbED6QOKyg_x8cwWzDZ0oIIt_GdFNbrWFqyQJ4-is2rby5ItrHZ0xbRy-4YtamyNX7kwj5lAfxkOU7RD-UOptD79BSnIBb0)

#### 2.3 Weather Intelligence
- Real-time weather updates
- Weather forecast for next 7 days and also for the trip duration
- Weather-based itinerary adjustments
- Severe weather alerts
- Historical weather pattern analysis
- Weather-optimized activity suggestions

Workflow:
[![](https://mermaid.ink/img/pako:eNp9k8GO2jAQhl9l5ENPuy9ApUosATa7LMsSUNU1HEbJQNw6duQ4pYjw7jU2iQiqmoOVGX__ePzbPrFUZ8QGbG-wzGEVfd0ocN-QrysyECtLZocpbeHx8Rs8nXx2mFqh1fmKPl2mmsSisbAyomxgxKcU_iFCSxV8gZlO8SKqtldVGEe-bMQnZNMcvhPa3NV3Imy5yBNj3s4NFzGMUMp-nbGnJnxJKYnf9M9KE89MT-3cSKtM-J7OvVpTv5-RJDQNPPNIVKXEI_hEV3iurdiJsKd2gSBcolANxJ3uEv8HT6w2RQMvHe8TMJRkbJ8c_7GGCoIVFSUZtLWhqoHXTniT78tvj2mY_awrCwuJyoln4ZQjSkV109nMO_V2usI73e27derNF_txaWDO12XmThliK5Rb3xy3PWiuG3jnzmw3XRMchM3h3Yi9UCh9H_02n_3aC57k-nDneUQWhexuUOzJj0B6l--AFw8sAxBsvSNePZEE4ta_Oy6MC0-v-PUN_FL6ICnbF6Q6qz8Cco2WvSjpohCvfLzmY5X17gcsjE6p8ouzB1aQKVBk7omeLroNc14UtGED95vRDmtpN2yjzg7F2urkqFI2sKamB2Z0vc_ZYIeyclHtjykS6J560WVLVJ9at_H5L8nHSOM?type=png)](https://mermaid.live/edit#pako:eNp9k8GO2jAQhl9l5ENPuy9ApUosATa7LMsSUNU1HEbJQNw6duQ4pYjw7jU2iQiqmoOVGX__ePzbPrFUZ8QGbG-wzGEVfd0ocN-QrysyECtLZocpbeHx8Rs8nXx2mFqh1fmKPl2mmsSisbAyomxgxKcU_iFCSxV8gZlO8SKqtldVGEe-bMQnZNMcvhPa3NV3Imy5yBNj3s4NFzGMUMp-nbGnJnxJKYnf9M9KE89MT-3cSKtM-J7OvVpTv5-RJDQNPPNIVKXEI_hEV3iurdiJsKd2gSBcolANxJ3uEv8HT6w2RQMvHe8TMJRkbJ8c_7GGCoIVFSUZtLWhqoHXTniT78tvj2mY_awrCwuJyoln4ZQjSkV109nMO_V2usI73e27derNF_txaWDO12XmThliK5Rb3xy3PWiuG3jnzmw3XRMchM3h3Yi9UCh9H_02n_3aC57k-nDneUQWhexuUOzJj0B6l--AFw8sAxBsvSNePZEE4ta_Oy6MC0-v-PUN_FL6ICnbF6Q6qz8Cco2WvSjpohCvfLzmY5X17gcsjE6p8ouzB1aQKVBk7omeLroNc14UtGED95vRDmtpN2yjzg7F2urkqFI2sKamB2Z0vc_ZYIeyclHtjykS6J560WVLVJ9at_H5L8nHSOM)

#### 2.4 Automated Content Generation
- AI-powered travel blog creation
- Smart photo organization
- Natural language image search
- Automated vlog generation
- Mood-based music integration

Workflow:
[![](https://mermaid.ink/img/pako:eNplU8Fu2zAM_RVB5xa7p8CAJk5St0nqJd1lcg6MTccCbMmT5ABekn8fLdlFvfkgmMR7fI8ideWZzpHP-NlAU7KP6ClVjL5n8dOiYbFyaArI8MgeH7-z-dVnnzMntboP0HDOe8Btj79btI59GNmweaXPN7YQK3RZGVIRODg-fWVsQbVQeSypNa27sWjUpsiyhSYPyh0nagtvZyn26IzEC4bqsZMKDZhuBAfYanDgqyZGF7JCql5oU0PfyLT00nPWIs5JVRYd22kHJ2IsL5Sw3zY68yw70lae8CLW4EoS8CpbrDUZswxUTpJYoEGVoZ1KrT0zFmvsbTsMt_BPwy8BNCHGPvcqEjRWK6jkH8wDOTJQfFJfPexNRNI2FXQB4bS3OHXy5pGbr-O143w3fk7LXLphotswnz7z33gCeCWDqYGwEwe4hGCKI2MZmHyAvYsIKxyvYdJJOLeh7Ulu53OJODhtBqZUfs9OYHHkv3vUD9qXWpMTX5sVRtfs0FmH9VQn8ei9oMn3C-C71QVL2lMlbTlcdU_hD7xG2iKZ0wu69uSU0xLUmPIZ_eZYQFu5lKfqTlBonT50KuMzZ1p84Ea355LPCqgsRW2T0wpEEugl1p_ZBtQvrcf4_hd8VCdD?type=png)](https://mermaid.live/edit#pako:eNplU8Fu2zAM_RVB5xa7p8CAJk5St0nqJd1lcg6MTccCbMmT5ABekn8fLdlFvfkgmMR7fI8ideWZzpHP-NlAU7KP6ClVjL5n8dOiYbFyaArI8MgeH7-z-dVnnzMntboP0HDOe8Btj79btI59GNmweaXPN7YQK3RZGVIRODg-fWVsQbVQeSypNa27sWjUpsiyhSYPyh0nagtvZyn26IzEC4bqsZMKDZhuBAfYanDgqyZGF7JCql5oU0PfyLT00nPWIs5JVRYd22kHJ2IsL5Sw3zY68yw70lae8CLW4EoS8CpbrDUZswxUTpJYoEGVoZ1KrT0zFmvsbTsMt_BPwy8BNCHGPvcqEjRWK6jkH8wDOTJQfFJfPexNRNI2FXQB4bS3OHXy5pGbr-O143w3fk7LXLphotswnz7z33gCeCWDqYGwEwe4hGCKI2MZmHyAvYsIKxyvYdJJOLeh7Ulu53OJODhtBqZUfs9OYHHkv3vUD9qXWpMTX5sVRtfs0FmH9VQn8ei9oMn3C-C71QVL2lMlbTlcdU_hD7xG2iKZ0wu69uSU0xLUmPIZ_eZYQFu5lKfqTlBonT50KuMzZ1p84Ea355LPCqgsRW2T0wpEEugl1p_ZBtQvrcf4_hd8VCdD)

#### 2.5 Image Upload and Textual Search
- Image upload and organization
- Textual search for images embeddings of Batch Size 1536
- Image tagging and categorization
- Image-based activity suggestions

Workflow:
[![](https://mermaid.ink/img/pako:eNplk9tS2zAQhl9lR9fwAmGmMyYmYCAkJKUXlXOx2OtEM7bkkWRoSPLuXcuHpMU3tlbf_nv0QWQmJzERW4v1Dn7GN6kGfiL55shCoj3ZAjPawPX1D7g9BGuUeWW0OzHb0bft7fGtLg3mkFS4JXeEqVxTSZnvDZubS3ZNaLPdyMYy0XXjoTe_NmT3m1F-GoLfyT6ANzBTlt7REay9sSwxiN8FciZbM3XqMCePOXoEpSHmd-t31o6Dx71ckbeKPv53GoTvA_Ygl9Zk5FyXIXwqv4NFTTpKIFomZ9WHgCcy0ljuv2ioa2q4n3_8IJoE6lH2t4WxsOKWfaC-bFrHPgb2ScbK1SXuB8UVuab0ru1JO5ozPwv8s1zYLWr11dfluAmMRuV7U40TeQ7oXAYrzFEzWFGbwzj9UfYpsC_f9qC9ewmT_aXoswt2hMVFuu0qUL8dm388VlQoPfSId2EMtgjBljLKez8Ych8Ell2VfBJXoiJbocp5mQ_tbSr8jutIxYQ_cyqQG5WKVJ8Yxcab9V5nYuJtQ1fCmma7E5MCS8enpubRU6yQf4pqtNaofxsznE9_ASsVCC8?type=png)](https://mermaid.live/edit#pako:eNplk9tS2zAQhl9lR9fwAmGmMyYmYCAkJKUXlXOx2OtEM7bkkWRoSPLuXcuHpMU3tlbf_nv0QWQmJzERW4v1Dn7GN6kGfiL55shCoj3ZAjPawPX1D7g9BGuUeWW0OzHb0bft7fGtLg3mkFS4JXeEqVxTSZnvDZubS3ZNaLPdyMYy0XXjoTe_NmT3m1F-GoLfyT6ANzBTlt7REay9sSwxiN8FciZbM3XqMCePOXoEpSHmd-t31o6Dx71ckbeKPv53GoTvA_Ygl9Zk5FyXIXwqv4NFTTpKIFomZ9WHgCcy0ljuv2ioa2q4n3_8IJoE6lH2t4WxsOKWfaC-bFrHPgb2ScbK1SXuB8UVuab0ru1JO5ozPwv8s1zYLWr11dfluAmMRuV7U40TeQ7oXAYrzFEzWFGbwzj9UfYpsC_f9qC9ewmT_aXoswt2hMVFuu0qUL8dm388VlQoPfSId2EMtgjBljLKez8Ych8Ell2VfBJXoiJbocp5mQ_tbSr8jutIxYQ_cyqQG5WKVJ8Yxcab9V5nYuJtQ1fCmma7E5MCS8enpubRU6yQf4pqtNaofxsznE9_ASsVCC8)
---

## 3. Technical Architecture

### 3.1 Technology Stack
- **Frontend**:
  - Next.js 14 (React Framework)
  - Tailwind CSS (Styling)
  - Shadcn/UI (Component Library)
  - TypeScript

- **Backend**:
  - Python (FastAPI)
  - LangChain
  - PostgreSQL Database + LanceDB
  - Firebase Image Storage
  - Next Auth (Authentication)

- **AI/ML Services**:
  - OpenAI API
  - Custom LangChain Agents

- **External APIs**:
  - Google Maps Platform
  - Weather API (http://api.weatherapi.com/v1/)
  - Cloud Storage (AWS RDS)
  - Google Search API (https://serper.dev/)

### 3.2 System Architecture
- The Next.js frontend acts as the user interface, sending requests to the API Gateway.
- The API Gateway directs requests to backend services for authentication, itineraries, and weather.
- The Authentication Service secures user sessions, while the User Database holds user information.
- The Itinerary Service uses the OpenAI API for trip planning and the Google Maps API for route visualization.
- Firebase Image Storage handles user-uploaded images, with all data stored in PostgreSQL + LanceDB for easy retrieval.

[![](https://mermaid.ink/img/pako:eNp9U1GPmzAM_itWXnfdD-jDpBauLXfl1qmbJi3cgwc-yAkSFMK26rj_PhOgKl01HkjsfJ8_O3beRGoyEkuRW6wL-BomGvhbyaBUpB0s4In-uI-vzTMsFp-6bw1ZiLQji6lTRnewlqtDBFt09BtPzwN7-K89Y4c6K6mBVeuKDgLZrxxYpdjz4Uj2l0ppJAaeEqPGnCle7EhNw8Cmg1B6R4gOf2JD_9GKnNKcoVXEtHs5macrtXtP2lJ_6C5opw428nNNehUBFzdDb8ilBWNjrH0mHWzl1pi8pN7VXOBvJfadkKu3I3MnJ3ue126mFLTW9p0YsR1EZ9ptscBwf5gwFua79CD_9V6pPnjywZqUb5x1hxwf5R51HhSo9Aw3VRRTphi2l34DI13pfJZYLA-mcbml45f9uYHwATh2SuF6mK2jM3bq-iA-DmN8eTzv7Q3A1R1fpvEkN8qS144qHjHoKbzO9P0Jx94nWtyJimyFKuMH8tbHSATHrigRS95m9IJt6RKR6HeGYuvM8aRTsXS2pTthTZsXYvmCZcNWW2c8ZKFCfmjV2Vuj_mHMZL__BTjQK0M?type=png)](https://mermaid.live/edit#pako:eNp9U1GPmzAM_itWXnfdD-jDpBauLXfl1qmbJi3cgwc-yAkSFMK26rj_PhOgKl01HkjsfJ8_O3beRGoyEkuRW6wL-BomGvhbyaBUpB0s4In-uI-vzTMsFp-6bw1ZiLQji6lTRnewlqtDBFt09BtPzwN7-K89Y4c6K6mBVeuKDgLZrxxYpdjz4Uj2l0ppJAaeEqPGnCle7EhNw8Cmg1B6R4gOf2JD_9GKnNKcoVXEtHs5macrtXtP2lJ_6C5opw428nNNehUBFzdDb8ilBWNjrH0mHWzl1pi8pN7VXOBvJfadkKu3I3MnJ3ue126mFLTW9p0YsR1EZ9ptscBwf5gwFua79CD_9V6pPnjywZqUb5x1hxwf5R51HhSo9Aw3VRRTphi2l34DI13pfJZYLA-mcbml45f9uYHwATh2SuF6mK2jM3bq-iA-DmN8eTzv7Q3A1R1fpvEkN8qS144qHjHoKbzO9P0Jx94nWtyJimyFKuMH8tbHSATHrigRS95m9IJt6RKR6HeGYuvM8aRTsXS2pTthTZsXYvmCZcNWW2c8ZKFCfmjV2Vuj_mHMZL__BTjQK0M)

---

## 4. API Documentation

API Documentation for EasyTrip Platform can be seen after starting python-server on the following route: 
- http://localhost:5000/docs

### 4.1 Trip Generation API
#### Generate Itinerary
```http
1. Natural Language Based AI Trip Generation:

ENDPOINT: http://localhost:3000/api/tripPlan/extract?<USER_PROMPT>
Content-Type: application/json
Method: GET

Example:
GET http://localhost:3000/api/tripPlan/extract?text=%22journey+from+dhaka+to+sylhet+with+3+friends+4+days+budget+5k%22

Response:
{
    "output": {
        "origin": "Dhaka",
        "destination": "Sylhet",
        "days": "4",
        "budget": "5000",
        "people": "4",
        "preferences": "",
        "tripType": "oneWay",
        "journeyDate": "today",
        "travelClass": "economy"
    },
    "metadata": {
        "run_id": "3e2d0a89-be92-45ef-8e10-1d64f7bd24ec",
        "feedback_tokens": []
    }
}


2. Manually generate an itinerary based on user preferences:

ENDPOINT: http://localhost:3000/api/tripPlan?<QUERY_PARAMS>
Content-Type: application/json
Method: GET

Example:
GET http://localhost:3000/api/tripPlan?origin=%22dhaka%22&destination=%22sylhet%22&days=%223%22&budget=%222000%22&people=%224%22&preferences=%22hill%22&tripType=%22oneWay%22&journeyDate=%2224/10/2024%22&travelClass=%22economy%22

Response:
{
    "output": {
        "trip_name": "Dhaka to Sylhet 3 days trip with 4 people to enjoy the hill",
        "origin": "Dhaka",
        "destination": "Sylhet",
        "days": "3",
        "budget": {
            "total": "2000",
            "breakdown": {
                "transportation": "800",
                "food": "600",
                "accommodation": "500",
                "miscellaneous": "100"
            }
        },
        "people": "4",
        "preferences": "hill",
        "tripType": "oneWay",
        "journeyDate": "24/10/2024",
        "travelClass": "economy",
        "checkpoints": [
            {
                "origin": {
                    "location": "Dhaka",
                    "latitude": "23.8103",
                    "longitude": "90.4125"
                },
                "destination": {
                    "location": "Sylhet",
                    "latitude": "24.8949",
                    "longitude": "91.8687"
                },
                "logistics": {
                    "departure_time": "06:00 AM",
                    "arrival_time": "12:00 PM",
                    "tips": "Take an early morning bus from Dhaka to Sylhet to enjoy the scenic beauty along the way."
                }
            }
        ],
        "food": {
            "1": {
                "breakfast": {
                    "title": "Panshi Restaurant",
                    "address": "Jallarpar Rd, Sylhet 3100",
                    "latitude": 24.895068799999997,
                    "longitude": 91.8674443,
                    "rating": 4.2,
                    "ratingCount": 18000,
                    "category": "Bangladeshi restaurant",
                    "phoneNumber": "01761-152939",
                    "cid": "4184260984599101480",
                    "cost": "150"
                },
                "launch": {
                    "title": "Pach Bhai Restaurant",
                    "address": "Jallarpar Rd, Sylhet 3100",
                    "latitude": 24.8946981,
                    "longitude": 91.8664029,
                    "rating": 4.3,
                    "ratingCount": 16000,
                    "category": "Bangladeshi restaurant",
                    "phoneNumber": "01710-459607",
                    "cid": "1251724275242512479",
                    "cost": "200"
                },
                "dinner": {
                    "title": "The Mad Grill",
                    "address": "Nayasarak Point, Manik Pir Road, 3100",
                    "latitude": 24.8995748,
                    "longitude": 91.87515789999999,
                    "rating": 4.3,
                    "ratingCount": 2300,
                    "category": "Restaurant",
                    "phoneNumber": "01954-556677",
                    "website": "https://www.facebook.com/themadgrill/",
                    "cid": "9696671651361504064",
                    "cost": "250"
                }
            }
        },
        "accommodation": {
            "1": {
                "title": "The Grand Hotel",
                "address": "4th Floor, H. S. Tower, HS Tower 3rd Floor Waves -1 East, Waves-1 Dargah Gate, Sylhet 3100",
                "latitude": 24.901723,
                "longitude": 91.86977929999999,
                "rating": 4,
                "ratingCount": 564,
                "category": "Hotel",
                "phoneNumber": "01970-793366",
                "cid": "16335710689796874260"
            },
            "2": {
                "title": "Hotel Noorjahan Grand",
                "address": "Waves 1 Dargah Gate, Sylhet 3100",
                "latitude": 24.901979599999997,
                "longitude": 91.8696968,
                "rating": 4.2,
                "ratingCount": 2900,
                "category": "Hotel",
                "phoneNumber": "01930-111666",
                "website": "http://www.noorjahangrand.com/",
                "cid": "15253580246980481310"
            }
        }
    },
    "metadata": {
        "run_id": "6fff0355-b8e0-47c9-9776-40664d30d169",
        "feedback_tokens": []
    }
}
```

#### Update Itinerary
```http
PUT /api/itinerary/:id
Content-Type: application/json

{
  "updates": {
    "accommodation": "luxury",
    "activities": ["scuba-diving"]
  }
}
```

### 4.2 Weather API
```http
GET http://api.weatherapi.com/v1/<QUERY_PARAMS>
```

### 4.3 Google Maps API
```
GET http://maps.googleapis.com/maps/api/directions/json?origin=Dhaka&destination=Sylhet&key=YOUR_API_KEY
```

### 4.4 Image Upload API
```http
POST /api/image
Content-Type: multipart/form-data

{
  "image": "file"
}
```

### 4.5 Image Search API
```http
GET /api/image/search?query=beach
```

---

## 5. Project Structure
```
easytrip/
├── app/                  # Next.js app directory
│   ├── api/             # API routes
│   ├── (auth)/          # Authentication routes
│   └── (dashboard)/     # Protected routes
├── components/          # React components
│   ├── ui/             # UI components
│   └── features/       # Feature components
├── lib/                # Shared utilities
│   ├── utils/         # Helper functions
│   └── api/           # API clients
├── python-server/      # FastAPI backend
│   ├── routes/        # API endpoints
│   ├── services/      # Business logic
│   └── models/        # Data models
└── public/            # Static assets
```
---

## 6. Security Considerations

### 6.1 Authentication
- JWT-based authentication
- Role-based access control
- Session 
- Next Auth

### 6.2 Data Protection
- API key security
- Data encryption
- Secure data storage
- Firebase Storage
- AWS RDS

---

## 7. Future Enhancements

### 7.1 Planned Features
- Budget tracking
- Social sharing
- Mobile applications
- Offline support

## Contributors
- **Md Farhan Masud Shohag** - [GitHub](https://github.com/fms-byte)
- **Jahangir Hossain** - [GitHub](https://github.com/jhm69)
- **Muammar Tazwar Asfi** - [GitHub](https://github.com/asfi50)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.