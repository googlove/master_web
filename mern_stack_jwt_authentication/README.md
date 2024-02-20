# MERN Stack JWT Authentication

This is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack with JSON Web Token (JWT) authentication. The application provides a basic authentication system that allows users to signup, login, and logout. Upon successful authentication, the user is redirected to a dashboard page.

### Features

- User registration with email and password
- User login with email and password
- User logout
- JSON Web Token (JWT) authentication
- Dashboard page after successful authentication

### Installation

1. Clone the repository using the following command:
   git clone https://github.com/manir22sust/mern_stack_jwt_authentication.git

2. Install the dependencies using the following command:
   npm install

3. Create a .env file in the root directory of the project and add the following configuration:
   MONGO_URI=<your_mongodb_uri>
   JWT_SECRET=<your_jwt_secret_key>

Replace <your_mongodb_uri> with your MongoDB connection string and <your_jwt_secret_key> with your preferred secret key.

4. Run the application using the following command:

yarn dev or npm run dev

The application should now be running on http://localhost:5173.

### Usage

1. User registration
   To register a new user, navigate to the registration page by clicking on the "Register" link in the navigation bar. Enter a valid email address and a password, then click on the "Register" button. If the registration is successful, you will be redirected to the login page.
2. User login
   To log in, navigate to the login page by clicking on the "Login" link in the navigation bar. Enter the email address and password you used during registration, then click on the "Login" button. If the login is successful, you will be redirected to the dashboard page.
3. User logout
   To log out, click on the "Logout" button in the navigation bar. You will be logged out and redirected to the login page.
4. Dashboard page
   The dashboard page displays a welcome message with the user's email address. If the user is not logged in, they will be redirected to the login page.

### Conclusion

This MERN stack application with JWT authentication provides a basic authentication system that can be used as a starting point for more complex applications. The application uses modern technologies and best practices to ensure security and scalability.
