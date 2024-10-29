# BUET CSE FEST 2024 Hackathon

# EasyTrip: AI-Powered Travel Planning Platform
## Documentation

### Table of Contents
1. [Project Overview](#project-overview)
2. [How to Run](#how-to-run)
3. [Features](#features)
4. [Technical Architecture](#technical-architecture)
5. [API Documentation](#api-documentation)
6. [Project Structure](#project-structure)
 
---
 
## 1. Project Overview

### Hackathon Problem Statement
The Main Problemset of BUET CSE FEST 2024 Hackathon is Given Here: https://docs.google.com/document/d/1ZUuS373rbKFZw3HPlVrvPgzdF4Xw7ktsbiI5TjyNE2s/mobilebasic

The Problems in our understanding:
- Solve Time-consuming research across multiple platforms
- Difficulty in coordinating transportation and accommodation 
- Solve Complex budget management
- Show efficient Maps and Smart Weather Notification
- Solve Manual organization of travel memories
- Problem of Uploading and Sharing Trip Images with Trip mates(Haha RIP Whatsapp)
- Searching Images Fast and Quick using Semantic Search
- Generate Automated Blogs and Vlogs from Trip Information


### Solution
EasyTrip addresses these challenges through an integrated platform that leverages langchain of ai agents, real-time data, and automation to provide a seamless travel planning experience. By offering smart itinerary generation, interactive map integration, weather intelligence, and automated content generation, EasyTrip simplifies the trip planning process and enhances the overall travel experience for users.

### Preview Youtube Video

You can watch a preview of EasyTrip on YouTube:
[![EasyTrip Preview](https://img.youtube.com/vi/OtZJD41Pqx8/0.jpg)](https://www.youtube.com/watch?v=OtZJD41Pqx8)

---


## 2. How To Run:

### Run the Python Backend:
1. Set up API keys in `python-server/.env`.
2. Navigate to the `python-server` directory:
    ```sh
    cd python-server
    ```
3. Install the required dependencies:
    ```sh
    pip install -r requirements.txt
    ```
4. Start the Python backend:
    ```sh
    python trip_api.py
    ```

### Run the Next.js App:
1. Set up `.env` with all credentials and database URLs.
2. Install the required dependencies:
    ```sh
    npm i --force
    ```
3. Apply database migrations:
    ```sh
    npx prisma migrate dev
    ```
4. Generate the Prisma client:
    ```sh
    npx prisma generate
    ```
5. Start the Next.js development server:
    ```sh
    npm run dev
    ```
### Run Using Docker:
Build and start the Docker containers:
    ```sh
    docker-compose build 
    docker-compose up 
    ```

## 3. Features

#### 3.1 Smart Itinerary Generation
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
- Add friends to the Trip

Workflow:
[![](https://mermaid.ink/img/pako:eNptU8FyokAQ_ZUuctXDxr0sVm2VihgTTdzVXBY9dKCRqcAMNQy6rvrvGWcAcUsO1HTPe69fN83RCUVEjutsJeYJrLz-moN-BsF7QRKmXJGMMaQNdLs_YXic8rxUMCeViOhcYe17eEGcXlGVElOYId-WuCUwhBOMgt8UEtsRVLo6u-m3mXPkpSZWeC-YkIKVZDl4pJClxeam2sj4GQcLKUIqCkuDHUMYLKY11LMgHdl4bGI_8EmFCXioEGIpMpgIsU0JloQyTGqyb8AT7YOTRKU7UexykgfYM5XAZLHqft802hMDf2rarGnRlVcrPxnoNPBYkad4aAkrYcZzVZ0a6PPRDG0QKiZ4UY_92Y5NRCxuaZzgxX46c8FCNJy69IvRmwXveXTTUn0_M_fzxprF_ddDu7zPOKbsH7UNvAZL3N0Rt4wR8pDSE7xdioQo74rPjY9FMBKFgnGhWGb6qJUW5vpXY9PAhpLwMxJ7fpUpyg-71-3lgmpnLMTsyTc7Mp-laQFvGuILmdmV9x6DZfmRsSrXb7EeLaB3Z0VucD27GlWKeNTYUwe9dve8QaytuA_xj7hTKCk-yX3o9XrVubtnkUrcx_yvlnQ6TkYyQxbpn_h40V07KqGM1o6rjxHFWKZq7az5WUOxVGJ54KHjKllSx5Gi3CaOG2Na6Kg0X9tjqIeWNdkc-R8h6vj8BYmFV2Q?type=png)](https://mermaid.live/edit#pako:eNptU8FyokAQ_ZUuctXDxr0sVm2VihgTTdzVXBY9dKCRqcAMNQy6rvrvGWcAcUsO1HTPe69fN83RCUVEjutsJeYJrLz-moN-BsF7QRKmXJGMMaQNdLs_YXic8rxUMCeViOhcYe17eEGcXlGVElOYId-WuCUwhBOMgt8UEtsRVLo6u-m3mXPkpSZWeC-YkIKVZDl4pJClxeam2sj4GQcLKUIqCkuDHUMYLKY11LMgHdl4bGI_8EmFCXioEGIpMpgIsU0JloQyTGqyb8AT7YOTRKU7UexykgfYM5XAZLHqft802hMDf2rarGnRlVcrPxnoNPBYkad4aAkrYcZzVZ0a6PPRDG0QKiZ4UY_92Y5NRCxuaZzgxX46c8FCNJy69IvRmwXveXTTUn0_M_fzxprF_ddDu7zPOKbsH7UNvAZL3N0Rt4wR8pDSE7xdioQo74rPjY9FMBKFgnGhWGb6qJUW5vpXY9PAhpLwMxJ7fpUpyg-71-3lgmpnLMTsyTc7Mp-laQFvGuILmdmV9x6DZfmRsSrXb7EeLaB3Z0VucD27GlWKeNTYUwe9dve8QaytuA_xj7hTKCk-yX3o9XrVubtnkUrcx_yvlnQ6TkYyQxbpn_h40V07KqGM1o6rjxHFWKZq7az5WUOxVGJ54KHjKllSx5Gi3CaOG2Na6Kg0X9tjqIeWNdkc-R8h6vj8BYmFV2Q)

#### 3.2 Interactive Map Integration
- Dynamic route visualization with multiple stops and modes of transport
- Points of interest mapping
- Real-time location updates
- Interactive markers with detailed information
- Distance and travel time calculations

Workflow:
[![](https://mermaid.ink/img/pako:eNptk91u2zAMhV-F0HX7AhkwoI3bJmu9pk3ai8m9IGw6FuZIhn42eHHefYpk2RlWXxgWzyeS8qGOrFQVsQXba-wa2GVfCgn-ueFvhjSspSVdY0kfcH39FW6PIXpTWqHkaURvz9KQq0rUPaytkKRR9wMs-VtXoaU59jHuWIZkWdJz7JIS31nQ73gmTNdiD4_Uw5Mq8VzVJPQuQPfHJMCu78ikpu5DUzuN0nRK2wEe-LZRv2GKwEbMuSL9Ssai84A1A6wiP8c-2bBSllrPriMblhMWwYfQ5Tc-183IomgNbFTnpnOvAvbIL8p9yq0D98Rjqf-QS0PeBfn2lbM0QM7fhXHYij8UQylfHvJ9H896VsD_ydGQSzOeL-YBg_0pxXPQN9yfG5atKH8mYROEl5h7cmns-V_DXwL6OhmeK-3HRtZqbiPOzJZv8RfBskG5p5CEXbED6QOKyg_x8cwWzDZ0oIIt_GdFNbrWFqyQJ4-is2rby5ItrHZ0xbRy-4YtamyNX7kwj5lAfxkOU7RD-UOptD79BSnIBb0?type=png)](https://mermaid.live/edit#pako:eNptk91u2zAMhV-F0HX7AhkwoI3bJmu9pk3ai8m9IGw6FuZIhn42eHHefYpk2RlWXxgWzyeS8qGOrFQVsQXba-wa2GVfCgn-ueFvhjSspSVdY0kfcH39FW6PIXpTWqHkaURvz9KQq0rUPaytkKRR9wMs-VtXoaU59jHuWIZkWdJz7JIS31nQ73gmTNdiD4_Uw5Mq8VzVJPQuQPfHJMCu78ikpu5DUzuN0nRK2wEe-LZRv2GKwEbMuSL9Ssai84A1A6wiP8c-2bBSllrPriMblhMWwYfQ5Tc-183IomgNbFTnpnOvAvbIL8p9yq0D98Rjqf-QS0PeBfn2lbM0QM7fhXHYij8UQylfHvJ9H896VsD_ydGQSzOeL-YBg_0pxXPQN9yfG5atKH8mYROEl5h7cmns-V_DXwL6OhmeK-3HRtZqbiPOzJZv8RfBskG5p5CEXbED6QOKyg_x8cwWzDZ0oIIt_GdFNbrWFqyQJ4-is2rby5ItrHZ0xbRy-4YtamyNX7kwj5lAfxkOU7RD-UOptD79BSnIBb0)

#### 3.3 Weather Intelligence
- Real-time weather updates
- Weather forecast for next 7 days and also for the trip duration
- Weather-based itinerary adjustments
- We run  Corn Job which sends weather updates to all active TripPlans
- Severe weather alerts
- Historical weather pattern analysis
- Weather-optimized activity suggestions

Workflow:
[![](https://mermaid.ink/img/pako:eNp9k8GO2jAQhl9l5ENPuy9ApUosATa7LMsSUNU1HEbJQNw6duQ4pYjw7jU2iQiqmoOVGX__ePzbPrFUZ8QGbG-wzGEVfd0ocN-QrysyECtLZocpbeHx8Rs8nXx2mFqh1fmKPl2mmsSisbAyomxgxKcU_iFCSxV8gZlO8SKqtldVGEe-bMQnZNMcvhPa3NV3Imy5yBNj3s4NFzGMUMp-nbGnJnxJKYnf9M9KE89MT-3cSKtM-J7OvVpTv5-RJDQNPPNIVKXEI_hEV3iurdiJsKd2gSBcolANxJ3uEv8HT6w2RQMvHe8TMJRkbJ8c_7GGCoIVFSUZtLWhqoHXTniT78tvj2mY_awrCwuJyoln4ZQjSkV109nMO_V2usI73e27derNF_txaWDO12XmThliK5Rb3xy3PWiuG3jnzmw3XRMchM3h3Yi9UCh9H_02n_3aC57k-nDneUQWhexuUOzJj0B6l--AFw8sAxBsvSNePZEE4ta_Oy6MC0-v-PUN_FL6ICnbF6Q6qz8Cco2WvSjpohCvfLzmY5X17gcsjE6p8ouzB1aQKVBk7omeLroNc14UtGED95vRDmtpN2yjzg7F2urkqFI2sKamB2Z0vc_ZYIeyclHtjykS6J560WVLVJ9at_H5L8nHSOM?type=png)](https://mermaid.live/edit#pako:eNp9k8GO2jAQhl9l5ENPuy9ApUosATa7LMsSUNU1HEbJQNw6duQ4pYjw7jU2iQiqmoOVGX__ePzbPrFUZ8QGbG-wzGEVfd0ocN-QrysyECtLZocpbeHx8Rs8nXx2mFqh1fmKPl2mmsSisbAyomxgxKcU_iFCSxV8gZlO8SKqtldVGEe-bMQnZNMcvhPa3NV3Imy5yBNj3s4NFzGMUMp-nbGnJnxJKYnf9M9KE89MT-3cSKtM-J7OvVpTv5-RJDQNPPNIVKXEI_hEV3iurdiJsKd2gSBcolANxJ3uEv8HT6w2RQMvHe8TMJRkbJ8c_7GGCoIVFSUZtLWhqoHXTniT78tvj2mY_awrCwuJyoln4ZQjSkV109nMO_V2usI73e27derNF_txaWDO12XmThliK5Rb3xy3PWiuG3jnzmw3XRMchM3h3Yi9UCh9H_02n_3aC57k-nDneUQWhexuUOzJj0B6l--AFw8sAxBsvSNePZEE4ta_Oy6MC0-v-PUN_FL6ICnbF6Q6qz8Cco2WvSjpohCvfLzmY5X17gcsjE6p8ouzB1aQKVBk7omeLroNc14UtGED95vRDmtpN2yjzg7F2urkqFI2sKamB2Z0vc_ZYIeyclHtjykS6J560WVLVJ9at_H5L8nHSOM)

#### 3.4 Blog Generation Workflow   
- **User Action:** The user can request a trip blog or manually input blog content.  
- **Data Retrieval:** The system fetches trip itinerary and user profile information.  
- **Event and Memory Analysis:** It identifies notable events/locations and gathers user memories and preferences.  
- **Semantic Photo Search:** Photos are searched and organized based on trip relevance.  
- **Draft Blog Creation:** A personalized blog draft is generated using the query, photos, and trip data.  
- **User Review and Actions:** The user can edit, finalize, or discard the blog draft.  
- **Saving or Deletion:** Finalized blogs are stored in the database, while discarded drafts are removed from the system.  
- **User Notification:** The user receives a notification upon blog publication.

Workflow:
[![](https://mermaid.ink/img/pako:eNptVFFT4jAQ_iuZPINnFZDDmZtRCxwqihRfLvgQ2y1kpk24JMWryH-_bdI6du76kGl2vm-_3c2XHGisEqAjutF8tyWr8HItCX5X7NmAJjNpQac8hhfS7f4g1wcXvYqtUPJYQ_16XQE-lvC7AGPJSosduc7U5oPcsAnYeOtDIbf85fIrY85lwTOHRbVdYT9I2GjjzpAbhTVI-9JSu3HljNkSrBawB599ZoUEzXXZgD1sUlfgsi60SkUGmD1VOudVI-3UY8eZslmCqiItyYOy_BUZ4z0GzLd7FTuWaWgTR_jJptxuUcCpzCFXWJghXCYoCSlokDGYttTUMWcsgpyjVsyzrCQRcN2Ma7FVVn2SZg5-2wgtwRSZRWINI2_C1ryqubbUrePesSlUE7JAQs1T68f-bITckKcCdOnq_eek7hz5ni1AGyV5Jt4h8VSXpYHdO9ichcLsMl56hFVuIu1q5g758NVNprHTg7PFOBG2NtCjt8NcJSKtRtrS9OiJ8FXVjAWL-N5v2jisLOY6qWFPLIQMLPynFb8--r5bsYWLLVlkla6ZQrppvXIDDf_JoSL0Z672zbBTrXISlcZC3tZZOvSKodMqw7l2VUoWxWsmzLaedUWhHZoDulYkeGMPFXlN0Qs5rOkIfxNIOVpiTdfyiFBeWBWVMqYjqwvoUK2KzZaOUp4Z3BW7BH0QCo43P_-M7rj8pVRrT0cH-oeOusFZ7yQYnA_7QXA-GPTxp0NLjH_vn_QG_eFgcNof9ob9i_Njh767HMHJ2UWAsV7vNLg4PRsOOxTwXJWe-zfHPT3HvzE-ZwM?type=png)](https://mermaid.live/edit#pako:eNptVFFT4jAQ_iuZPINnFZDDmZtRCxwqihRfLvgQ2y1kpk24JMWryH-_bdI6du76kGl2vm-_3c2XHGisEqAjutF8tyWr8HItCX5X7NmAJjNpQac8hhfS7f4g1wcXvYqtUPJYQ_16XQE-lvC7AGPJSosduc7U5oPcsAnYeOtDIbf85fIrY85lwTOHRbVdYT9I2GjjzpAbhTVI-9JSu3HljNkSrBawB599ZoUEzXXZgD1sUlfgsi60SkUGmD1VOudVI-3UY8eZslmCqiItyYOy_BUZ4z0GzLd7FTuWaWgTR_jJptxuUcCpzCFXWJghXCYoCSlokDGYttTUMWcsgpyjVsyzrCQRcN2Ma7FVVn2SZg5-2wgtwRSZRWINI2_C1ryqubbUrePesSlUE7JAQs1T68f-bITckKcCdOnq_eek7hz5ni1AGyV5Jt4h8VSXpYHdO9ichcLsMl56hFVuIu1q5g758NVNprHTg7PFOBG2NtCjt8NcJSKtRtrS9OiJ8FXVjAWL-N5v2jisLOY6qWFPLIQMLPynFb8--r5bsYWLLVlkla6ZQrppvXIDDf_JoSL0Z672zbBTrXISlcZC3tZZOvSKodMqw7l2VUoWxWsmzLaedUWhHZoDulYkeGMPFXlN0Qs5rOkIfxNIOVpiTdfyiFBeWBWVMqYjqwvoUK2KzZaOUp4Z3BW7BH0QCo43P_-M7rj8pVRrT0cH-oeOusFZ7yQYnA_7QXA-GPTxp0NLjH_vn_QG_eFgcNof9ob9i_Njh767HMHJ2UWAsV7vNLg4PRsOOxTwXJWe-zfHPT3HvzE-ZwM)

#### 3.5 Image Upload and Textual Search
- Image upload and organization
- Textual search for images embeddings of Dimention 1536 (Using OpenAi text Embedding)
- Image tagging and categorization
- Vector Similarity Search using lencedb
Workflow:
[![](https://mermaid.ink/img/pako:eNplk9tS2zAQhl9lR9fwAmGmMyYmYCAkJKUXlXOx2OtEM7bkkWRoSPLuXcuHpMU3tlbf_nv0QWQmJzERW4v1Dn7GN6kGfiL55shCoj3ZAjPawPX1D7g9BGuUeWW0OzHb0bft7fGtLg3mkFS4JXeEqVxTSZnvDZubS3ZNaLPdyMYy0XXjoTe_NmT3m1F-GoLfyT6ANzBTlt7REay9sSwxiN8FciZbM3XqMCePOXoEpSHmd-t31o6Dx71ckbeKPv53GoTvA_Ygl9Zk5FyXIXwqv4NFTTpKIFomZ9WHgCcy0ljuv2ioa2q4n3_8IJoE6lH2t4WxsOKWfaC-bFrHPgb2ScbK1SXuB8UVuab0ru1JO5ozPwv8s1zYLWr11dfluAmMRuV7U40TeQ7oXAYrzFEzWFGbwzj9UfYpsC_f9qC9ewmT_aXoswt2hMVFuu0qUL8dm388VlQoPfSId2EMtgjBljLKez8Ych8Ell2VfBJXoiJbocp5mQ_tbSr8jutIxYQ_cyqQG5WKVJ8Yxcab9V5nYuJtQ1fCmma7E5MCS8enpubRU6yQf4pqtNaofxsznE9_ASsVCC8?type=png)](https://mermaid.live/edit#pako:eNplk9tS2zAQhl9lR9fwAmGmMyYmYCAkJKUXlXOx2OtEM7bkkWRoSPLuXcuHpMU3tlbf_nv0QWQmJzERW4v1Dn7GN6kGfiL55shCoj3ZAjPawPX1D7g9BGuUeWW0OzHb0bft7fGtLg3mkFS4JXeEqVxTSZnvDZubS3ZNaLPdyMYy0XXjoTe_NmT3m1F-GoLfyT6ANzBTlt7REay9sSwxiN8FciZbM3XqMCePOXoEpSHmd-t31o6Dx71ckbeKPv53GoTvA_Ygl9Zk5FyXIXwqv4NFTTpKIFomZ9WHgCcy0ljuv2ioa2q4n3_8IJoE6lH2t4WxsOKWfaC-bFrHPgb2ScbK1SXuB8UVuab0ru1JO5ozPwv8s1zYLWr11dfluAmMRuV7U40TeQ7oXAYrzFEzWFGbwzj9UfYpsC_f9qC9ewmT_aXoswt2hMVFuu0qUL8dm388VlQoPfSId2EMtgjBljLKez8Ych8Ell2VfBJXoiJbocp5mQ_tbSr8jutIxYQ_cyqQG5WKVJ8Yxcab9V5nYuJtQ1fCmma7E5MCS8enpubRU6yQf4pqtNaofxsznE9_ASsVCC8)


#### 3.5 Video Vlog Generation (Bonus Task)
- **User Query Input:** : The user provides a query specifying the topic for the video vlog.  
- **Collect Trip Data:** : The system gathers relevant images and text contexts from the trip based on the query.  
- **Generate Subtitle:** : A subtitle is created using an expert subtitle writing system.  
- **Combine Images and Subtitle:** : The collected images and generated subtitle are combined to structure the vlog content.  
- **Generate Audio for Subtitle:** : Audio narration is generated based on the subtitle to complement the visual content.  
- **Assemble the Complete Vlog:** : The system combines the images, subtitles, and audio to generate the final video vlog.  
- **User Review and Modification:** : The user can edit or modify the vlog before finalizing it.  
- **Post to Platform:** : The finalized vlog is published on the platform.  
- **Notify TripMates:** : All tripmates receive notifications about the new vlog post.
Workflow:
[![](https://mermaid.ink/img/pako:eNp1k1FvmzAQx7_Kyc8kCgkQxqRJaUjTtEuVKekeBn1w4CCWACNja6Fpvvsc02Rl0nhA9un_u_-dzz6RhKdIApILWh9gF36NK9DfLHppUMCqkigymuArDAbf4O4arZVs4IdC0b5-AN3_zsjm0ZwXBSYSViXNsQFapbDDo4RM8BJ2gtV9bG6wMFpihYJKhK3aSyYLhJeGVTksjjUKCdu2kVj20dCgC-1Y7lmFnx2vSfrAwgD3f71mKmUcMi7-A9wbYPmPg3VT6-XFzaTpk0tDPlzIukBt9bPgeV_yYCSrkznXWSIZr5pzT7G6KN4XKZMGf4fHbghrnrKM6VY_J-3EG95cxU_RRu0L1hxActgUVOo-y746ZE1CRfoBfI9CvNUKoaCZ7Ff82DXViz2Z2Dp65pJlrRnwWh-tHsOeKwnP-PtWJbFIiaKkLNWX7nTBYyIPWGJMAr1MMaOqkDGJq7OWUiX5tq0SEkih0CKCq_xAgowWjd6pOtUuIaP68pa3aE2rX5z39iQ4kSMJBvbYGdrexHdte-J5rl5YpNXxL-7Q8Vzf80au7_judHK2yJvJYQ_HU1vHHGdkT0dj37cI6lFwse6ejXk95z-VC__l?type=png)](https://mermaid.live/edit#pako:eNp1k1FvmzAQx7_Kyc8kCgkQxqRJaUjTtEuVKekeBn1w4CCWACNja6Fpvvsc02Rl0nhA9un_u_-dzz6RhKdIApILWh9gF36NK9DfLHppUMCqkigymuArDAbf4O4arZVs4IdC0b5-AN3_zsjm0ZwXBSYSViXNsQFapbDDo4RM8BJ2gtV9bG6wMFpihYJKhK3aSyYLhJeGVTksjjUKCdu2kVj20dCgC-1Y7lmFnx2vSfrAwgD3f71mKmUcMi7-A9wbYPmPg3VT6-XFzaTpk0tDPlzIukBt9bPgeV_yYCSrkznXWSIZr5pzT7G6KN4XKZMGf4fHbghrnrKM6VY_J-3EG95cxU_RRu0L1hxActgUVOo-y746ZE1CRfoBfI9CvNUKoaCZ7Ff82DXViz2Z2Dp65pJlrRnwWh-tHsOeKwnP-PtWJbFIiaKkLNWX7nTBYyIPWGJMAr1MMaOqkDGJq7OWUiX5tq0SEkih0CKCq_xAgowWjd6pOtUuIaP68pa3aE2rX5z39iQ4kSMJBvbYGdrexHdte-J5rl5YpNXxL-7Q8Vzf80au7_judHK2yJvJYQ_HU1vHHGdkT0dj37cI6lFwse6ejXk95z-VC__l)


#### 2.6 Trip Compenio AI (We added it Extra)
- **Chat Interface:** : The user opens the chat interface to interact with the Trip Companion AI, similar to ChatGPT.  
- **User Query Submission:** : The user submits a trip-related query or asks a question about their travel plans.  
- **AI Knowledge Base Access:** : The AI accesses the trip’s knowledge base, which includes itinerary details, locations, events, and user-specific preferences.  
- **Query Analysis and Data Retrieval:** : The AI analyzes the user’s query and retrieves relevant information from the knowledge base.  
- **Generate and Provide Response:** : Based on the gathered trip data, the AI generates an accurate response or suggestion.  
- **Response Display:** : The response is displayed to the user within the chat interface.  
- **User Follow-Up Actions:** : The user can ask additional queries or end the chat session. 

[![](https://mermaid.ink/img/pako:eNpVksGOmzAQhl9l5DOJQgKEZaVKBJJsVPXQ3e2lkIMFk4AKNrJNt2ySd9-JaTcNB2SP_2_G_mdOrJAlsogdFe8qeE0fcwH0xdkPjQp2wqA68AL3MJl8gVWWVNzAW21IquoOEtl2XNRSQLzbEzrCKytOxhSx_qWtePKMDTdYwvce1bD_W2j8J5ZIs3gHcVGg1jgy8FXItwbLI8KKa7yHUguts1jwZnjHMS9wUcIGTVEB1cPfXBhIueH36Nqim2yLAhVdirS6k0KPZUqgB9ny_8iR2lhqm6W17ho-3CAj4frWm3JrlU-n0YHCkEP68nn6dD09kzEQC2kqktirn2H1-L9gTS-5-n2GXZY0kupY9289ITVzWIuq5XVJPTxd6ZxRxhZzFtGyxAPvG5OzXFxIynsjXwZRsMioHh2mZH-sWHTgjaZd35VkRVpzmoX2M0r9_Snl3Z5FJ_aHRRN37k3dYBH6rrsIAp8WDhso_uBPvcAPg2Dmh17oLxcXh73bHO50vnQp5nkzdzmbh6HDsKyNVN_GKbTDePkAMbrMDA?type=png)](https://mermaid.live/edit#pako:eNpVksGOmzAQhl9l5DOJQgKEZaVKBJJsVPXQ3e2lkIMFk4AKNrJNt2ySd9-JaTcNB2SP_2_G_mdOrJAlsogdFe8qeE0fcwH0xdkPjQp2wqA68AL3MJl8gVWWVNzAW21IquoOEtl2XNRSQLzbEzrCKytOxhSx_qWtePKMDTdYwvce1bD_W2j8J5ZIs3gHcVGg1jgy8FXItwbLI8KKa7yHUguts1jwZnjHMS9wUcIGTVEB1cPfXBhIueH36Nqim2yLAhVdirS6k0KPZUqgB9ny_8iR2lhqm6W17ho-3CAj4frWm3JrlU-n0YHCkEP68nn6dD09kzEQC2kqktirn2H1-L9gTS-5-n2GXZY0kupY9289ITVzWIuq5XVJPTxd6ZxRxhZzFtGyxAPvG5OzXFxIynsjXwZRsMioHh2mZH-sWHTgjaZd35VkRVpzmoX2M0r9_Snl3Z5FJ_aHRRN37k3dYBH6rrsIAp8WDhso_uBPvcAPg2Dmh17oLxcXh73bHO50vnQp5nkzdzmbh6HDsKyNVN_GKbTDePkAMbrMDA)
---

## 4. Technical Architecture

### 4.1 Technology Stack
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

## 5. API Documentation

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

## 6. Project Structure
```
easytrip/
├── app/                  # Next.js app directory
│   ├── +---(auth)
|   |── +---signin
|   |           page.tsx
|   |           
|   |── +---trip
|   |       |   layout.tsx
|   |       |   page.tsx
|   |       |   
|   |       +---ai-bot
|   |       |       page.tsx
|   |       |       
|   |       +---blogs
|   |       |       generate.tsx
|   |       |       page.tsx
|   |       |       
|   |       +---maps
|   |       |       page.tsx
|   |       |       
|   |       +---media
|   |       |       firebase.ts
|   |       |       page.tsx
|   |       |       uploads.tsx
|   |       |       
|   |       +---preview
|   |       |       page-old.tsx
|   |       |       page.tsx
|   |       |       
|   |       +---settings
|   |       |       page.tsx
|   |       |       
|   |       \---vlogs
|   |               page.tsx
|   |               text_to_speech.ts
|   |               
|    -+---api
|   |   +---add-member
|   |   |       route.tsx
|   |   |       
|   |   +---auth
|   |   |   \---[...nextauth]
|   |   |           route.ts
|   |   |           
|   |   +---blog
|   |   |       route.ts
|   |   |       
|   |   +---chat
|   |   |       route.ts
|   |   |       
|   |   +---image
|   |   |       route.ts
|   |   |       
|   |   +---test
|   |   |       route.ts
|   |   |       
|   |   +---trip
|   |   |       route.tsx
|   |   |       
|   |   +---tripPlan
|   |   |   |   route.tsx
|   |   |   |   
|   |   |   \---extract
|   |   |           route.tsx
|   |   |           
|   |   +---trpc
|   |   |   |   trpc-router.ts
|   |   |   |   
|   |   |   \---[trpc]
|   |   |           route.ts
|   |   |           
|   |   +---uploadthing
|   |   |       core.ts
|   |   |       route.ts
|   |   |       
|   |   +---vlog
|   |   |       route.ts
|   |   |       
|   |   \---weather
|   |           route.tsx
├── components/          # React components
│   ├── ui/             # UI components
│   └── features/       # Feature components
├── lib/                # Shared utilities
│   ├── utils/         # Helper functions 
├── python-server/      # FastAPI backend
│   ├── trips/         
│   ├── trip_api      # handelar functions 
└── public/            # Static assets
```
---
  
## Contributors
- **Md Farhan Masud Shohag** - [GitHub](https://github.com/fms-byte)
- **Jahangir Hossain** - [GitHub](https://github.com/jhm69)
- **Muammar Tazwar Asfi** - [GitHub](https://github.com/asfi50)
