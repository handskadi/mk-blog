# MK Blog - Full-Stack Blog Application

This project is a full-stack blog platform integrating a React front-end, a Node.js back-end, and MongoDB for data storage. Users can post articles, view comments, and interact with content. It showcases how to build and deploy a full-stack web application using modern web technologies.

## Features

- **React Front-End**: User-friendly and responsive interface built with React.
- **Node.js and Express Back-End**: RESTful API for managing blog posts and comments.
- **MongoDB**: NoSQL database for storing posts, comments, and user data.
- **User Authentication**: Handles user login and registration using JWT (JSON Web Tokens).
- **AWS Deployment**: Fully hosted and deployed on Amazon Web Services (AWS).

## Technologies Used

- **Frontend**: React, Axios, Bootstrap, JavaScript, HTML, CSS
- **Backend**: Node.js, Express.js, JWT Authentication, MongoDB, Mongoose
- **Database**: MongoDB for storing posts, comments, and user information
- **Cloud**: AWS for deployment

## Project Structure

```bash
├── frontend                 # React front-end
│   ├── public               # Public assets like index.html
│   └── src                  # React components, hooks, and styling
├── backend                  # Node.js back-end
│   ├── routes               # API routes for posts and users
│   └── models               # MongoDB schemas and logic
├── .env                     # Environment variables (add this in your setup)
└── README.md                # Project documentation
```

## Installation and Setup

To run this project locally, follow these steps:

### Clone the repository:

```bash
git clone https://github.com/handskadi/mk-blog.git
```

# Clone the repository

```bash
git clone https://github.com/handskadi/mk-blog.git
```

# Navigate into the project directory

```bash
cd mk-blog
```

# Install Frontend dependencies

```bash
cd frontend
npm install
```

# Install Backend dependencies

```bash
cd ../backend
npm install
```

# Create a .env file in the backend directory

```bash
cat <<EOT >> .env
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret_key
EOT
```

# Start the Frontend server

```bash
cd ../frontend
npm start &
```

# Start the Backend server

```bash
cd ../backend
npm run dev
```
