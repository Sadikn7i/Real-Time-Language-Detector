# Real-Time Language Detector

A sleek, modern web application that automatically detects the language of text as you type. Built with a Node.js & Express backend API and a dynamic vanilla JavaScript frontend, this project showcases a clean client-server architecture and a stylish, responsive UI featuring a "glassmorphism" design with an animated gradient background.

![Language Detector Screenshot](https://i.imgur.com/7gqQ7oK.png)

---

## Features

-   **Real-Time Detection:** Automatically analyzes text moments after you stop typing (debouncing).
-   **Accurate Language Recognition:** Utilizes the powerful `franc` library, which supports over 180 languages.
-   **Modern UI/UX:** A beautiful "frosted glass" interface with a dynamic, animated background.
-   **Dynamic Feedback:** Features include a live character counter and an animated loading spinner during analysis.
-   **Pure JavaScript Frontend:** No frontend frameworks needed—just clean, efficient vanilla JavaScript.
-   **RESTful Backend API:** A simple and focused Express API that handles all the language detection logic.

---

## Tech Stack

-   **Backend:** Node.js, Express.js
-   **Language Detection:** [Franc](https://github.com/wooorm/franc), [Langs](https://github.com/adlawson/langs)
-   **Frontend:** HTML5, CSS3, Vanilla JavaScript
-   **Development:** Nodemon for automatic server restarts

---
---

##  Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and `npm` installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/language-detector.git](https://github.com/your-username/language-detector.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd language-detector
    ```
3.  **Install the dependencies:**
    ```sh
    npm install
    ```
4.  **Run the application:**
    ```sh
    npm start
    ```
    The server will start on `http://localhost:3000`. Open this URL in your browser to use the app.

---

## How It Works

The application is split into two main parts:

1.  **The Frontend (`public` folder):** When a user types in the textarea, a JavaScript event listener waits for them to pause. It then sends the text to the backend API using a `fetch` request. It receives the JSON response and dynamically updates the UI to show the detected language.

2.  **The Backend (`index.js`):** An Express server listens for `POST` requests at the `/api/detect` endpoint. When it receives text, it uses the `franc` library to get the three-letter language code (e.g., `eng`). It then uses the `langs` library to convert this code into a full, human-readable name (e.g., "English") and sends this information back to the frontend as a JSON object.

---

## License

This project is open-source and available under the **MIT License**.
