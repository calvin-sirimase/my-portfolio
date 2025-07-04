# Calvin Sirimase Portfolio Website

This is a personal portfolio website showcasing my skills, experience, and projects.

## Firebase Setup Instructions

To set up the visitor counter with Firebase:

1. Create a Firebase account at [firebase.google.com](https://firebase.google.com/)
2. Create a new Firebase project
3. Enable Firebase Hosting and Realtime Database
4. Update the Firebase configuration in `js/visitor-counter-firebase.js` with your own Firebase project details:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

5. Update the `.firebaserc` file with your Firebase project ID:

```json
{
  "projects": {
    "default": "YOUR_PROJECT_ID"
  }
}
```

6. Install Firebase CLI:
```
npm install -g firebase-tools
```

7. Login to Firebase:
```
firebase login
```

8. Deploy to Firebase:
```
firebase deploy
```

## Features
- Responsive design
- Interactive UI elements
- Visitor counter using Firebase
- Project showcase
- Skills visualization
- Contact form

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Firebase (Hosting & Realtime Database)
- GSAP for animations