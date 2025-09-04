# real-e-state-webapp

🏡 Real Estate Web Application

A real estate web application built with React.js, Firebase Authentication, TailwindCSS, and React Router.
This project was developed as part of the ReactJS Development Internship assignment.

🚀 Features

🔑 Authentication

Signup and Login using Firebase Authentication

User session stored via Context API + LocalStorage

🏠 Pages

Home Page → Hero Banner, What We Do, Featured Properties, Properties for Sale/Rent, Newsletter, Footer

Property Listing Page → All properties (from API), filter by Sale/Rent

Signup Page → Create new account

Login Page → Authenticate and redirect to Home

🌐 Dynamic Data

Property listings fetched from Mock API:

https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing


📱 Responsive Design

Built with TailwindCSS for mobile & desktop responsiveness.

📂 Folder Structure
src/
 ├── components/    # Navbar, Footer, PropertyCard, Form, etc.
 ├── pages/         # Home, Listings, Login, Signup
 ├── services/      # firebase.js (Firebase config), api.js (API helper)
 ├── context/       # AuthContext (user state)
 ├── App.jsx        # Routes setup
 └── index.css      # TailwindCSS styles

⚙️ Setup Instructions
1. Clone Repository
git clone https://github.com/AsadAhmadDev/real-estate-app.git
cd real-estate-app

2. Install Dependencies
npm install

3. Setup TailwindCSS

Already configured in tailwind.config.js and index.css.

4. Firebase Setup

Go to Firebase Console
.

Create a new project.

Enable Email/Password Authentication under Authentication → Sign-in Method.

Add a Web App and copy the Firebase config.

Create a .env file in the project root:

VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

▶️ Run the App
npm run dev


The app will be available at:
👉 http://localhost:5173/

📸 Screenshots

Home Page


Property Listings


Signup Page


Login Page


🎥 Video Demonstration

📌 A walkthrough video of the project has been created.
👉 Google Drive Link
 (Replace with your uploaded demo link)

🌍 Deployment

Deployed on: Netlify Link
 (https://reswa.netlify.app/)

✅ Evaluation Checklist

 Pixel-perfect UI (close to Figma design)

 Firebase Authentication working

 Dynamic API integration (no hardcoded data)

 Clean code structure

 Responsive across devices
