Live Link of the Application: https://coffeetea-19503.web.app/home

Here's a breakdown of the features of this web application and the technologies used:

Features:

Authentication: Firebase is used for user authentication, allowing users to create accounts and log in securely.

Private Routes: The application has multiple private routes, including Home, ADD coffee, my cart, and user, ensuring that only authenticated users can access these pages.

Home Route:

Allows users to view products.
ADD Coffee Route:

Allows users to add new coffee products to the database.
These added products appear in the "my cart" route.
My Cart Route:

Displays the coffee products added by the user.
Each product in the cart has the following features:
Update Button: Users can modify the product information.
View Button: Allows users to view product details and related ads.
Delete Button: Enables users to remove the product from their cart and the database.
User Route:

Displays user-related information.
Shows the user's email.
Provides the account creation timestamp.
Technologies Used:

Frontend: React.js

React.js is used to create the user interface and handle the client-side of the application.
Backend: Node.js

Node.js serves as the backend, handling requests from the frontend and interacting with the database.
Database: MongoDB

MongoDB is used to store product data, user information, and cart contents.
Authentication: Firebase

Firebase is employed for user authentication, providing a secure and user-friendly login/signup process.
By combining these technologies, your web application provides users with a secure and intuitive way to view, add, manage, and purchase coffee products while ensuring the privacy and integrity of user accounts and data.
