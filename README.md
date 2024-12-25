
# Authentication System

This project is an authentication system built with **Next.js** on the frontend and **Express.js** on the backend using **MongoDB** as databse for storing user data. It includes the following features:

- Login
- Logout
- Email Verification
- Forgot Password
- Reset Password
- Login with Google (using Passport.js)
- State Management (using Redux)

## Table of Contents

1. [Getting Started](#getting-started)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup](#setup)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

---

## Getting Started

To get started, clone the repository and follow the setup instructions below to run the project locally.

## Features

### 1. Login
- Users can log in using their email and password.
- Google OAuth login is also supported.

### 2. Logout
- Securely log out users from their session.

### 3. Email Verification
- New users receive a verification email with a link to verify their email address.

### 4. Forgot Password
- Users can request a password reset link sent to their registered email.

### 5. Reset Password
- Users can reset their password using the link provided via email.

### 6. Login with Google
- Login using Google OAuth 2.0 with Passport.js.

### 7. State Management
- Redux is used for managing user authentication states.

## Technologies Used

- **Frontend**: Next.js, Redux
- **Backend**: Express.js, Node.js
- **Authentication**: Passport.js (Google OAuth2)
- **Database**: MongoDB
- **Email Service**: NodeMailer 

## Setup

### Prerequisites

- Node.js installed (version 14 or higher)
- npm or yarn installed
- MongoDB (or your preferred database) running locally or on a cloud service

### Steps

#### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-name>
```

#### 2. Install Dependencies

##### Frontend
```bash
cd frontend
npm install
```

##### Backend
```bash
cd backend
npm install
```

#### 3. Configure Environment Variables
Set up the environment variables as described above.

#### 4. Start the Development Servers

##### Backend
```bash
cd backend
npm run dev
```

##### Frontend
```bash
cd frontend
npm run dev
```

### The app will be available at `http://localhost:3000`.

## Usage

1. Register a new user.
2. Verify the user email through the verification link.
3. Login using email/password or Google OAuth.
4. Use the "Forgot Password" feature to reset your password if needed.


## Contributing

Contributions are welcome! Please open an issue or create a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
