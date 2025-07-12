GlowShop - E-commerce Platform
Description
GlowShop is a modern e-commerce platform built to provide a seamless shopping experience with a visually appealing interface inspired by platforms like Pinterest, Flipkart, and Amazon. The frontend is developed using React for a dynamic and responsive user interface, while the backend leverages MongoDB for efficient data storage and management. The application is containerized using Docker for consistent development and deployment environments.
Key features include:

Product browsing with a clean grid layout
Add-to-cart functionality
Responsive design for mobile and desktop users
Scalable backend with MongoDB

Table of Contents

Tech Stack
Installation
Usage
Contributing
License

Tech Stack

Frontend: React, Tailwind CSS (for styling)
Backend: Node.js, Express.js, MongoDB
Containerization: Docker
Other Tools: Git, GitHub

Installation
Follow these steps to set up the project locally:

Clone the Repository
git clone https://github.com/parinitay/parinita_y_67i8.git
cd parinita_y_67i8


Set Up Environment VariablesCreate a .env file in the root directory and add the following:
MONGODB_URI=your_mongodb_connection_string
PORT=5000

Replace your_mongodb_connection_string with your MongoDB connection string.

Install Dependencies

For the frontend:cd client
npm install


For the backend:cd server
npm install




Run with DockerEnsure Docker is installed, then build and run the containers:
docker-compose up --build

This will start both the frontend (React) and backend (Node.js with MongoDB) services.

Access the ApplicationOpen your browser and navigate to http://localhost:3000 for the frontend.


Usage

Browse products displayed in a responsive grid layout.
Click on a product to view details or add it to the cart.
The backend handles product data storage and retrieval via MongoDB.
Use Docker to ensure consistent environments across development and production.

For example, to start the frontend and backend locally without Docker:
# Backend (in server directory)
npm start
# Frontend (in client directory)
npm start

Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes and commit (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature-name).
Open a Pull Request.

Please ensure your code follows the project's coding standards and includes appropriate tests.
License
This project is licensed under the MIT License - see the LICENSE file for details.

<img width="1913" height="978" alt="image" src="https://github.com/user-attachments/assets/0d01aa12-96c3-4535-9bf4-d550691b4d30" />




