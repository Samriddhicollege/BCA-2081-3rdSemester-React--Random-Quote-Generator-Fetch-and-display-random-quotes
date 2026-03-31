Project Title
Random Quote Generator Using API

Student Information
Name: Hemanta Raj Bhatta

Roll Number: 10

Course / Program: React Development

Semester / Year: 3rd Semester

Instructor Information
Instructor Name: Mr. Dipak Shrestha

Course Title: React Development

College Name: Samriddhi College

Project Overview
This project is a dynamic, web-based Random Quote Generator developed entirely using React on the frontend. It fetches motivational and wisdom quotes from an external API and displays them instantly. Users can generate new quotes, copy them, share them on social media, and save favorites locally. The system leverages LocalStorage to provide a persistent CRUD experience for managing saved quotes. The main goal is to deliver an accessible, user-friendly tool for students, writers, and enthusiasts seeking daily inspiration.

Objectives
Build a minimal, mobile-responsive React application

Implement clean, component-based UI architecture

Handle API requests and state management using React hooks

Integrate native browser functionality like LocalStorage seamlessly

Technologies Used
Frontend

React.js (Bootstrapped with Vite)

JavaScript (ES6+)

HTML5 & CSS3

Storage & APIs

Client-side LocalStorage (Persistent State)

External Quote API (Fetch integration)

Other Tools

Git & GitHub

Key Features
Fetch random quotes from API (wisdom, success, motivational categories)

Full LocalStorage CRUD implementation (Create, Read, Update, Delete) for favorite quotes


State Management with React hooks (useState, useEffect)

Responsive UI Design reflecting modern minimalist aesthetics

Screens / Modules
Main Quote Hub (Generate and display quotes)

Favorites Panel (Saved quotes with editing options)

# Clone repository
git clone https://github.com/Samriddhicollege/BCA-2081-3rdSemester-React--Random-Quote-Generator-Fetch-and-display-random-quotes.git

# Go to project folder
cd random-quote-generator

# Install dependencies
npm install

# Run frontend development server
npm run dev

/random-quote-generator
│── public/
│   └── index.html
│── src/
│   ├── assets/                # images, icons, etc.
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   ├── FavoriteItem.jsx
│   │   ├── FavoriteList.jsx
│   │   ├── FavoriteList.css
│   │   ├── QuoteGenerator.jsx
│   │   └── QuoteGenerator.css     
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│── .gitignore
│── eslint.config.js
│── package.json
│── package-lock.json
│── vite.config.js
│── README.md


GitHub & Live Demo
GitHub Repository: Random Quote Generator Repo

Live URL (if deployed): [Insert Live Demo Link]

Testing
Verified API fetch functionality across multiple reloads

Tested UI responsiveness on mobile and desktop breakpoints

Checked LocalStorage persistence across sessions

Challenges Faced
Handling asynchronous API calls and error states

Managing state updates efficiently without re-render issues

Synchronizing LocalStorage CRUD operations with React lifecycle

Future Enhancements
Add category filters (e.g., motivational, wisdom, humor)

Implement improved animations for quote transitions

Expand API integration for multiple sources

Acknowledgement
I would like to thank my instructor Mr. Dipak Shrestha for his guidance and foundational support throughout this project course.

Declaration
I hereby declare that this project is my original work and has been completed accurately as part of my final academic submission.
