# Video Search and Favorites App

This project is a React application that allows users to search for videos using the YouTube API and favorite them for later viewing. The app includes two main pages: a search page for finding videos and a favorites page for viewing the saved videos.

## Project:

![Captura de tela 2024-07-03 201516](https://github.com/oliveiramatheus212/iCasei/assets/61399334/22a61b92-4f86-49c2-903a-091b78c17891)
![Captura de tela 2024-07-03 201549](https://github.com/oliveiramatheus212/iCasei/assets/61399334/b9b528b7-15fc-4b5d-98fe-4852edb67ba8)
![Captura de tela 2024-07-03 201604](https://github.com/oliveiramatheus212/iCasei/assets/61399334/4b0f6cce-c9a5-43a5-8cce-9c4c2ee3dc26)
![Captura de tela 2024-07-03 201620](https://github.com/oliveiramatheus212/iCasei/assets/61399334/08be683a-7c7b-432b-a192-1eab41a9a10e)

### Deploy

The app was also deployed with NetlifyApp and it's running on: https://icasei.netlify.app/

## Features

- **Video Search**: Search for videos using the YouTube API.
- **Favorites Management**: Add or remove videos from favorites.
- **Persistent State**: Favorite videos are stored in `localStorage` to persist between sessions.
- **Navigation**: Navigate between the search page and the favorites page.
- **Context API**: Utilizes React Context API to manage state across the application.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Router
- YouTube API
- Context API
- Local Storage

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/oliveiramatheus212/iCasei.git
    cd iCasei
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Generate your API key:**

   create or use an existing google account.
   
   go to: https://console.cloud.google.com/welcome?project=icasei-428122

   follow the steps on: https://www.youtube.com/watch?v=uz7dY8qTFJw

4. **Use your API key:**

   open the project

   navigate to src/api/youtube.ts

   on line 3: const API_KEY = 'YOUR API KEY HERE';

   replace YOUR API KEY HERE for your generated API key.

5. **Start the development server:**

    ```sh
    npm start
    ```

    The app should now be running on `http://localhost:3000`.
